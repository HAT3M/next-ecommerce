import styled from 'styled-components';
import { colors } from '../config/theme';
import Link from 'next/link';

import { Basket } from '@styled-icons/boxicons-regular/Basket';
import { connect } from 'react-redux';

import { useState, useEffect } from 'react';

const Header = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <Wrapper>
      <Link href="/">
        <StyledLink href="/">
          <Logo>NEXT ECOMMERCE</Logo>
        </StyledLink>
      </Link>
      <BasketWrapper>
        <Link href="/basket">
          <StyledLink href="/basket">
            <Cart />
            <Count>{cartCount}</Count>
          </StyledLink>
        </Link>
      </BasketWrapper>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Header);

const Wrapper = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.white};
  height: 80px;
`;

const StyledLink = styled.a``;

const Logo = styled.div`
  display: flex;
  color: ${colors.oxford};
  font-weight: bold;
  font-size: 32px;

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const BasketWrapper = styled.div`
  display: flex;
  position: relative;
`;

const Cart = styled(Basket)`
  color: ${colors.oxford};
  width: 50px;
  height: 50px;
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.indigo};
  color: ${colors.white};
  padding: 10px;
  border-radius: 50%;
  position: absolute;
  width: 30px;
  height: 30px;
  font-size: 14px;
  right: -5px;
  top: 0;
`;
