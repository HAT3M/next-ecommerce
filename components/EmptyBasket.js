import styled from 'styled-components';
import { Alert } from '@styled-icons/foundation/Alert';
import { colors } from '../config/theme';
import Link from 'next/link';

const EmptyBasket = () => {
  return (
    <Wrapper>
      <Icon />
      <Text>Alışveriş Sepetiniz Boş</Text>
      <Link href="/">
        <StyledLink href="/">Alışverişe Başla</StyledLink>
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

const Icon = styled(Alert)`
  color: ${colors.oxford};
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

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  background: ${colors.oxford};
  color: ${colors.white};
`;
