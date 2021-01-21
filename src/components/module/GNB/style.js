import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

export const Wrap = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette['$very-light-pink']};
  padding-top: 17px;
  padding-bottom: 17px;

  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0, 0.37);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(8px);
`;

export const LogoWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  img {
    height: 48px;
  }
`;

export const ListItem = styled.li`
  ${({ theme }) => theme.textStyles.textStyle};
  &:not(:last-child) {
    margin-right: 40px;
  }
`;
export const ListWrap = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
`;
export const ListRootWrap = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

Container.main = styled(Container)`
  position: relative;
`;

export { Container, Row, Col };
