import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  display:flex;
  font-size: 0.85em;
  height: 46px;
  padding: 16px 4px;
`;

const BreadCrumbs: React.FC = () => {

  return(
    <Container>
      Electronica, Audio y video &gt; iPod &gt; Reproductores &gt; ipod touch &gt; 32 GB
    </Container>
  )
};

export default BreadCrumbs;
