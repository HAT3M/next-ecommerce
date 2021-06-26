import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '../../../config/theme';

import { connect } from 'react-redux';
import { addToCart } from '../../../store/actions/shoppingActions';

const Product = ({ productData, addToCart }) => {
  return (
    <ProductCard>
      <Image src={productData.image} />
      <Content>
        <Title>{productData.title}</Title>
        <Description>{productData.body}</Description>
        <Price>₺{productData.sale_price}</Price>
      </Content>
      <Action>
        <Link href={`product/${productData.id}`}>
          <Button>İncele</Button>
        </Link>
        <Link href="/">
          <Button onClick={() => addToCart(productData)}>Sepete Ekle</Button>
        </Link>
      </Action>
    </ProductCard>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);

const ProductCard = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  background: ${colors.white};
  border-radius: 0.5rem;

  @media (max-width: 1024px) {
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  max-width: 200px;
  display: block;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  justify-content: space-between;
  min-width: 250px;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    min-width: 100%;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  color: ${colors.oxford};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 14px;
`;

const Price = styled.div`
  color: ${colors.oxford};
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.black};
  padding: 15px 10px;
  border: 1px solid ${colors.black};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${colors.black};
    color: ${colors.white};
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 10px;
  }

  @media (max-width: 425px) {
    margin-bottom: 15px;
  }
`;
