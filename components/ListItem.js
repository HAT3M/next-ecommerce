import styled from 'styled-components';
import { colors } from '../config/theme';
import { Trash } from '@styled-icons/boxicons-regular/Trash';
import { adjustQty, removeFromCart } from '../store/actions/shoppingActions';
import { connect } from 'react-redux';
import { useState } from 'react';

const ListItem = ({ itemData, removeFromCart, adjustQty }) => {
  const [quantity, setQuantity] = useState(itemData.qty);
  const onChangeHandler = (e) => {
    setQuantity(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };
  return (
    <Card>
      <Image src={itemData.image} />
      <Content>
        <Title>{itemData.title}</Title>
        <Input
          defaultValue={quantity}
          type="number"
          min="1"
          max={itemData.stock}
          onChange={onChangeHandler}
        />
        <Price>₺{itemData.sale_price}</Price>
        <Delete onClick={() => removeFromCart(itemData.id)}></Delete>
      </Content>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(ListItem);

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${colors.white};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  max-width: 90px;
  display: block;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-right: 0;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 425px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const Title = styled.div`
  color: ${colors.oxford};
  font-size: 20px;
  font-weight: bold;
  margin-right: auto;

  @media (max-width: 425px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const Price = styled.div`
  color: ${colors.oxford};
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 425px) {
    font-size: 16px;
    width: 50%;
  }
`;

const Delete = styled(Trash)`
  color: ${colors.oxford};
  width: 30px;
  height: 30px;
  margin-left: 30px;
  cursor: pointer;

  @media (max-width: 425px) {
    margin-left: auto;
  }
`;

const Input = styled.input`
  margin: 0 30px;
  width: 80px;
  height: 40px;
  padding: 15px 10px;
  font-size: 18px;
  background: ${colors.white};
  border: 2px solid ${colors.oxford};
  border-radius: 6px;

  @media (max-width: 425px) {
    margin: 15px 0;
    width: 100%;
  }
`;
