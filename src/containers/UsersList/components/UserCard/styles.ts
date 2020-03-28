import styled from 'styled-components';
import { circular, flexContainer } from 'styles/mixins';
import { COLORS, spacing } from 'styles/theme';

const TOTAL_CARD_HEIGHT = 24,
  SIDE_PADDING = 4,
  CONTENT_HEIGHT = TOTAL_CARD_HEIGHT - 2 * SIDE_PADDING;

export default styled.div`
  .userDetailsContainer {
    padding: ${spacing(SIDE_PADDING)};
    height: ${spacing(TOTAL_CARD_HEIGHT)};
    ${flexContainer({ alignItems: 'center' })}
  }

  .userImage {
    height: ${spacing(CONTENT_HEIGHT)};
    width: ${spacing(CONTENT_HEIGHT)};
    background: ${COLORS.GAINS_BORO};
    ${circular()};
  }

  .divider {
    margin: 0 ${spacing(SIDE_PADDING)};
    border-bottom: ${spacing(0.25)} solid ${COLORS.ALTO};
  }

  .userName {
    margin-left: ${spacing(6)};
    color: ${COLORS.DARK_OUTER_SPACE};
  }

  ${flexContainer({ alignItems: 'stretch', flexDirection: 'column' })}
`;
