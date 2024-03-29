/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Payment, PaymentInterface } from "../../contracts/Payment";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPermit2",
        name: "_permit2",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getPayment",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
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
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "feeTo",
            type: "address",
          },
        ],
        internalType: "struct IPayment.Pay",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_feeTo",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct IPayment.Signature",
        name: "_sig",
        type: "tuple",
      },
    ],
    name: "pay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_feeTo",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct IPayment.Signature",
        name: "_sig",
        type: "tuple",
      },
    ],
    name: "payPermit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paymentCount",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "paymentList",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "feeTo",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "permit2",
    outputs: [
      {
        internalType: "contract IPermit2",
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
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "splitSignature",
    outputs: [
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610f47380380610f4783398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051610eb66100916000396000818160a3015261049a0152610eb66000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a7bb58031161005b578063a7bb58031461015d578063a82191781461018f578063af8a3508146101a2578063ccc79058146101b557600080fd5b80630937e68a1461008257806312261ee71461009e5780633280a836146100dd575b600080fd5b61008b60005481565b6040519081526020015b60405180910390f35b6100c57f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610095565b6100f06100eb366004610b22565b610212565b604080518251815260208084015190820152828201516001600160a01b039081169282019290925260608084015183169082015260808084015183169082015260a0808401519082015260c0808401519082015260e0928301519091169181019190915261010001610095565b61017061016b366004610c07565b6102eb565b6040805160ff9094168452602084019290925290820152606001610095565b61008b61019d366004610c60565b61031a565b61008b6101b0366004610c60565b610686565b6101c86101c3366004610b22565b610abb565b6040805198895260208901979097526001600160a01b03958616968801969096529284166060870152908316608086015260a085015260c08401521660e082015261010001610095565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091526001828154811061026657610266610d39565b6000918252602091829020604080516101008101825260089093029091018054835260018101549383019390935260028301546001600160a01b0390811691830191909152600383015481166060830152600483015481166080830152600583015460a0830152600683015460c083015260079092015490911660e082015292915050565b600080600083516041146102fe57600080fd5b5050506020810151604082015160609092015160001a92909190565b600080548190818061032b83610d65565b91905055905060016040518061010001604052808381526020014281526020018b6001600160a01b031681526020018a6001600160a01b03168152602001896001600160a01b03168152602001888152602001878152602001866001600160a01b03168152509080600181540180825580915050600190039060005260206000209060080201600090919091909150600082015181600001556020820151816001015560408201518160020160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060808201518160040160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060a0820151816005015560c0820151816006015560e08201518160070160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166330f28b7a604051806060016040528060405180604001604052808c6001600160a01b031681526020018b81525081526020018660000151815260200186602001518152506040518060400160405280306001600160a01b031681526020018a8152508c87604001516040518563ffffffff1660e01b815260040161054a9493929190610d7e565b600060405180830381600087803b15801561056457600080fd5b505af1158015610578573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b038781166004830152602482018990528a16925063a9059cbb91506044016020604051808303816000875af11580156105cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ef9190610e3e565b506001600160a01b03871663a9059cbb8961060a888a610e67565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610655573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106799190610e3e565b5098975050505050505050565b600080548190818061069783610d65565b90915550604080516101008101825282815242602082019081526001600160a01b03808e168385019081528d8216606085019081528d83166080860190815260a086018e815260c087018e81528d861660e08901908152600180548082018255600091825299516008909a027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf681019a909a5597517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf78a015594517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf8890180549188166001600160a01b031992831617905593517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf98901805491881691861691909117905591517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfa88018054918716918516919091179055517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfb870155517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfc86015590517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfd909401805494909216931692909217909155908501519192509081908190610883906102eb565b925092509250896001600160a01b031663d505accf8d308c8a602001518888886040518863ffffffff1660e01b815260040161090197969594939291906001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b600060405180830381600087803b15801561091b57600080fd5b505af115801561092f573d6000803e3d6000fd5b50506040516323b872dd60e01b81526001600160a01b038f81166004830152306024830152604482018d90528d1692506323b872dd91506064016020604051808303816000875af1158015610988573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ac9190610e3e565b5060405163a9059cbb60e01b81526001600160a01b038881166004830152602482018a90528b169063a9059cbb906044016020604051808303816000875af11580156109fc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a209190610e3e565b506001600160a01b038a1663a9059cbb8c610a3b8b8d610e67565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610a86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aaa9190610e3e565b50929b9a5050505050505050505050565b60018181548110610acb57600080fd5b60009182526020909120600890910201805460018201546002830154600384015460048501546005860154600687015460079097015495975093956001600160a01b03938416959284169491841693919290911688565b600060208284031215610b3457600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610b7457610b74610b3b565b60405290565b600082601f830112610b8b57600080fd5b813567ffffffffffffffff80821115610ba657610ba6610b3b565b604051601f8301601f19908116603f01168101908282118183101715610bce57610bce610b3b565b81604052838152866020858801011115610be757600080fd5b836020870160208301376000602085830101528094505050505092915050565b600060208284031215610c1957600080fd5b813567ffffffffffffffff811115610c3057600080fd5b610c3c84828501610b7a565b949350505050565b80356001600160a01b0381168114610c5b57600080fd5b919050565b600080600080600080600060e0888a031215610c7b57600080fd5b610c8488610c44565b9650610c9260208901610c44565b9550610ca060408901610c44565b94506060880135935060808801359250610cbc60a08901610c44565b915060c088013567ffffffffffffffff80821115610cd957600080fd5b908901906060828c031215610ced57600080fd5b610cf5610b51565b8235815260208301356020820152604083013582811115610d1557600080fd5b610d218d828601610b7a565b60408301525080935050505092959891949750929550565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610d7757610d77610d4f565b5060010190565b6000610100610da183885180516001600160a01b03168252602090810151910152565b602080880151604085015260408801516060850152610dd6608085018880516001600160a01b03168252602090810151910152565b6001600160a01b03861660c085015260e0840182905284519184018290526000915b80831015610e1757858301820151858401610120015291810191610df8565b6101209250600083828701015282601f19601f830116860101935050505095945050505050565b600060208284031215610e5057600080fd5b81518015158114610e6057600080fd5b9392505050565b81810381811115610e7a57610e7a610d4f565b9291505056fea26469706673582212204eab78230ab8bed9cb664e30ac980051ac2c1f4620286b152ea41865f59cd11964736f6c63430008140033";

type PaymentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PaymentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Payment__factory extends ContractFactory {
  constructor(...args: PaymentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _permit2: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_permit2, overrides || {});
  }
  override deploy(
    _permit2: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_permit2, overrides || {}) as Promise<
      Payment & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Payment__factory {
    return super.connect(runner) as Payment__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymentInterface {
    return new Interface(_abi) as PaymentInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Payment {
    return new Contract(address, _abi, runner) as unknown as Payment;
  }
}
