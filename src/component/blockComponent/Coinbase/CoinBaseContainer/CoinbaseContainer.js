import React, { useReducer, useEffect } from 'react';
import { initCoinbase, initTransactions } from './data';
import sha256 from 'crypto-js/sha256';
import Styles from './CoinbaseContainer.module.css';
import Spinner from '../../../Spinner/Spinner';
import CoinBaseBlock from '../CoinbaseBlock/CoinbaseBlock';

function coinbaseReducer(state, action) {
  switch (action.type) {
    case 'MINING_ON_LOAD': {
      return {
        ...state,
        hashArr: action.payload.updatedHashArr,
        nonceArr: action.payload.updatedNonceArr,
        previousHashArray: action.payload.updatedPrevArr,
        pageLoading: false,
      };
    }
    case 'TX_CHANGEHANDLER': {
      return {
        ...state,
        hashArr: action.payload.updatedHashArr,
        previousHashArray: action.payload.updatedPrevArr,
        tx: action.payload.updatedTxArr,
      };
    }
    case 'COINBASE_CHANGEHANDLER': {
      return {
        ...state,
        hashArr: action.payload.updatedHashArr,
        previousHashArray: action.payload.updatedPrevArr,
        coinbaseArr: action.payload.updatedCoinbaseArr,
      };
    }
    case 'MINING': {
      return {
        ...state,
        hashArr: action.payload.updatedHashArr,
        nonceArr: action.payload.updatedNonceArr,
        previousHashArray: action.payload.updatedPrevArr,
      };
    }
    default: {
      return state;
    }
  }
}

function CoinbaseContainer({ heading }) {
  const [state, dispatch] = useReducer(coinbaseReducer, {
    previousHashArray: [],
    hashArr: [],
    nonceArr: [],
    tx: initTransactions,
    coinbaseArr: initCoinbase,
    pageLoading: true,
  });
  const {
    pageLoading,
    coinbaseArr,
    tx,
    nonceArr,
    hashArr,
    previousHashArray,
  } = state;

  const numberOfBlocks = 4;
  useEffect(() => {
    let tempPrevArr = [
      '0000000000000000000000000000000000000000000000000000000000000000',
    ];
    let tempHAshArr = [];
    let tempNonceArr = [];
    let tempDataArr = initTransactions;
    let tempCoinbaseArr = initCoinbase;
    for (let i = 0; i < numberOfBlocks; i++) {
      let tempNonce = 0;
      let shaString;
      while (true) {
        let hashingString =
          tempPrevArr[i] +
          tempNonce +
          JSON.stringify(tempDataArr[i]) +
          JSON.stringify(tempCoinbaseArr[i]);
        shaString = sha256(hashingString).toString();
        if (shaString.slice(0, 4) === '0000') break;
        tempNonce++;
      }
      tempHAshArr[i] = shaString;
      tempNonceArr[i] = tempNonce;
      if (numberOfBlocks - 1 !== i) {
        tempPrevArr[i + 1] = shaString;
      }
    }
    dispatch({
      type: 'MINING_ON_LOAD',
      payload: {
        updatedHashArr: tempHAshArr,
        updatedNonceArr: tempNonceArr,
        updatedPrevArr: tempPrevArr,
      },
    });
  }, []);

  function txChangeHandler(newTxObject, blockIndex, txIndex) {
    let temptxArr = [...tx];
    let tempHashArr = [...hashArr];
    let tempPrevArr = [...previousHashArray];
    temptxArr[blockIndex][txIndex] = newTxObject;
    let shaString;
    for (let i = blockIndex; i < numberOfBlocks; i++) {
      let hashingString =
        tempPrevArr[i] +
        nonceArr[i] +
        JSON.stringify(temptxArr[i]) +
        JSON.stringify(coinbaseArr[i]);
      shaString = sha256(hashingString).toString();
      tempHashArr[i] = shaString;
      if (numberOfBlocks - 1 !== i) {
        tempPrevArr[i + 1] = shaString;
      }
    }
    dispatch({
      type: 'TX_CHANGEHANDLER',
      payload: {
        updatedHashArr: tempHashArr,
        updatedTxArr: temptxArr,
        updatedPrevArr: tempPrevArr,
      },
    });
  }

  function coinbaseChangeHandler(newCoinbaseObj, blockIndex) {
    let tempCoinbaseArr = [...coinbaseArr];
    let tempHashArr = [...hashArr];
    let tempPrevArr = [...previousHashArray];
    tempCoinbaseArr[blockIndex] = newCoinbaseObj;
    let shaString;
    for (let i = blockIndex; i < numberOfBlocks; i++) {
      let hashingString =
        tempPrevArr[i] +
        nonceArr[i] +
        JSON.stringify(tx[i]) +
        JSON.stringify(tempCoinbaseArr[i]);
      shaString = sha256(hashingString).toString();
      tempHashArr[i] = shaString;
      if (numberOfBlocks - 1 !== i) {
        tempPrevArr[i + 1] = shaString;
      }
    }
    dispatch({
      type: 'COINBASE_CHANGEHANDLER',
      payload: {
        updatedHashArr: tempHashArr,
        updatedCoinbaseArr: tempCoinbaseArr,
        updatedPrevArr: tempPrevArr,
      },
    });
  }

  function mineClickHandler(shaString, nonce, blockIndex) {
    let tempHashArr = [...hashArr];
    let tempNonce = [...nonceArr];
    let tempPrevArr = [...previousHashArray];
    tempNonce[blockIndex] = nonce;
    tempHashArr[blockIndex] = shaString;
    if (numberOfBlocks - 1 !== blockIndex) {
      tempPrevArr[blockIndex + 1] = shaString;
    }
    for (let i = blockIndex + 1; i < numberOfBlocks; i++) {
      let hashingString =
        tempPrevArr[i] +
        tempNonce[i] +
        JSON.stringify(tx[i]) +
        JSON.stringify(coinbaseArr[i]);
      shaString = sha256(hashingString).toString();
      tempHashArr[i] = shaString;
      if (numberOfBlocks - 1 !== i) {
        tempPrevArr[i + 1] = shaString;
      }
    }
    dispatch({
      type: 'MINING',
      payload: {
        updatedHashArr: tempHashArr,
        updatedNonceArr: tempNonce,
        updatedPrevArr: tempPrevArr,
      },
    });
  }
  let CoinBaseBlockChain = [];
  for (let i = 0; i < numberOfBlocks; i++) {
    CoinBaseBlockChain.push(
      <CoinBaseBlock
        previousHash={previousHashArray[i]}
        currentHash={hashArr[i]}
        txArray={tx[i]}
        Nonce={nonceArr[i]}
        dirty={
          hashArr[i] &&
          previousHashArray[i] &&
          hashArr[i].slice(0, 4) === '0000' &&
          previousHashArray[i].slice(0, 4) === '0000'
            ? false
            : true
        }
        onTxChange={txChangeHandler}
        onCoinbaseChange={coinbaseChangeHandler}
        coinBaseObj={coinbaseArr[i]}
        blockIndex={i}
        key={i}
        onMineClicked={mineClickHandler}
      />,
    );
  }
  return pageLoading ? (
    <Spinner />
  ) : (
    <div className={Styles.container}>
      <h1 className={Styles.Heading}>{heading}:-</h1>
      <div className={Styles.blockChainContainer}>{CoinBaseBlockChain}</div>
    </div>
  );
}

export default CoinbaseContainer;
