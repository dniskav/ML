import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/';
import SearchBox from '../SearchBox/';

const StyledHeader = styled.div`
    align-items: center;
    border: none;
    border-bottom: 1px solid rgb(0 0 0 / 10%);
    display: flex;
    height: 58px;
    justify-content: center;
    background: #ffe600;
`;

const Header: React.FC = () => {

  return(
    <StyledHeader>
      <Logo />
      <SearchBox />
    </StyledHeader>
  )
};

export default Header;
