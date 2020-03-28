import React from 'react';

//components
import Header from 'components/Header';
import StyledAppContainer from './styles';
import AppContent from 'components/AppContent';
import PlatformPusherNotifications from 'containers/PlatformPusherNotifications';

function App() {
  return (
    <PlatformPusherNotifications>
      <StyledAppContainer>
        <Header className="header" />
        <AppContent className="appContent" />
      </StyledAppContainer>
    </PlatformPusherNotifications>
  );
}
export default App;
