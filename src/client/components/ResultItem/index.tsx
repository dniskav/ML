import React from 'react';
import styled from 'styled-components';
import { IResultItem } from '../../redux/types';
import getSymbolFromCurrency from 'currency-symbol-map'
import ShippingIcon  from '../../assets/ic_shipping.png'

const Container = styled.div`
  display: flex;
  padding: 16px;
  background-color: #fff;
  margin-bottom: 1px;
  color: #333;
  font-weight: 300;
  line-height: 1.3;
`;

const Price = styled.div`
  margin-bottom: 32px;
  font-size: 1.5em;
  `;

const Description = styled.div`
  width: 580px;
  & > a {
    text-decoration: none;
    color: #333;
  }
`;

const Thumbnail = styled.a`
  width: 180px;
  height: 180px;
  & > img {
    object-fit: cover;
    width: 180px;
    height: 180px;
  }
`;

const Location = styled.div`
  font-size: 0.8em;
  margin-top: 26px;
`;

const ResultItem: React.FC<IResultItem> = ({ id, image, price, data, location, currencyId, freeShipping }) => {
  
  return(
    <Container>
      <Thumbnail href={`#$${id}`}>
        <img src={image.src} alt={image.alt} className="thumbnail" />
      </Thumbnail>

      <div className="item-data">
        <Price>
          {getSymbolFromCurrency(currencyId)} {price} {freeShipping && <img src={ShippingIcon} alt="free shipping" />}
        </Price>

        <Description>
          <a href={`#$${id}`}>
            <div>{data.description}</div>
          </a>

          <div>{data.status}</div>
        </Description>
      </div>

      <div className="item-location">
        <Location>
          {location}
        </Location>
      </div>
    </Container>
  )
};

export default ResultItem;
