import { ethers } from "ethers";

import { nftAddress, INFURA_URL } from "../config";
import nauticalNarwhals from "../artifacts/contracts/NauticalNarwhalsNFT.sol/new.json";
import Web3 from 'web3';
import { TramSharp } from "@mui/icons-material";

const PRICE = ethers.utils.parseEther("0.04");
let gettansaction = [];

const SUCCESS_MSG =
  "Success! Transaction has been submitted to the network. Please wait for confirmation on the blockchain.";
const CONFIRMED_MSG = "Transaction confirmed!";
let connectionInfo = {
  //<<==connectionInfo may have problem. Used to use url and worked fine.
  url: INFURA_URL, //<<=="http://my-ip:80"
  headers: {
    // Bearer: tokenBesu, //<<==tokenBesu is validated on jwt.io and OKed with cUrl command querying the network
  },
};
function getContract() {
  const provider = new ethers.providers.JsonRpcProvider(connectionInfo);
  const nftContract = new ethers.Contract(
    nftAddress,
    nauticalNarwhals.abi,
    provider
  );
  return nftContract;
}
export function installmetamask() {
  if (!window.ethereum) {
    alert('MetaMask is installed!');
  }
}
export async function gettransaction() {
  var myAddr = '0x98771321ad898ed7e2a367fc860aaf398e070807';
  const web3 = new Web3(Web3.givenProvider);
  let accountaddress = await web3.eth.getAccounts();
  let currentBlock = await web3.eth.getBlockNumber();
  let getcount = await web3.eth.getBlockTransactionCount(currentBlock);
  for (var i = 1; i <= getcount; i++) {
    await web3.eth.getBlock(i, (err, res) => {
      gettansaction.push(res);
      if (gettansaction.length == getcount) {
        let uniqueArray = [...new Set(gettansaction)];
        localStorage.setItem('alldata', JSON.stringify(uniqueArray));
        return uniqueArray;
      }
    })
  }
}

export async function getMiner() {
  const web3 = new Web3(Web3.givenProvider);
  let accountaddress = await web3.eth.getAccounts();
  let currentBlock = await web3.eth.getBlockNumber();
  let getcount = await web3.eth.getBlockTransactionCount(currentBlock);
  let gettansaction = [];
  let blockinfo = await web3.eth.getBlock(currentBlock);
  let minter = blockinfo.miner;
  return minter.toString();
}
export async function gettotalDifficulty() {
  const web3 = new Web3(Web3.givenProvider);
  let currentBlock = await web3.eth.getBlockNumber();
  let blockinfo = await web3.eth.getBlock(currentBlock);
  let totalDifficulty = blockinfo.totalDifficulty;
  return totalDifficulty.toString();
}
export async function getblocknumberfunction() {
  const web3 = new Web3(Web3.givenProvider);
  let currentBlocknumber = await web3.eth.getBlockNumber();
  return currentBlocknumber.toString();
}
export async function getcounttransaction() {
  const web3 = new Web3(Web3.givenProvider);
  let currentBlocknumber = await web3.eth.getBlockNumber();
  let getcounttransactoin = await web3.eth.getBlockTransactionCount(currentBlocknumber);
  return getcounttransactoin.toString();
}


function catchError(error) {
  console.error(error.message);
  // try to extract error message, otherwise return raw error
  let formatted_error;

  if (error.message.startsWith("invalid ENS name")) {
    formatted_error = "Missing or invalid parameter.";
  } else if (error.message.startsWith("invalid BigNumber string")) {
    formatted_error = "Invalid number parameter.";
  } else {
    try {
      const EXTRACT_ERROR_MESSAGE = /(?<="message":")(.*?)(?=")/g;
      let errors = JSON.stringify(error).match(EXTRACT_ERROR_MESSAGE);
      formatted_error = errors[errors.length - 1];
    } catch (e) {
      formatted_error = error.message;
    }
  }

  return formatted_error;
}
