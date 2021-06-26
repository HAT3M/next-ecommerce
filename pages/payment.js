import styled from 'styled-components';
import { connect } from 'react-redux';
import PaymentContent from '../components/Payment';
import EmptyBasket from '../components/EmptyBasket';

const Payment = ({ cart }) => {
  return (
    <>{cart.length > 0 ? <PaymentContent cart={cart} /> : <EmptyBasket />}</>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Payment);

const Wrapper = styled.section`
  width: 500px;
  padding: 1rem;
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
