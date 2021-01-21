import Link from 'next/link';
import Headroom from 'react-headroom';
// components
import {
  Wrap,
  ListWrap,
  ListItem,
  ListRootWrap,
  Container,
  Row,
  Col,
  LogoWrap,
} from './style';

export default function GNB() {
  return (
    <Headroom>
      <Wrap>
        <Container.main>
          <LogoWrap>
            <Link href="/">
              <a>
                <img src="/images/logo.png" alt="logo" />
              </a>
            </Link>
          </LogoWrap>
          <ListRootWrap>
            <ListWrap>
              <ListItem>temp1</ListItem>
              <ListItem>temp2</ListItem>
              <ListItem>temp3</ListItem>
            </ListWrap>
          </ListRootWrap>
        </Container.main>
      </Wrap>
    </Headroom>
  );
}
