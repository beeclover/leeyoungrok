import { useState } from 'react';
import Link from 'next/link';
import Headroom from 'react-headroom';
import Logo from '@atom/Logo';
// components
import {
  Wrap,
  ListWrap,
  ListItem,
  Container,
  Row,
  Col,
  LogoWrap,
} from './style';

const list = [
  {
    label: 'UX/UI',
    uri: '/uxui',
    id: 'cG9zdDozNjY5',
  },
  {
    label: 'INDUSTRIAL DESIGN',
    uri: '/industrial_design',
    id: 'cG9zdDozNjY2',
  },
  {
    label: 'RESUME',
    uri: '/resume',
    id: 'cG9zdDozNjY3',
  },
  {
    label: 'CONTACT',
    uri: '/contact',
    id: 'cG9zdDozNjY4',
  },
];
export default function GNB() {
  const [isPin, setIsPin] = useState(false);
  return (
    <Headroom onPin={() => setIsPin(!isPin)} onUnPin={() => setIsPin(!isPin)}>
      <Wrap>
        <Container.main>
          <LogoWrap>
            <Link href="/">
              <a>
                <Logo type={isPin ? 'fill' : 'def'} />
              </a>
            </Link>
          </LogoWrap>
          <ListWrap>
            {list.map(({ label }) => (
              <ListItem>{label}</ListItem>
            ))}
          </ListWrap>
        </Container.main>
      </Wrap>
    </Headroom>
  );
}
