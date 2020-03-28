import React from 'react';

//components
import Header from 'components/Header';
import StyledAppContainer from './styles';
import AppContent from 'components/AppContent';

function App() {
  return (
    <StyledAppContainer>
      <Header className="header" />
      <AppContent className="appContent" />
    </StyledAppContainer>
  );
}

export default App;
