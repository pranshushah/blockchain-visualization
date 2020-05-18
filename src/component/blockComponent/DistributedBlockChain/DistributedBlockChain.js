import React from 'react';
import BlockChainContainer from '../BlockChain/BlockChainContainer/BlockChainContainer';

function DistributedBlockChain() {
  const peers = ['Pranshu', 'Satoshi', 'Vitalik'];
  const blockChainArray = peers.map((peer, index) => {
    return <BlockChainContainer key={index} heading={`Peer ${peer}`} />;
  });

  return blockChainArray;
}

export default DistributedBlockChain;
