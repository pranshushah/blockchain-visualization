import React, { useState, useEffect } from 'react';
import sha256 from 'crypto-js/sha256';
import BlockChainBlock from '../BlockChainBlock/BlockChainBlock';
import Spinner from '../../../Spinner/Spinner';
import Styles from './BlockChainContainer.module.css';

function BlockChainContainer({ heading }) {
  const [previousHashArr, updatePreviousHashArr] = useState([]);
  const [dataInArr, updateDataArr] = useState(['', '', '', '', '', '']); //numberBlocks times
  const [hashArr, updateHashArr] = useState([]);
  const [nonceArr, updateNonceArr] = useState([]);
  const [pageLoading, updatePageLoading] = useState(true);
  const numberOfBlocks = 6;

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
    updateHashArr(tempHAshArr);
    updateNonceArr(tempNonceArr);
    updatePreviousHashArr(tempPrevArr);
    updatePageLoading(false);
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
    updateDataArr(tempDataArr);
    updateHashArr(tempHashArr);
    updatePreviousHashArr(tempPrevArr);
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
    updateHashArr(tempHashArr);
    updatePreviousHashArr(tempPrevArr);
    updateNonceArr(tempNonce);
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
        onMineClicked={mineClickHandler}
      />,
    );
  }
  return pageLoading ? (
    <Spinner />
  ) : (
    <div className={Styles.container}>
      <h1 className={Styles.Heading}>{heading}:-</h1>
      <div className={Styles.blockChainContainer}>{BlockChain}</div>
    </div>
  );
}

export default BlockChainContainer;
