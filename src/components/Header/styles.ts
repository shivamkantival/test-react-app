import styled from 'styled-components';
import { COLORS, spacing } from 'styles/theme';
import { flexContainer } from 'styles/mixins';

export default styled.header`
  top: 0;
  background: ${COLORS.ALTO};
  height: ${spacing(15)};
  border-bottom: ${spacing(0.5)} solid ${COLORS.GAINS_BORO};
  ${flexContainer({ alignItems: 'center', justifyContent: 'center' })}
`;
