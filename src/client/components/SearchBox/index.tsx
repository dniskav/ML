import React from 'react';
import styled from 'styled-components';
import mag from '../../assets/ic_Search.png'

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  width: 38px;
  &:focus {
    outline: none;
  }
`;

const StyledInput = styled.input`
  border: 1px solid transparent;
  width: 758px;
  height: 32px;
  margin-left: 20px;
  padding: 3px 10px 0;
  box-sizing: border-box;
  outline: none;
`;

const SearchBox = () => {

  return(
    <StyledSearch>
      <StyledInput type="text" placeholder="Nunca dejes de buscar" />
      <StyledButton>
        <img src={mag} alt="buscar"/>
      </StyledButton>
    </StyledSearch>
  )
};

export default SearchBox;
