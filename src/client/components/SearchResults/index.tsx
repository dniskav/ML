import React from 'react';
import styled from 'styled-components';
import { IResultCollection } from '../../redux/types';
import ResultItem from '../ResultItem/index';

const StyledSearchResults = styled.div``;

const SearchResults: React.FC<IResultCollection> = ({ results }) => {
  const list = Object.values(results).slice(0, 4);
  return (
    <StyledSearchResults>
      {list.map((item: any) => (
        <ResultItem
          id={item.id}
          key={item?.id}
          freeShipping={item?.shipping?.free_shipping}
          currencyId={item?.currency_id}
          image={{src: item?.thumbnail, alt: item?.title}}
          data={{ description: item?.title, status: item?.condition }}
          price={item?.price}
          location={item?.address?.state_name}
        />
      ))}
    </StyledSearchResults>
  );
};

export default SearchResults;
