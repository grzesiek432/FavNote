import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = () => (
   <UserPageTemplate>
      <h1>Note</h1>

      <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus
         modi tempore esse adipisci, dolore odit animi
      </p>
      <Link to="/">go back</Link>
   </UserPageTemplate>
);

export default DetailsTemplate;
