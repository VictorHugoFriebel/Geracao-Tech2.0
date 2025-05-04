import styled from 'styled-components';

const Foot = styled.footer`
  text-align: center;
  padding: 1rem;
  background: #f5f5f5;
  margin-top: auto;
`;

export default function Footer() {
  return <Foot>© {new Date().getFullYear()} My Website</Foot>;
}
