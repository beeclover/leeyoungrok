import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { rgba } from 'polished';

export const Wrap = styled.div`
  padding-top: 17px;
  padding-bottom: 17px;
  background: ${({ theme }) => rgba(theme.palette.white, 0.7)};
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0, 0.37);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(8px);
`;

export const LogoWrap = styled.div`
  img,
  svg {
    height: 56px;
  }
`;

export const ListWrap = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
`;
export const ListItem = styled.li`
  ${({ theme }) => theme.textStyles.textStyle};
  color: ${({ theme }) => theme.palette.black};
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

Container.main = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export { Container, Row, Col };
