//styles
import { circular, centerToParent } from 'styles/mixins';
import { COLORS } from 'styles/theme';

import styled from 'styled-components';
import { LoaderProps } from './interfaces';

const ANIMATION_NAME = 'slowExpand',
  ANIMATION_PARAMS = `
    animation-name: ${ANIMATION_NAME};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-fill-mode: backwards;
  `,
  INITIAL_DIMENSIONS_FOR_EXPANDING_CONCENTRICS = `
    width: 0;
    height: 0;
  `,
  LOADER_COLOR: string = COLORS.PARROT_GREEN;

export default styled.div`
  width: ${(props: LoaderProps) => `${props.dimension}px`};
  height: ${(props: LoaderProps) => `${props.dimension}px`};
  position: relative;

  @keyframes ${ANIMATION_NAME} {
    from {
      width: 30%;
      height: 30%;
      opacity: 0.3;
    }
    to {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }

  .fixedCenter {
    width: 20%;
    height: 20%;
    background: ${LOADER_COLOR};
    ${circular()}
    ${centerToParent()}
  }

  .outerExpandingConcentric {
    background: ${LOADER_COLOR};
    ${INITIAL_DIMENSIONS_FOR_EXPANDING_CONCENTRICS}
    ${ANIMATION_PARAMS}
    ${circular()}
    ${centerToParent()}
  }

  .innerExpandingConcentric {
    background: ${LOADER_COLOR};
    animation-delay: 0.7s;
    ${INITIAL_DIMENSIONS_FOR_EXPANDING_CONCENTRICS}
    ${ANIMATION_PARAMS}
    ${circular()}
    ${centerToParent()}
  }
`;
