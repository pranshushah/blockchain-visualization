import sha256 from 'crypto-js/sha256';

export function blockReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TEXT_AND_HASH_VALUE': {
      const tempString = sha256(action.payload + state.nonce).toString();
      return {
        ...state,
        textValue: action.payload,
        hashValue: tempString,
        dirty: tempString.slice(0, 4) === '0000' ? false : true,
      };
    }
    case 'MINING_STARTED': {
      return {
        ...state,
        buttonLoading: true,
      };
    }
    case 'MINING_FINISHED': {
      return {
        ...state,
        hashValue: action.payload.updateSha,
        nonce: action.payload.updateNonce,
        buttonLoading: false,
        dirty: false,
        pageLoading: false,
      };
    }
    default: {
      return state;
    }
  }
}
