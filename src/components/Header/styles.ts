import styled from 'styled-components';
import { COLORS } from 'styles/theme';
import { flexContainer } from 'styles/mixins';

export default styled.header`
  position: sticky;
  top: 0;
  background: ${COLORS.GAINS_BORO};
  height: 50px;
  ${flexContainer({ alignItems: 'center', justifyContent: 'center' })}
`;
