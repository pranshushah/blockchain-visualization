import React from 'react';
import BlockChainContainer from '../BlockChain/BlockChainContainer/BlockChainContainer';
import { Helmet } from 'react-helmet';
function DistributedBlockChain() {
  const peers = ['Pranshu', 'Satoshi', 'Vitalik'];
  const blockChainArray = peers.map((peer, index) => {
    return <BlockChainContainer key={index} heading={`Peer ${peer}`} />;
  });

  return (
    <>
      <Helmet>
        <title>Distributed BlockChain</title>
        <meta
          name='description'
          content={
            'you can visualize how blockchain really works with different peers'
          }
        />
        <meta
          name='keywords'
          content='visualization DistributedBlockChain,blockchain'
        />
        <meta name='author' content='pranshu shah' />
      </Helmet>
      {blockChainArray}
    </>
  );
}

export default DistributedBlockChain;
