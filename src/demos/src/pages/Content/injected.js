import {
  enable,
  getAddress,
  getBalance,
  getCollateral,
  getNetworkId,
  getRewardAddress,
  getUtxos,
  isEnabled,
  off,
  on,
  signData,
  signDataCIP30,
  signTx,
  submitTx,
  //CIP-95
  getDRepKey,
  getStakeKey,
  submitDelegation,
  submitDRepRegistrationCertificate,
  submitDRepRetirementCertificate,
  submitVote,
  submitGovernanceAction,
} from '../../api/webpage';
import { EVENT } from '../../config/config';

// CIP-30 + CIP-95
window.cardano = {
  ...(window.cardano || {}),
  demos: {
    enable: async (obj) => {
      let extension = undefined;
      try{
        extension = obj['cip'];
      }catch(err) {
        console.log("Wallet: No extension passed to wallet");
      }

      if (extension == "95") {
        if (await enable()) {
          return {
            getBalance: () => getBalance(),
            signData: (address, payload) => signDataCIP30(address, payload),
            signTx: (tx, partialSign) => signTx(tx, partialSign),
            submitTx: (tx) => submitTx(tx),
            getUtxos: (amount, paginate) => getUtxos(amount, paginate),
            getUsedAddresses: async () => [await getAddress()],
            getUnusedAddresses: async () => [],
            getChangeAddress: () => getAddress(),
            getRewardAddresses: async () => [await getRewardAddress()],
            getNetworkId: () => getNetworkId(),
            experimental: {
              on: (eventName, callback) => on(eventName, callback),
              off: (eventName, callback) => off(eventName, callback),
              getCollateral: () => getCollateral(),
            },
            // CIP-95 -----------------------------
            getPubDRepKey:() => getDRepKey(),
            getActivePubStakeKeys:() => getStakeKey(),
            submitVoteDelegation:(delegationCertificate) => submitDelegation(delegationCertificate),
            submitDRepRegistrationCertificate:(dRepRegistrationCertificate) => submitDRepRegistrationCertificate(dRepRegistrationCertificate),
            submitDRepRetirementCertificate:(dRepRetirementCertificate) => submitDRepRetirementCertificate(dRepRetirementCertificate),
            submitVote:(vote) => submitVote(vote),
            submitGovernanceAction:(governanceAction) => submitGovernanceAction(governanceAction),
          };
        }
      }  else if (obj == null) {
        if (await enable()) {
          return {
            getBalance: () => getBalance(),
            signData: (address, payload) => signDataCIP30(address, payload),
            signTx: (tx, partialSign) => signTx(tx, partialSign),
            submitTx: (tx) => submitTx(tx),
            getUtxos: (amount, paginate) => getUtxos(amount, paginate),
            getUsedAddresses: async () => [await getAddress()],
            getUnusedAddresses: async () => [],
            getChangeAddress: () => getAddress(),
            getRewardAddresses: async () => [await getRewardAddress()],
            getNetworkId: () => getNetworkId(),
            experimental: {
              on: (eventName, callback) => on(eventName, callback),
              off: (eventName, callback) => off(eventName, callback),
              getCollateral: () => getCollateral(),
            },
          };
        }

      }
    },
    isEnabled: () => isEnabled(),
    apiVersion: '0.1.0',
    name: 'demos',
    icon: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='309.36' y='12.441' width='121.115' height='472.347' style='fill: rgb(128  177  211)%3B'/%3E%3Cellipse style='fill: rgb(128  177  211)%3B' cx='231.272' cy='320.966' rx='171.791' ry='137.051'/%3E%3C/svg%3E",
    _events: {},
  },
};
