import styled from 'styled-components';
import { flexContainer } from 'styles/mixins';

export default styled.div`
  .listItem {
    flex: auto 0 0;
  }

  .loader {
    align-self: center;
  }

  &.fullPageLoad {
    justify-content: center;
  }

  height: 100%;
  overflow-y: auto;
  ${flexContainer({
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  })}
`;
