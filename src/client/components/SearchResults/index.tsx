import React from 'react';
import styled from 'styled-components';
import { IResultCollection, IResultItem } from '../../redux/types';
import ResultItem from '../ResultItem/index';

const StyledSearchResults = styled.div``;

const SearchResults: React.FC<IResultCollection> = ({ results }) => {
  return (
    <StyledSearchResults>
      {results.map((item: IResultItem) => (
        <ResultItem
          key={item.image.alt}
          image={item.image}
          data={item.data}
          price={item.price}
          location={item.location}
        />
      ))}
    </StyledSearchResults>
  );
};

export default SearchResults;
