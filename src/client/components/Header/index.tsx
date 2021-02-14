import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/';
import SearchBox from '../SearchBox/';

const StyledHeader = styled.div`
    align-items: center;
    border: none;
    display: flex;
    height: 50px;
    justify-content: center;
    width: 1130px;
    background: #ffe600;
`;

const Header = () => {

  return(
    <StyledHeader>
      <Logo />
      <SearchBox />
    </StyledHeader>
  )
};

export default Header;
