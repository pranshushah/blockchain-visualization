import React from 'react';
import { Input } from 'semantic-ui-react';
import Styles from './txBlock.module.css';

function TxBlock({
  from,
  to,
  amount,
  txObj,
  blockIndex,
  onChangeInput,
  txIndex,
}) {
  const fromClassString = [
    Styles.txInput,
    'fromInput',
    Styles.txInputFrom,
    Styles.paddingClass,
  ].join(' ');
  const toClassString = [
    Styles.txInput,
    'toInput',
    Styles.paddingClass,
    Styles.txInputTo,
  ].join(' ');
  const amountString = [
    Styles.txAmount,
    'amountInput',
    Styles.paddingClass,
  ].join(' ');

  function txBlockChangeHandler(e) {
    if (e.target.parentElement.classList.contains('fromInput')) {
      const newTxObj = { ...txObj, from: e.target.value };
      onChangeInput(newTxObj, blockIndex, txIndex);
    } else if (e.target.parentElement.classList.contains('toInput')) {
      const newTxObj = { ...txObj, to: e.target.value };
      onChangeInput(newTxObj, blockIndex, txIndex);
    } else {
      const newTxObj = { ...txObj, amount: e.target.value };
      onChangeInput(newTxObj, blockIndex, txIndex);
    }
  }

  return (
    <div style={{ margin: '0px' }}>
      <Input
        label={'$'}
        className={amountString}
        value={amount}
        onChange={txBlockChangeHandler}
      />
      <Input
        label={'from'}
        className={fromClassString}
        value={from}
        onChange={txBlockChangeHandler}
      />
      <Input
        label={'to'}
        className={toClassString}
        value={to}
        onChange={txBlockChangeHandler}
      />
    </div>
  );
}

export default TxBlock;
