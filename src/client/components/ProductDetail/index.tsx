import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailItem } from '../../redux/actions';
import { getCurrentItem } from '../../redux/selectors/'
import { ICurrentItem } from '../../redux/types';
import styled from 'styled-components';
import getSymbolFromCurrency from 'currency-symbol-map';

interface RouteParams {
  id: string
}

const BuyBtn = styled.button`
  background-color: #3483FA;
  border: none;
  border-radius: 4px;
  color: #fff;
  height: 42px;
  width: 240px;
`;

const Container = styled.div`
  background-color: #fff;
  color: #666;
  box-sizing: border-box;
  padding: 20px;
`;

const ItemTop = styled.div`
  display: flex;
  flex-direction: row;
`;

const Price = styled.div`
  display: flex;
  font-size: 44px;
  margin: 32px 0;
`;

const ItemImages = styled.div`
  display: flex;
  justify-content: center;
  width: 760px;
`;

const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

const Caption = styled.div`
  display: flex;
  margin: 32px 0 16px 0;
`;

const Title = styled.h1`
  display: flex;
  font-size: 24px;
  margin: 0;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;

  & > h2 {
    font-size: 24px;
    font-weight: 400;
  };
  .description {
    font-weight: 400;
    font-size: 16px;
    word-break: break-word;
    width: 654px;
  }
`;

const PDP: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const dispatch = useDispatch();

  const currentItem: ICurrentItem = useSelector(getCurrentItem);

  useEffect(() => {
    dispatch(fetchDetailItem(id))
  }, [id, dispatch]);

  return (
    <Container>
      <ItemTop>
        <ItemImages><img src={currentItem?.pictures[0]?.url} alt="lorem" /></ItemImages>

        <ItemData>
          <Caption>{currentItem.condition === 'new' ? 'Nuevo' : 'Usado'} vendidos: {currentItem.sold_quantity}</Caption>

          <Title>{currentItem.title}</Title>

          <Price>{getSymbolFromCurrency(currentItem.currency_id)} {currentItem.price}</Price>

          <BuyBtn>Comprar</BuyBtn>
        </ItemData>
      </ItemTop>

      <Description>
        <h2>Descripción del producto</h2>
        <div className="description">{currentItem.description}</div>
      </Description>
    </Container>
  )
}

export default PDP;
