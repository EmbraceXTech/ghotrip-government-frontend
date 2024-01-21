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
import type { PBM, PBMInterface } from "../../contracts/PBM";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC1155InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC1155InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idsLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "valuesLength",
        type: "uint256",
      },
    ],
    name: "ERC1155InvalidArrayLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC1155InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC1155InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC1155InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC1155MissingApprovalForAll",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "PBMTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sovToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sovTokenValue",
        type: "uint256",
      },
    ],
    name: "PBMrevokeWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sovToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sovTokenValue",
        type: "uint256",
      },
    ],
    name: "TokenUnwrapForPBMBurn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sovToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sovTokenValue",
        type: "uint256",
      },
    ],
    name: "TokenUnwrapForTarget",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sovToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sovTokenValue",
        type: "uint256",
      },
    ],
    name: "TokenWrap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "burnBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sovToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_expiry",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_pbmLogic",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pbmTokenManager",
        type: "address",
      },
    ],
    name: "initialise",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "revokePBM",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeMintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
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
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "unwrap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805160208101909152600081526200002c8162000033565b50620001b6565b6002620000418282620000ea565b5050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200007057607f821691505b6020821081036200009157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620000e557600081815260208120601f850160051c81016020861015620000c05750805b601f850160051c820191505b81811015620000e157828155600101620000cc565b5050505b505050565b81516001600160401b0381111562000106576200010662000045565b6200011e816200011784546200005b565b8462000097565b602080601f8311600181146200015657600084156200013d5750858301515b600019600386901b1c1916600185901b178555620000e1565b600085815260208120601f198616915b82811015620001875788860151825594840194600190910190840162000166565b5085821015620001a65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610bc280620001c66000396000f3fe608060405234801561001057600080fd5b506004361061010a5760003560e01c806373e17e76116100a2578063c39dfed811610071578063c39dfed8146101eb578063e985e9c51461024f578063ee0d82491461028b578063f242432a146101bd578063f2fde38b1461029f57600080fd5b806373e17e76146102105780638a94b05f146102025780638da5cb5b14610221578063a22cb4651461023c57600080fd5b806335d1deb1116100de57806335d1deb1146101bd5780634e1273f4146101cb5780635473422e146101eb5780635cfa92971461020257600080fd5b8062fdd58e1461010f57806301ffc9a7146101555780630e89341c146101785780632eb2c2d6146101a6575b600080fd5b61014261011d3660046104bc565b6000908152602081815260408083206001600160a01b03949094168352929052205490565b6040519081526020015b60405180910390f35b6101686101633660046104e6565b6102cf565b604051901515815260200161014c565b610199610186366004610517565b5060408051602081019091526000815290565b60405161014c9190610530565b6101bb6101b43660046106c4565b5050505050565b005b6101bb6101b436600461076e565b6101de6101d93660046107d3565b610321565b60405161014c9190610893565b6101bb6101f9366004610965565b50505050505050565b6101bb6101b4366004610a10565b6101bb61021e366004610517565b50565b6003546040516001600160a01b03909116815260200161014c565b6101bb61024a366004610a78565b6103fb565b61016861025d366004610ab4565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b6101bb610299366004610ae7565b50505050565b6101bb6102ad366004610b34565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b60006001600160e01b03198216636cdb3d1360e11b148061030057506001600160e01b031982166303a24d0760e21b145b8061031b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b606081518351146103575781518351604051635b05999160e01b8152600481019290925260248201526044015b60405180910390fd5b6000835167ffffffffffffffff8111156103735761037361057e565b60405190808252806020026020018201604052801561039c578160200160208202803683370190505b50905060005b84518110156103f3576020808202860101516103c69060208084028701015161011d565b8282815181106103d8576103d8610b4f565b60209081029190910101526103ec81610b65565b90506103a2565b509392505050565b61040633838361040a565b5050565b6001600160a01b0382166104335760405162ced3e160e81b81526000600482015260240161034e565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b80356001600160a01b03811681146104b757600080fd5b919050565b600080604083850312156104cf57600080fd5b6104d8836104a0565b946020939093013593505050565b6000602082840312156104f857600080fd5b81356001600160e01b03198116811461051057600080fd5b9392505050565b60006020828403121561052957600080fd5b5035919050565b600060208083528351808285015260005b8181101561055d57858101830151858201604001528201610541565b506000604082860101526040601f19601f8301168501019250505092915050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156105bd576105bd61057e565b604052919050565b600067ffffffffffffffff8211156105df576105df61057e565b5060051b60200190565b600082601f8301126105fa57600080fd5b8135602061060f61060a836105c5565b610594565b82815260059290921b8401810191818101908684111561062e57600080fd5b8286015b848110156106495780358352918301918301610632565b509695505050505050565b600082601f83011261066557600080fd5b813567ffffffffffffffff81111561067f5761067f61057e565b610692601f8201601f1916602001610594565b8181528460208386010111156106a757600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a086880312156106dc57600080fd5b6106e5866104a0565b94506106f3602087016104a0565b9350604086013567ffffffffffffffff8082111561071057600080fd5b61071c89838a016105e9565b9450606088013591508082111561073257600080fd5b61073e89838a016105e9565b9350608088013591508082111561075457600080fd5b5061076188828901610654565b9150509295509295909350565b600080600080600060a0868803121561078657600080fd5b61078f866104a0565b945061079d602087016104a0565b93506040860135925060608601359150608086013567ffffffffffffffff8111156107c757600080fd5b61076188828901610654565b600080604083850312156107e657600080fd5b823567ffffffffffffffff808211156107fe57600080fd5b818501915085601f83011261081257600080fd5b8135602061082261060a836105c5565b82815260059290921b8401810191818101908984111561084157600080fd5b948201945b8386101561086657610857866104a0565b82529482019490820190610846565b9650508601359250508082111561087c57600080fd5b50610889858286016105e9565b9150509250929050565b6020808252825182820181905260009190848201906040850190845b818110156108cb578351835292840192918401916001016108af565b50909695505050505050565b60008083601f8401126108e957600080fd5b50813567ffffffffffffffff81111561090157600080fd5b6020830191508360208260051b850101111561091c57600080fd5b9250929050565b60008083601f84011261093557600080fd5b50813567ffffffffffffffff81111561094d57600080fd5b60208301915083602082850101111561091c57600080fd5b60008060008060008060006080888a03121561098057600080fd5b610989886104a0565b9650602088013567ffffffffffffffff808211156109a657600080fd5b6109b28b838c016108d7565b909850965060408a01359150808211156109cb57600080fd5b6109d78b838c016108d7565b909650945060608a01359150808211156109f057600080fd5b506109fd8a828b01610923565b989b979a50959850939692959293505050565b600080600080600060808688031215610a2857600080fd5b610a31866104a0565b94506020860135935060408601359250606086013567ffffffffffffffff811115610a5b57600080fd5b610a6788828901610923565b969995985093965092949392505050565b60008060408385031215610a8b57600080fd5b610a94836104a0565b915060208301358015158114610aa957600080fd5b809150509250929050565b60008060408385031215610ac757600080fd5b610ad0836104a0565b9150610ade602084016104a0565b90509250929050565b60008060008060808587031215610afd57600080fd5b610b06856104a0565b935060208501359250610b1b604086016104a0565b9150610b29606086016104a0565b905092959194509250565b600060208284031215610b4657600080fd5b610510826104a0565b634e487b7160e01b600052603260045260246000fd5b600060018201610b8557634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220f5331de430da7f11e8d8a3d18952b68fd518bb913b84b62c0cdb7f5f82d4532c64736f6c63430008140033";

type PBMConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PBMConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PBM__factory extends ContractFactory {
  constructor(...args: PBMConstructorParams) {
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
      PBM & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PBM__factory {
    return super.connect(runner) as PBM__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PBMInterface {
    return new Interface(_abi) as PBMInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PBM {
    return new Contract(address, _abi, runner) as unknown as PBM;
  }
}
