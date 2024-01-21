/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  EIP712,
  EIP712Interface,
} from "../../../../contracts/tests/permit2/EIP712";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234610033575b610012610040565b60405161025461019682396080518160b5015260a05181608e015261025490f35b61003b600080fd5b61000a565b4660a05261008e7f9ac997416e8ff9d2ff6bebeb7149f65cdae5e32e2b90440b566bb3044041d36a7f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a866610150565b608052565b6100a7906100aa906001600160a01b031682565b90565b6001600160a01b031690565b6100a790610093565b6100a7906100b6565b9052565b6100c8906100aa565b610102610109946100fb6060949897956100f4608086019a6000870152565b6020850152565b6040830152565b01906100cc565b565b50634e487b7160e01b600052604160045260246000fd5b90601f01601f191681019081106001600160401b0382111761014357604052565b61014b61010b565b604052565b469161017f91610173610162306100bf565b6040519586946020860194856100d5565b90810382520382610122565b61019161018a825190565b9160200190565b209056fe60806040526004361015610018575b610016600080fd5b005b60003560e01c633644e5150361000e5761003061004e565b61000e565b600091031261004057565b610048600080fd5b565b9052565b503461007f575b610060366004610035565b61007b61006b61008c565b6040519182918290815260200190565b0390f35b610087600080fd5b610055565b7f000000000000000000000000000000000000000000000000000000000000000046036100d7577f000000000000000000000000000000000000000000000000000000000000000090565b6101217f9ac997416e8ff9d2ff6bebeb7149f65cdae5e32e2b90440b566bb3044041d36a7f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a8666101d9565b90565b61012190610138906001600160a01b031682565b6001600160a01b031690565b61012190610124565b61012190610144565b61004a90610138565b61018c6100489461018560609498979561017e608086019a6000870152565b6020850152565b6040830152565b0190610156565b50634e487b7160e01b600052604160045260246000fd5b90601f01601f1916810190811067ffffffffffffffff8211176101cc57604052565b6101d4610193565b604052565b4691610208916101fc6101eb3061014d565b60405195869460208601948561015f565b908103825203826101aa565b61021a610213825190565b9160200190565b209056fea26469706673582212209d02e6029e4b5e4e1406882da79f478920609bc1fbe22ec619c99f6143cc955864736f6c63430008110033";

type EIP712ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EIP712ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EIP712__factory extends ContractFactory {
  constructor(...args: EIP712ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      EIP712 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EIP712__factory {
    return super.connect(runner) as EIP712__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EIP712Interface {
    return new Interface(_abi) as EIP712Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): EIP712 {
    return new Contract(address, _abi, runner) as unknown as EIP712;
  }
}