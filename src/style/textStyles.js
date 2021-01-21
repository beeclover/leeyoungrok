import { css } from 'styled-components';
export default {
  textStyle: css`
    font-size: 12px;
    text-align: left;
    color: ${({ theme }) => theme.palette['$white']};
  `,
};
