import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useState, useEffect, useCallback } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";

import {
  installmetamask,
  getblocknumberfunction,
  getcounttransaction,
  getMiner,
  gettotalDifficulty,
  gettransaction,
} from "../services/nftContractFunctions";

import { INFURA_ID, NETWORK_NAME } from "../config";

function useWeb3Integration(mintAmount) {
  const [account, setAccount] = useState("");
  const [provider, setProvider] = useState(null);
  const [web3provider, setWeb3Provider] = useState(null);
  const [resume, setResume] = useState(false);
  const [buttontext, setButtontext] = useState("Pause");
  const [blocknumber, setblocknumber] = useState("");
  const [transactioncount, settransactioncount] = useState("");
  const [miner, setminer] = useState("");
  const [totalDifficulty, settotalDifficulty] = useState("");
  const [autoLoaded, setAutoLoaded] = useState(false);

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: INFURA_ID,
      },
    },
  };

  const web3Modal = new Web3Modal({
    network: NETWORK_NAME,
    cacheProvider: true,
    providerOptions,
  });

  const onConnect = useCallback(async () => {
    const provider = await web3Modal.connect();
    const web3Provider = new ethers.providers.Web3Provider(provider);

    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    const network = await web3Provider.getNetwork();
    if (network.chainId !== 1) {
      alert("Please, change to mainnet network");
      resetApp();
    }

    setAccount(address);
    setProvider(provider);
    setWeb3Provider(web3Provider);
  }, [web3Modal]);
  const toggle = useCallback(async () => {
    if (resume === false) {
      setResume(true);
      setButtontext("Resume")
    } else {
      setResume(false);
      setButtontext("Pause");
    }
  })

  const resetApp = useCallback(async () => {
    await web3Modal.clearCachedProvider();
    if (provider?.disconnect && typeof provider.disconnect === "function") {
      await provider.disconnect();
    }
    setAccount("");
    setProvider(null);
    setWeb3Provider(null);
  }, [provider, web3Modal]);

  // Auto connect to the cached provider
  useEffect(() => {
    if (!autoLoaded && web3Modal?.cachedProvider) {
      onConnect();
      setAutoLoaded(true);
    }
  }, [onConnect, autoLoaded, web3Modal?.cachedProvider]);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        setAccount(accounts[0]);
      };
      const handleDisconnect = () => {
        resetApp();
      };
      const handleChainChanged = () => {
        // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
        window.location.reload();
      };
      provider.on("disconnect", handleDisconnect);
      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider, resetApp]);

  useEffect(() => {
    const loadContractState = async () => {
      if (web3provider) {
        setblocknumber(await getblocknumberfunction());
        settransactioncount(await getcounttransaction());
        setminer(await getMiner());
        settotalDifficulty(await gettotalDifficulty());
        if (resume === false) {
          const initialsate = async () => {
            console.log(resume)
            await gettransaction();
          };
          // setInterval(() => {
          setTimeout(() => {
            initialsate()
          }, 10000);
          // }, 1000);
        } else {
          console.log(resume)
          localStorage.removeItem("alldata");
        }
      }

    };
    loadContractState();
  }, [mintAmount, web3provider, resume, account]);
  useEffect(() => {
    installmetamask();
  }, []);

  return [
    account,
    provider,
    web3provider,
    onConnect,
    resetApp,
    toggle,
    blocknumber,
    transactioncount,
    miner,
    totalDifficulty,
    buttontext
  ];
}

export default useWeb3Integration;
