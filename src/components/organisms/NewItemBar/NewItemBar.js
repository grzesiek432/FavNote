import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const StyledWrapper = styled.div`
   border-left: 5px solid ${({ activeColor, theme }) => theme[activeColor]};
   z-index: 9999;
   position: fixed;
   display: flex;
   flex-direction: column;
   padding: 100px 90px;
   right: 0;
   top: 0;
   height: 100vh;
   width: 680px;
   background-color: white;
   box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
   transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
   transition: transform 0.25s ease-in-out;
`;

const StyledForm = styled(Form)`
   display: flex;
   flex-direction: column;
`;

const StyledInput = styled(Input)`
   margin-top: 30px;
`;

const StyledTextArea = styled(Input)`
   border: 20px;
   margin: 30px 0 100px;
   height: 30vh;
`;

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => (
   <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
      <Heading big>Create new {pageContext}</Heading>
      <Formik
         initialValues={{ title: '', content: '', articleUrl: '', twitterName: '', created: '' }}
         onSubmit={(values) => {
            addItem(pageContext, values);
            handleClose();
         }}
      >
         {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <StyledForm>
               <StyledInput
                  type="text"
                  name="title"
                  placeholder="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
               />
               {pageContext === 'twitters' && (
                  <StyledInput
                     placeholder="twitter name eg. hello_roman"
                     type="text"
                     name="twitterName"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.twitterName}
                  />
               )}
               {pageContext === 'articles' && (
                  <StyledInput
                     placeholder="link"
                     type="text"
                     name="articleUrl"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.articleUrl}
                  />
               )}

               <StyledTextArea
                  placeholder="description"
                  name="content"
                  as="textarea"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.content}
               />
               <Button type="submit" activeColor={pageContext}>
                  Add Note
               </Button>
            </StyledForm>
         )}
      </Formik>
   </StyledWrapper>
);

NewItemBar.propTypes = {
   pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
   isVisible: PropTypes.bool,
};

NewItemBar.defaultProps = {
   pageContext: 'notes',
   isVisible: false,
};

const mapDispatchToProps = (dispatch) => ({
   addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});
export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
