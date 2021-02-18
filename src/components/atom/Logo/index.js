import { Wrap } from './style';

const Logo = ({ type }) => {
  return (
    <Wrap>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 317.54 165.63"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="dropshadow" x="-2" y="-2" width="300" height="200">
          <feGaussianBlur stdDeviation="1" />
        </filter>
        <circle
          cx="285.48"
          cy="34.04"
          r="24.54"
          fill="transparent"
          stroke="#00000040"
          stroke-width="2"
          filter="url(#dropshadow)"
        />
        <path
          d="M222.77,19.64A24.53,24.53,0,0,0,178.37,34V66.82L140.19,19.64A24.53,24.53,0,0,0,95.79,34V66.82L57.62,19.64A24.53,24.53,0,0,0,13.22,34V136.1a24.54,24.54,0,1,0,49.07,0V103.32l38.17,47.18a24.54,24.54,0,0,0,44.41-14.4V103.32L183,150.5a24.54,24.54,0,0,0,44.41-14.4V103.32l38.17,47.18a24.54,24.54,0,1,0,38.05-30.88Z"
          fill="transparent"
          stroke="#000000AB"
          stroke-width="2"
          filter="url(#dropshadow)"
        />
        <circle
          class="cls-2"
          cx="275.8"
          cy="28.35"
          r="24.54"
          fill={type === 'fill' ? 'black' : 'transparent'}
          stroke="#000000"
          stroke-width="2"
        />
        <path
          class="cls-2"
          d="M213.09,14a24.53,24.53,0,0,0-44.4,14.39V61.14L130.51,14a24.54,24.54,0,0,0-44.4,14.4V61.14L47.94,14A24.54,24.54,0,0,0,3.53,28.35V130.42a24.54,24.54,0,1,0,49.08,0V97.64l38.17,47.17a24.53,24.53,0,0,0,44.41-14.39V97.64l38.17,47.18a24.53,24.53,0,0,0,44.4-14.4V97.64l38.18,47.18a24.53,24.53,0,1,0,38-30.88Z"
          fill={type === 'fill' ? 'black' : 'transparent'}
          stroke="#000000"
          stroke-width="2"
        />
      </svg>
    </Wrap>
  );
};

export default Logo;
