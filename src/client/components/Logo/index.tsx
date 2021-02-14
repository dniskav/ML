import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/Logo_ML.png';


const StyledLogo = styled.img`
  width: 53px;
  height: 36px;
`;

const Logo: React.FC = () => {

  return(
    <StyledLogo src={logo} onClick={() => console.log('logo clicked!')}/>
  )
};

export default Logo;
