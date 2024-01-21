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
import type { NonPayableOverrides } from "../../common";
import type { PBMLogic, PBMLogicInterface } from "../../contracts/PBMLogic";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "action",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "Blacklist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "action",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "MerchantList",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "blacklistAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "isBlacklisted",
    outputs: [
      {
        internalType: "bool",
        name: "bool_",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "isMerchant",
    outputs: [
      {
        internalType: "bool",
        name: "bool_",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "unBlacklistAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "unWhitelistAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "whitelistAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506106f9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063194ef60b146100675780631a2f71671461007c578063270dedb3146100a3578063380518e9146100b6578063f984a40c146100c9578063fe575a87146100dc575b600080fd5b61007a610075366004610493565b610108565b005b61008f61008a366004610562565b6101ad565b604051901515815260200160405180910390f35b61007a6100b1366004610493565b6101f4565b61007a6100c4366004610493565b61028e565b61007a6100d7366004610493565b610327565b61008f6100ea366004610562565b6001600160a01b031660009081526020819052604090205460ff1690565b60005b825181101561016f57600160008085848151811061012b5761012b610584565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055806101678161059a565b91505061010b565b507ffd601646bc86d816d9448e5951578f6b37509d32182b7d514dac8c544bcde82a82826040516101a192919061064b565b60405180910390a15050565b6001600160a01b03811660009081526001602052604081205460ff1680156101ee57506001600160a01b03821660009081526020819052604090205460ff16155b92915050565b60005b825181101561025c5760006001600085848151811061021857610218610584565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055806102548161059a565b9150506101f7565b507f255c7bb3f43b415fcde5cc3fd6b38794d983721f30b0a924ab3db736c38c457382826040516101a1929190610693565b60005b82518110156102f55760008060008584815181106102b1576102b1610584565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055806102ed8161059a565b915050610291565b507ffd601646bc86d816d9448e5951578f6b37509d32182b7d514dac8c544bcde82a82826040516101a1929190610693565b60005b825181101561038e57600180600085848151811061034a5761034a610584565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055806103868161059a565b91505061032a565b507f255c7bb3f43b415fcde5cc3fd6b38794d983721f30b0a924ab3db736c38c457382826040516101a192919061064b565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156103ff576103ff6103c0565b604052919050565b80356001600160a01b038116811461041e57600080fd5b919050565b600082601f83011261043457600080fd5b813567ffffffffffffffff81111561044e5761044e6103c0565b610461601f8201601f19166020016103d6565b81815284602083860101111561047657600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156104a657600080fd5b823567ffffffffffffffff808211156104be57600080fd5b818501915085601f8301126104d257600080fd5b81356020828211156104e6576104e66103c0565b8160051b6104f58282016103d6565b928352848101820192828101908a85111561050f57600080fd5b958301955b848710156105345761052587610407565b82529583019590830190610514565b975050508601359250508082111561054b57600080fd5b5061055885828601610423565b9150509250929050565b60006020828403121561057457600080fd5b61057d82610407565b9392505050565b634e487b7160e01b600052603260045260246000fd5b6000600182016105ba57634e487b7160e01b600052601160045260246000fd5b5060010190565b600081518084526020808501945080840160005b838110156105fa5781516001600160a01b0316875295820195908201906001016105d5565b509495945050505050565b6000815180845260005b8181101561062b5760208185018101518683018201520161060f565b506000602082860101526020601f19601f83011685010191505092915050565b60608152600360608201526218591960ea1b608082015260a06020820152600061067860a08301856105c1565b828103604084015261068a8185610605565b95945050505050565b60608152600660608201526572656d6f766560d01b608082015260a06020820152600061067860a08301856105c156fea2646970667358221220ae48b64be6dd08ffa721b804eafcd86bfa976aefdb85ce717df607584e772df664736f6c63430008140033";

type PBMLogicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PBMLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PBMLogic__factory extends ContractFactory {
  constructor(...args: PBMLogicConstructorParams) {
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
      PBMLogic & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PBMLogic__factory {
    return super.connect(runner) as PBMLogic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PBMLogicInterface {
    return new Interface(_abi) as PBMLogicInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PBMLogic {
    return new Contract(address, _abi, runner) as unknown as PBMLogic;
  }
}