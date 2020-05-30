import React from 'react';
import { Container } from 'semantic-ui-react';
import CoinbaseContainer from './CoinBaseContainer/CoinbaseContainer';

function Coinbase() {
  const peers = ['Pranshu', 'Satoshi', 'Vitalik'];

  const CoinbaseBlockChain = peers.map((peer, index) => {
    return <CoinbaseContainer heading={`Peer ${peer}`} key={index} />;
  });

  return <Container>{CoinbaseBlockChain}</Container>;
}

export default Coinbase;
