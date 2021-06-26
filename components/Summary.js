import styled from 'styled-components';
import { colors } from '../config/theme';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Summary = ({ data, url, text }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const errorMessage = (el, message, parent = true) => {
    if (parent) {
      el.parentElement.querySelector('.js-form-error').innerHTML = message;
    } else {
      el.querySelector('.js-form-error').innerHTML = message;
    }
  };

  const clearError = (el, message, parent = true) => {
    if (parent) {
      el.parentElement.querySelector('.js-form-error').innerHTML = '';
    } else {
      el.querySelector('.js-form-error').innerHTML = '';
    }
  };

  const payHandler = () => {
    const card_holder = document.querySelector('#card_holder').value;
    const card_number = document.querySelector('#card_number').value;
    const card_month = document.querySelector('#card_month').selectedIndex;
    const card_year = document.querySelector('#card_year').selectedIndex;
    const ccv = document.querySelector('#ccv').value;
    const errorWrapper = document.querySelector('.js-form-error');

    if (
      !card_holder ||
      !card_number ||
      !ccv ||
      card_month == 0 ||
      card_year == 0
    ) {
      errorWrapper.innerHTML = 'Lütfen tüm alanları doldurunuz.';
      return false;
    }

    errorWrapper.innerHTML = '';
    window.location.href = 'success';
  };

  useEffect(() => {
    let items = 0;
    let price = 0;
    data.forEach((item) => {
      items += item.qty;
      price += item.qty * item.sale_price;
    });
    setTotalItems(items);
    setTotalPrice(price);
  }, [data, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  return (
    <SummaryWrapper>
      <Title>Sipariş Özeti</Title>
      <Content>
        <Col>Toplam ({totalItems} ürün)</Col>
        <Col>₺{totalPrice}</Col>
      </Content>
      {url !== '#' ? (
        <Link href={url}>
          <Button href={url}>{text}</Button>
        </Link>
      ) : (
        <Button onClick={payHandler}>{text}</Button>
      )}
    </SummaryWrapper>
  );
};

export default Summary;

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  display: flex;
`;
const Col = styled.div`
  display: flex;
`;
const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.white};
  padding: 10px 15px;
  border-radius: 5px;
  background: ${colors.oxford};
  cursor: pointer;
`;
