import React, { useEffect, useReducer } from 'react';
import { Card, CardContent, Input } from 'semantic-ui-react';
import { TextareaAutosize } from '@material-ui/core';
import { Container } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import Spinner from '../../Spinner/Spinner';
import sha256 from 'crypto-js/sha256';
import Styles from './Block.module.css';
import { blockReducer } from './blockReducer';

function Block() {
  const [state, dispatch] = useReducer(blockReducer, {
    textValue: '',
    hashValue: sha256('').toString(),
    nonce: '',
    buttonLoading: true,
    dirty: false,
    pageLoading: true,
  });

  const {
    textValue,
    hashValue,
    nonce,
    buttonLoading,
    dirty,
    pageLoading,
  } = state;

  function updateTextAndHashValue(e) {
    dispatch({ type: 'UPDATE_TEXT_AND_HASH_VALUE', payload: e.target.value });
  }

  function mineClickHandler() {
    dispatch({ type: 'MINING_STARTED' });
  }

  useEffect(() => {
    console.log(buttonLoading);
    if (buttonLoading) {
      let tempNonce = 0;
      let shaString;
      while (true) {
        shaString = sha256(textValue + tempNonce).toString();
        if (shaString.slice(0, 4) === '0000') {
          break;
        }
        tempNonce++;
      }
      console.log(11);
      dispatch({
        type: 'MINING_FINISHED',
        payload: { updateSha: shaString, updateNonce: tempNonce.toString() },
      });
    }
  }, [buttonLoading]);

  return (
    <Container style={{ marginTop: '2%' }}>
      {pageLoading ? (
        <Spinner />
      ) : (
        <>
          <h1 className={Styles.Heading}>Block:-</h1>
          <Card className={Styles.Root} centered>
            <CardContent
              className={Styles.Content}
              style={{ backgroundColor: dirty ? '#FFBABA' : '#90caf9' }}>
              <div className={Styles.TopDataContainer}>
                <Input
                  label={'BlockNumber'}
                  className={Styles.NumberArea}
                  disabled
                  size='large'
                  value={'1'}
                />
              </div>
              <div className={Styles.DataContainer}>
                <Input
                  label={'Nonce'}
                  className={Styles.NonceArea}
                  disabled
                  size='large'
                  value={nonce}
                />
              </div>
              <div className={Styles.DataContainer}>
                <label htmlFor='textArea' className={Styles.Label}>
                  Data:
                </label>
                <TextareaAutosize
                  id='textArea'
                  value={textValue}
                  className={Styles.TextArea}
                  onChange={updateTextAndHashValue}
                  rowsMin='7'
                />
              </div>
              <div className={Styles.DataContainer}>
                <Input
                  label={'Hash'}
                  className={Styles.NonceArea}
                  disabled
                  size='large'
                  value={hashValue}
                />
              </div>
              <Button
                className={Styles.Mine}
                loading={buttonLoading}
                secondary
                size='large'
                disabled={buttonLoading}
                onClick={mineClickHandler}>
                Mine
              </Button>
            </CardContent>
          </Card>
        </>
      )}
    </Container>
  );
}

export default Block;
