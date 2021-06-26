import styled from 'styled-components';
import Form from '../components/Form';
import Summary from '../components/Summary';
import { useEffect } from 'react';
import Inputmask from 'inputmask';

const PaymentContent = ({ cart }) => {
  const masked = () => {
    const ccv = document.querySelector('#ccv');
    const card_number = document.querySelector('#card_number');
    Inputmask({ mask: '999' }).mask(ccv);
    Inputmask({ mask: '9999 9999 9999 9999' }).mask(card_number);
  };
  useEffect(() => {
    masked();
  }, []);
  return (
    <Wrapper>
      <PayFormWrapper>
        <Form />
      </PayFormWrapper>
      <Summary data={cart} url="#" text="Siparişi Tamamla" />
    </Wrapper>
  );
};

export default PaymentContent;

const Wrapper = styled.section`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: papayawhip;
  min-height: calc(100vh - 80px);
`;

const PayFormWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
