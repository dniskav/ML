import React from 'react';
import styled from 'styled-components';
import mag from '../../assets/ic_Search.png'

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.button`
  align-items: center;
  border: none;
  display: flex;
  justify-content: center;
  margin-left: 1px;
  width: 38px;
  &:focus {
    outline: none;
  }
`;

const StyledInput = styled.input`
  border: 1px solid transparent;
  box-sizing: border-box;
  height: 38px;
  margin-left: 25px;
  outline: none;
  padding: 3px 10px 0;
  width: 867px;
`;

const SearchBox: React.FC = () => {

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
