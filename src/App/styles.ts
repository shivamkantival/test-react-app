import styled from 'styled-components';
import { flexContainer } from 'styles/mixins';

export default styled.div`
  .header {
    flex: auto 0 0;
  }

  .appContent {
    flex: auto 1 1;
    overflow-y: auto;
    height: ;
  }

  height: 100%;
  ${flexContainer({ flexDirection: 'column', alignItems: 'stretch' })}
`;
