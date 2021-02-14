import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import mag from '../../assets/ic_Search.png';
import { fetchItemsList } from '../../redux/actions';

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
  const dispatch = useDispatch();

  const _handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      dispatch(fetchItemsList(searchTerm));
    }
  };

  const search = () => {
    dispatch(fetchItemsList(searchTerm));
  };

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <StyledSearch>
      <StyledInput
        type="text"
        placeholder="Nunca dejes de buscar"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={_handleKeyDown}
      />
      <StyledButton onClick={() => search()}>
        <img src={mag} alt="buscar" />
      </StyledButton>
    </StyledSearch>
  );
};

export default SearchBox;
