import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  display:flex;
  font-size: 0.85em;
  height: 46px;
  padding: 16px 4px;
  color: #444;
  & a {
    text-decoration: none;
    color: #444;
  }
`;

interface IBreadCrumbs {
  data: any,
}

const BreadCrumbs: React.FC<IBreadCrumbs> = ({ data }) => {

  return(
    <Container>
      Categoría &gt; &nbsp; <a href={data.bUrl}>{data.bName}</a> 
    </Container>
  )
};

export default BreadCrumbs;
