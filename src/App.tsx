import React from 'react';
import './App.css';
import { RainbowButton } from '@rainbow-me/rainbow-button';

function UserGreeting(props: any) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(_props: any) {
  return <div>
    <h1>Please sign up, to get an NFT</h1>
      <RainbowButton
      chainId={1}
      connectorOptions={{ bridge: 'https://bridge.walletconnect.org' }}
      onConnectorInitialized={(connector) => console.log(connector)}
    />;
    </div>
}

function Greeting(props: { isLoggedIn: any; }) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
  // Try changing to isLoggedIn={true}:
  
  function App() {
    return (
      <div className="App">
      <Greeting isLoggedIn={false} />
     

    </div>
  );
}

export default App;
