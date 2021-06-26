import '../styles/globals.css';
import Header from '../components/Header';
import { Provider } from 'react-redux';
import store from '../store/store';
import styled from 'styled-components';
import { colors } from '../config/theme';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>
  );
}

export default MyApp;

const Wrapper = styled.main`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.papaya};
  min-height: calc(100vh - 80px);
`;
