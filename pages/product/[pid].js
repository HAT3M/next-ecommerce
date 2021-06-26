import { useRouter } from 'next/router';
import { connect, useSelector } from 'react-redux';
import { API } from '../../config/global-constants';
import styled from 'styled-components';
import { colors } from '../../config/theme';
import { addToCart } from '../../store/actions/shoppingActions';

const Product = ({ products, addToCart }) => {
  console.log(addToCart);
  const router = useRouter();
  const { pid } = router.query;
  const data = products.find((item) => item.id === Number(pid));

  return (
    <Wrapper>
      <Image src={data.image} />
      <Content>
        <Title>{data.title}</Title>
        <Description>{data.body}</Description>
        <Action>
          <Price>₺{data.sale_price}</Price>
          <Button onClick={() => addToCart(data)}>Sepete Ekle</Button>
        </Action>
      </Content>
    </Wrapper>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(API.url);
  const products = await res.json();

  return {
    props: { products }, // will be passed to the page component as props
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);

const Wrapper = styled.section`
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  max-width: 500px;
  display: block;
  width: 100%;
`;

const Content = styled.div`
  padding: 0 20px;
`;

const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  color: ${colors.oxford};
  margin: 0 0 15px;
`;

const Description = styled.div``;

const Button = styled.button`
  background: ${colors.oxford};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.25rem;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${colors.blue};
  }
`;
