import React, { useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  TextArea,
  Input,
} from 'semantic-ui-react';
import useInput from '../../../utils/useInput';

import sha256 from 'crypto-js/sha256';
import Styles from './hash.module.css';

function Hash() {
  const [textValue, updateTextValue] = useInput('');
  const [hashValue, updateHash] = useState(sha256('').toString());

  function updateTextAndHashValue(e) {
    updateTextValue(e.target.value);
    updateHash(sha256(e.target.value).toString());
  }

  return (
    <Container>
      <h1 className={Styles.Heading}>Hash:-</h1>
      <Card className={Styles.Root} centered>
        <CardContent className={Styles.Content}>
          <div className={Styles.DataContainer}>
            <label htmlFor='textArea' className={Styles.Label}>
              Data:
            </label>
            <TextArea
              id='textArea'
              value={textValue}
              className={Styles.TextArea}
              onChange={updateTextAndHashValue}
              rows={7}
            />
          </div>
          <div className={Styles.DataContainer}>
            <Input
              label={'Hash'}
              placeholder='placeholder'
              className={Styles.HashArea}
              disabled
              size='large'
              value={hashValue}
            />
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Hash;
