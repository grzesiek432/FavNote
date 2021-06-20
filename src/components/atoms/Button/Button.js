import styled, { css } from 'styled-components';

const Button = styled.button`
   width: ${({ width }) => width || '220px'};
   background-color: ${(props) => props.theme.primary};
   height: 47px;
   border: none;
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
