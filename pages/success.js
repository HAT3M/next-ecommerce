import styled from 'styled-components';
import { CheckCircle } from '@styled-icons/boxicons-regular/CheckCircle';
import { colors } from '../config/theme';
import Link from 'next/link';

const EmptyBasket = () => {
  return (
    <Wrapper>
      <Icon />
      <Text>Siparişiniz alınmıştır.</Text>
      <Link href="/">
        <StyledLink href="/">Anasayfaya Dön</StyledLink>
      </Link>
    </Wrapper>
  );
};

export default EmptyBasket;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  padding: 15px;
`;

const Icon = styled(CheckCircle)`
  color: green;
  width: 50px;
  height: 50px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: bold;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  background: ${colors.oxford};
  color: ${colors.white};
`;
