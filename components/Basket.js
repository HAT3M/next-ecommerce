import styled from 'styled-components';
import ListItem from '../components/ListItem';
import Summary from '../components/Summary';

const BasketContent = ({ cart }) => {
  return (
    <Wrapper>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id} itemData={item} />
        ))}
      </List>

      <SummaryWrapper>
        <Summary data={cart} url="/payment" text="Ödeme Yap" />
      </SummaryWrapper>
    </Wrapper>
  );
};

export default BasketContent;

const Wrapper = styled.section`
  display: flex;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  padding-right: 20px;

  @media (max-width: 768px) {
    flex: 1;
    padding-right: 0;
  }
`;

const SummaryWrapper = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
