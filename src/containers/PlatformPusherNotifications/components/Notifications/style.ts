import styled from 'styled-components';
import { spacing } from 'styles/theme';
import { flexContainer } from 'styles/mixins';

const CARD_HEIGHT = spacing(10);

export default styled.div`
  .notificationListContainer {
    ${flexContainer({ flexDirection: 'column', alignItems: 'flex-end' })}
  }
  .animation-enter-done {
    height: ${CARD_HEIGHT};
  }

  .animation-enter {
    opacity: 1;
    height: ${CARD_HEIGHT};
  }

  .animation-enter-active {
    animation: enter 500ms ease-out;
    position: relative;

    @keyframes enter {
      from {
        opacity: 0;
        height: 0;
        right: -${spacing(5)};
      }
      75% {
        right: ${spacing(4)};
      }
      to {
        opacity: 1;
        height: ${CARD_HEIGHT};
        right: 0;
      }
    }
  }

  .animation-exit-done {
    height: 0;
  }

  .animation-exit {
    opacity: 0;
    height: ${CARD_HEIGHT};
  }

  .animation-exit-active {
    animation: exit 500ms ease-out;
    position: relative;

    @keyframes exit {
      from {
        opacity: 1;
        height: ${CARD_HEIGHT};
        right: 0;
      }
      25% {
        right: ${spacing(4)};
      }
      to {
        opacity: 0;
        height: 0;
        right: -${spacing(8)};
      }
    }
  }

  position: fixed;
  bottom: ${spacing(10)};
  right: ${spacing(5)};
`;
