import styled, { css } from 'styled-components';

const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   color: black;
   text-decoration: none;
   padding: 0;
   width: 220px;
   background-color: ${({ activeColor, theme }) => theme[activeColor]};
   height: 47px;
   border: none;
   font-family: 'Montserrat';
   border-radius: 50px;
   font-weight: 600;
   text-transform: uppercase;
   font-size: 16px;

   ${({ secondary }) =>
      secondary &&
      css`
         background-color: hsl(0, 0%, 90%);
         width: 105px;
         height: 30px;
         font-size: 10px;
      `}
`;

export default Button;

// background-color: ${({ color }) => color || 'hsl(49,100%,58%)'};
