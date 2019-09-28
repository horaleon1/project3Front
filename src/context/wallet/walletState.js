import React, { useReducer } from "react";
import uuid from "uuid";
import WalletContext from "./walletContext";
import WalletReducer from "./walletReducer";

// import {
//   ADD_WALLET,
//   DELETE_WALLET,
//   SET_CURRENT,
//   CLEAR_CURRENT,
//   UPDATE_WALLET,
//   FILTER_WALLETS,
//   CLEAR_FILTER
// } from "../types";

const WalletState = props => {
  const initialState = {
    wallets: [
      {
        id: 1,
        wallet:
          "dd57be2ae7d664ef927536082dbfff0c1601a0b92d18eea432f33308c25da4fc"
      },
      {
        id: 2,
        wallet:
          "1534cf2af76ecd84b803010b700287c00446599c68e8d81befa9c569f03e64dd"
      },
      {
        id: 3,
        wallet:
          "91f9b76fa0a570cb9182039ae29f3441fa0f97945053fb4354de77bc81bf7938"
      }
    ]
  };
  const [state, dispatch] = useReducer(WalletReducer,initialState);

  //add Wallet

  //delete Wallet

  //Update Wallet

  //filter wallett

  //clear filter

  return (
    <WalletContext.Provider>
      value={{
        wallets: state.wallets
      }}
      { props.children }
    </WalletContext.Provider>
  )
};

export default WalletState;
