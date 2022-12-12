import { ethers } from "ethers";
import { CONTRACT_ABI } from 'configs/app-config';

const { ethereum } = window;
const provider = ethereum && ethereum.isMetaMask ? new ethers.providers.Web3Provider(ethereum) : null;
const signer = ethereum && ethereum.isMetaMask ? provider.getSigner() : null;

export const homeverseioContract = new ethers.Contract("0xc44FDD442D851b71F3288bf32cABefBbc26e5CfB", CONTRACT_ABI, signer);