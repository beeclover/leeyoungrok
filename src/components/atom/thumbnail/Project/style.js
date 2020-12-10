import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrap = styled.div`
  display: flex;
`;

export const FixedBox = styled.div`
  padding: 32px 209px 43px 34px;
  position: relative;
`;
export const Content = styled.div`
  width: 222px;
  height: 313px;
  background-color: #636363;
  position: relative;
  z-index: 100;
`;
export const Circle = styled(motion.div)`
  width: 388px;
  height: 388px;
  position: absolute;
  top: 0;
  left: 43px;
`;
Circle.defaultProps = {
  animate: {
    opacity: [0.8, 0.3, 0.8],
  },
  transition: {
    duration: 8,
    ease: 'easeInOut',
    loop: Infinity,
  },
};
export const AwesomeCircle = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-image: url(/assets/img-gradient-8.png);
  border-radius: 50%;
`;
AwesomeCircle.defaultProps = {
  animate: {
    rotate: 360,
  },
  transition: {
    duration: 30,
    ease: 'easeInOut',
    loop: Infinity,
  },
};
