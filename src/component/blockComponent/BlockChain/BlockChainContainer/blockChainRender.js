import React from 'react';
import { Helmet } from 'react-helmet';
import Blockchain from './BlockChainContainer';

function BlockChainRender(props) {
  return (
    <>
      <Helmet>
        <title>BlockChain</title>
        <meta
          name='description'
          content={'you can visualize how blockchain really works.'}
        />
        <meta name='keywords' content='visualization ,blockchain,mining' />
        <meta name='author' content='pranshu shah' />
      </Helmet>
      <Blockchain {...props} />
    </>
  );
}

export default BlockChainRender;
