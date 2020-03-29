//styles
import { circular, centerToParent } from 'styles/mixins';
import { COLORS, spacing } from 'styles/theme';

import styled from 'styled-components';
import { LoaderProps } from './interfaces';

const ANIMATION_NAME = 'slowExpand',
  ANIMATION_PARAMS = `
    animation-name: ${ANIMATION_NAME};
    animation-duration: 1.5s;
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
  width: ${(props: LoaderProps) => `${spacing(props.dimension)}`};
  height: ${(props: LoaderProps) => `${spacing(props.dimension)}`};
  position: relative;

  @keyframes ${ANIMATION_NAME} {
    from {
      width: 0;
      height: 0;
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
    animation-delay: 0.3s;
    ${INITIAL_DIMENSIONS_FOR_EXPANDING_CONCENTRICS}
    ${ANIMATION_PARAMS}
    ${circular()}
    ${centerToParent()}
  }
`;
