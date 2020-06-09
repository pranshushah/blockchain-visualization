import React from 'react';
import { Container } from 'semantic-ui-react';
import CoinbaseContainer from './CoinBaseContainer/CoinbaseContainer';
import { Helmet } from 'react-helmet';

function Coinbase() {
  const peers = ['Pranshu', 'Satoshi', 'Vitalik'];

  const CoinbaseBlockChain = peers.map((peer, index) => {
    return (
      <>
        <Helmet>
          <title>Coinbase</title>
          <meta
            name='description'
            content={'you can visualize how bitcoin really works.'}
          />
          <meta
            name='keywords'
            content='visualization blockchain,coinbase,blockchain'
          />
          <meta name='author' content='pranshu shah' />
        </Helmet>
        <CoinbaseContainer heading={`Peer ${peer}`} key={index} />
      </>
    );
  });

  return <Container>{CoinbaseBlockChain}</Container>;
}

export default Coinbase;
