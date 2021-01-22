import React, { useEffect, useReducer } from 'react';
import sha256 from 'crypto-js/sha256';
import BlockChainBlock from '../BlockChainBlock/BlockChainBlock';
import Spinner from '../../../Spinner/Spinner';
import Styles from './BlockChainContainer.module.css';

function blockChainReducer(state, action) {
  switch (action.type) {
    case 'MINING_ON_LOAD': {
      return {
        ...state,
        hashArr: action.payload.updatedHashArr,
        nonceArr: action.payload.updatedNonceArr,
        previousHashArr: action.payload.updatedPrevArr,
        pageLoading: false,
      };
    }
    case 'DATA_CHANGEHANDLER': {
      return {
        ...state,
        hashArr: action.payload.updatedHashArr,
        dataInArr: action.payload.updatedDataArr,
        previousHashArr: action.payload.updatedPrevArr,
      };
    }
    case 'MINING_END': {
      return {
        ...state,
        hashArr: action.payload.updatedHashArr,
        nonceArr: action.payload.updatedNonceArr,
        previousHashArr: action.payload.updatedPrevArr,
      };
    }
    default: {
      return state;
    }
  }
}

function BlockChainContainer({ heading }) {
  const [state, dispatch] = useReducer(blockChainReducer, {
    previousHashArr: [],
    dataInArr: ['', '', '', '', '', ''],
    hashArr: [],
    nonceArr: [],
    pageLoading: true,
  });
  const numberOfBlocks = 6;
  const { previousHashArr, dataInArr, hashArr, nonceArr, pageLoading } = state;

  useEffect(() => {
    let tempPrevArr = [
      '0000000000000000000000000000000000000000000000000000000000000000',
    ];
    let tempHAshArr = [];
    let tempNonceArr = [];
    for (let i = 0; i < numberOfBlocks; i++) {
      let tempNonce = 0;
      let shaString;
      while (true) {
        shaString = sha256(tempPrevArr[i] + tempNonce + '').toString();
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

  function dataValueUpdateHandler(dataValue, blockIndex) {
    let tempDataArr = [...dataInArr];
    let tempHashArr = [...hashArr];
    let tempPrevArr = [...previousHashArr];
    tempDataArr[blockIndex] = dataValue;
    let shaString;
    for (let i = blockIndex; i < numberOfBlocks; i++) {
      shaString = sha256(tempPrevArr[i] + nonceArr[i] + tempDataArr[i]);
      shaString = shaString.toString();
      tempHashArr[i] = shaString;
      if (numberOfBlocks - 1 !== i) {
        tempPrevArr[i + 1] = shaString;
      }
    }
    dispatch({
      type: 'DATA_CHANGEHANDLER',
      payload: {
        updatedHashArr: tempHashArr,
        updatedDataArr: tempDataArr,
        updatedPrevArr: tempPrevArr,
      },
    });
  }

  function mineClickHandler(shaString, nonce, blockIndex) {
    let tempHashArr = [...hashArr];
    let tempNonce = [...nonceArr];
    let tempPrevArr = [...previousHashArr];
    tempNonce[blockIndex] = nonce;
    tempHashArr[blockIndex] = shaString;
    if (numberOfBlocks - 1 !== blockIndex) {
      tempPrevArr[blockIndex + 1] = shaString;
    }
    for (let i = blockIndex + 1; i < numberOfBlocks; i++) {
      shaString = sha256(`${tempPrevArr[i]}${tempNonce[i]}${dataInArr[i]}`);
      shaString = shaString.toString();
      tempHashArr[i] = shaString;
      if (numberOfBlocks - 1 !== i) {
        tempPrevArr[i + 1] = shaString;
      }
    }
    dispatch({
      type: 'MINING_END',
      payload: {
        updatedHashArr: tempHashArr,
        updatedNonceArr: tempNonce,
        updatedPrevArr: tempPrevArr,
      },
    });
  }

  let BlockChain = [];
  for (let i = 0; i < numberOfBlocks; i++) {
    BlockChain.push(
      <BlockChainBlock
        previousHash={previousHashArr[i]}
        currentHash={hashArr[i]}
        dataValue={dataInArr[i]}
        Nonce={nonceArr[i]}
        onUpdateDataValue={dataValueUpdateHandler}
        blockIndex={i}
        key={i}
        dirty={
          hashArr[i] &&
          previousHashArr[i] &&
          hashArr[i].slice(0, 4) === '0000' &&
          previousHashArr[i].slice(0, 4) === '0000'
            ? false
            : true
        }
        onMineClicked={mineClickHandler}
      />,
    );
  }
  return (
    <>
      {pageLoading ? (
        <Spinner />
      ) : (
        <div className={Styles.container}>
          <h1 className={Styles.Heading}>{heading}:-</h1>
          <div className={Styles.blockChainContainer}>{BlockChain}</div>
        </div>
      )}
    </>
  );
}

export default BlockChainContainer;
