import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Content = styled.main`
  flex: 1;
  padding: 2rem;
`;

export default function PageLayout({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}
