import Escrow from './artifacts/contracts/Escrow.sol/Escrow';
import {ethers} from 'ethers';

const provider = new ethers.providers.Web3Provider(ethereum);

export default async function deploy(arbiter, beneficiary, value1) {
  await ethereum.request({ method: 'eth_requestAccounts' });
  const signer = provider.getSigner();
  const factory = new ethers.ContractFactory(Escrow.abi, Escrow.bytecode, signer);
  console.log(value1);
  return factory.deploy(arbiter, beneficiary, {
    value: ethers.utils.parseEther(value1)
   });
}
