import React, { useState, useEffect } from 'react';
import { Card, CardContent, Input } from 'semantic-ui-react';
import TxBlock from './txBlock/txBlock';
import { Button } from 'semantic-ui-react';
import sha256 from 'crypto-js/sha256';
import Styles from './Coinbase.module.css';

function CoinbaseBlock({
  previousHash,
  currentHash,
  txArray,
  Nonce,
  onTxChange,
  onCoinbaseChange,
  coinBaseObj,
  blockIndex,
  onMineClicked,
  dirty,
}) {
  console.log('boom');
  const [buttonLoading, updatebuttonLoading] = useState(false);
  function mineClickHandler() {
    updatebuttonLoading(true);
  }
  useEffect(() => {
    if (buttonLoading) {
      let tempNonce = 0;
      let shaString;
      while (true) {
        let hashString =
          previousHash +
          tempNonce +
          JSON.stringify(txArray) +
          JSON.stringify(coinBaseObj);
        shaString = sha256(hashString).toString();
        if (shaString.slice(0, 4) === '0000') {
          break;
        }
        tempNonce++;
      }
      updatebuttonLoading(false);
      onMineClicked(shaString, tempNonce, blockIndex);
    }
  }, [buttonLoading]);

  const coinbaseAmountClassString = [
    Styles.CoinbaseInput,
    'coinbaseAmountInput',
  ].join(' ');
  const coinbaseToClassString = [Styles.CoinbaseInput, 'coinbaseToInput'].join(
    ' ',
  );

  function coinBaseChangeHandler(e) {
    if (e.target.parentElement.classList.contains('coinbaseToInput')) {
      const newObj = { ...coinBaseObj, to: e.target.value };
      onCoinbaseChange(newObj, blockIndex);
    } else {
      const newObj = { ...coinBaseObj, amount: e.target.value };
      onCoinbaseChange(newObj, blockIndex);
    }
  }

  const TxBlocks = txArray.map((tx, index) => {
    return (
      <TxBlock
        from={tx.from}
        to={tx.to}
        amount={tx.amount}
        onChangeInput={onTxChange}
        txIndex={index}
        blockIndex={blockIndex}
        txObj={tx}
        key={index}
      />
    );
  });

  return (
    <Card
      className={Styles.Root}
      variant='outlined'
      style={{ marginLeft: '7px', marginRight: '7px' }}>
      <CardContent
        className={Styles.Content}
        style={{ backgroundColor: dirty ? '#FFBABA' : '#90caf9' }}>
        <div className={Styles.TopDataContainer}>
          <Input
            label={'Number'}
            disabled
            className={Styles.NumberArea}
            value={blockIndex}
          />
        </div>
        <div className={Styles.DataContainer}>
          <Input
            label={'Nonce'}
            className={Styles.NonceArea}
            disabled
            value={Nonce}
          />
        </div>
        <div className={Styles.DataContainer}>
          <label htmlFor='$' className={Styles.Label}>
            Coinbase:
          </label>
          <Input
            label={'$'}
            className={coinbaseAmountClassString}
            onChange={coinBaseChangeHandler}
            value={coinBaseObj.amount}
          />
          <Input
            label={'->'}
            onChange={coinBaseChangeHandler}
            className={coinbaseToClassString}
            value={coinBaseObj.to}
          />
        </div>
        <div className={Styles.txContainer}>
          <label htmlFor='$' className={Styles.Label}>
            TX:
          </label>
          <div className={Styles.MainTxContainer}>{TxBlocks}</div>
        </div>
        <div className={Styles.DataContainer}>
          <Input
            label={'Prev-Hash'}
            disabled
            className={Styles.PrevHashArea}
            value={previousHash}
          />
        </div>
        <div className={Styles.DataContainer}>
          <Input
            label={'Hash'}
            disabled
            className={Styles.HashArea}
            value={currentHash}
          />
        </div>
        <Button
          className={Styles.Mine}
          secondary
          loading={buttonLoading}
          size='large'
          onClick={mineClickHandler}>
          Mine
        </Button>
      </CardContent>
    </Card>
  );
}

export default CoinbaseBlock;
