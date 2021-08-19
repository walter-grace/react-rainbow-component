import React from 'react';
import './App.css';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { RainbowButton } from '@rainbow-me/rainbow-button';


function App() {
  return (
    <div className="App">
      <h4>
        Connect for an NFT drop
      </h4>
      <RainbowButton
      chainId={1}
      connectorOptions={{ bridge: 'https://bridge.walletconnect.org' }}
      onConnectorInitialized={(connector) => console.log(connector)}
    />
    </div>
  );
}

export default App;
