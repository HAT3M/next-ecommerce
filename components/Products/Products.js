import styled from 'styled-components';
import ProductCard from './Product/Product';

export default function Products({ products }) {
  return (
    <Wrapper>
      {products?.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
