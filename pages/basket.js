import styled from 'styled-components';
import { connect } from 'react-redux';
import BasketContent from '../components/Basket';
import EmptyBasket from '../components/EmptyBasket';

const Basket = ({ cart }) => {
  return (
    <>{cart.length > 0 ? <BasketContent cart={cart} /> : <EmptyBasket />}</>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Basket);
