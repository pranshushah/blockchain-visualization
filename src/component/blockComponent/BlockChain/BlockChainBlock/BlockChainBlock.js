import React, { useState, useEffect } from 'react';
import { Card, CardContent, Input } from 'semantic-ui-react';
import { TextareaAutosize } from '@material-ui/core';
import { Button } from 'semantic-ui-react';
import sha256 from 'crypto-js/sha256';
import Styles from './BlockChainBlock.module.css';

function Block({
  previousHash,
  currentHash,
  dataValue,
  Nonce,
  onUpdateDataValue,
  blockIndex,
  onMineClicked,
  dirty,
}) {
  const [buttonLoading, updatebuttonLoading] = useState(false);
  function mineClickHandler() {
    updatebuttonLoading(true);
  }
  useEffect(() => {
    if (buttonLoading) {
      let tempNonce = 0;
      let shaString;
      while (true) {
        shaString = sha256(previousHash + dataValue + tempNonce).toString();
        if (shaString.slice(0, 4) === '0000') {
          break;
        }
        tempNonce++;
      }
      updatebuttonLoading(false);
      onMineClicked(shaString, tempNonce, blockIndex);
    }
  }, [buttonLoading]);

  function dataValueChangeHandler(e) {
    onUpdateDataValue(e.target.value, blockIndex);
  }

  return (
    <Card
      className={Styles.Root}
      variant='outlined'
      style={{ marginLeft: '7px', marginRight: '7px' }}
    >
      <CardContent
        className={Styles.Content}
        style={{ backgroundColor: dirty ? '#FFBABA' : '#90caf9' }}
      >
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
          <label htmlFor='textArea' className={Styles.Label}>
            Data:
          </label>
          <TextareaAutosize
            id='textArea'
            value={dataValue}
            className={Styles.TextArea}
            onChange={dataValueChangeHandler}
            rowsMin='4'
          />
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
          onClick={mineClickHandler}
        >
          Mine
        </Button>
      </CardContent>
    </Card>
  );
}

export default Block;
