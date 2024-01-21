/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface TravelPBMInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "balanceOf"
      | "balanceOfBatch"
      | "burn"
      | "burnBatch"
      | "expiry"
      | "initialise"
      | "isApprovedForAll"
      | "owner"
      | "pbmTokenManager"
      | "pmbLogic"
      | "revokePBM"
      | "safeBatchTransferFrom"
      | "safeMint"
      | "safeMintBatch"
      | "safeTransferFrom"
      | "setApprovalForAll"
      | "sovToken"
      | "supportsInterface"
      | "transferOwnership"
      | "unwrap"
      | "uri"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ApprovalForAll"
      | "OwnershipTransferred"
      | "PBMrevokeWithdraw"
      | "TokenUnwrapForPBMBurn"
      | "TokenUnwrapForTarget"
      | "TokenWrap"
      | "TransferBatch"
      | "TransferSingle"
      | "URI"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "burnBatch",
    values: [AddressLike, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "expiry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialise",
    values: [AddressLike, BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pbmTokenManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pmbLogic", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "revokePBM",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeMint",
    values: [AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeMintBatch",
    values: [AddressLike, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(functionFragment: "sovToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrap",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnBatch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "expiry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialise", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pbmTokenManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pmbLogic", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revokePBM", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "safeMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeMintBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sovToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unwrap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
}

export namespace ApprovalForAllEvent {
  export type InputTuple = [
    account: AddressLike,
    operator: AddressLike,
    approved: boolean
  ];
  export type OutputTuple = [
    account: string,
    operator: string,
    approved: boolean
  ];
  export interface OutputObject {
    account: string;
    operator: string;
    approved: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PBMrevokeWithdrawEvent {
  export type InputTuple = [
    beneficiary: AddressLike,
    PBMTokenId: BigNumberish,
    sovToken: AddressLike,
    sovTokenValue: BigNumberish
  ];
  export type OutputTuple = [
    beneficiary: string,
    PBMTokenId: bigint,
    sovToken: string,
    sovTokenValue: bigint
  ];
  export interface OutputObject {
    beneficiary: string;
    PBMTokenId: bigint;
    sovToken: string;
    sovTokenValue: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokenUnwrapForPBMBurnEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    tokenIds: BigNumberish[],
    amounts: BigNumberish[],
    sovToken: AddressLike,
    sovTokenValue: BigNumberish
  ];
  export type OutputTuple = [
    from: string,
    to: string,
    tokenIds: bigint[],
    amounts: bigint[],
    sovToken: string,
    sovTokenValue: bigint
  ];
  export interface OutputObject {
    from: string;
    to: string;
    tokenIds: bigint[];
    amounts: bigint[];
    sovToken: string;
    sovTokenValue: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokenUnwrapForTargetEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    tokenIds: BigNumberish[],
    amounts: BigNumberish[],
    sovToken: AddressLike,
    sovTokenValue: BigNumberish
  ];
  export type OutputTuple = [
    from: string,
    to: string,
    tokenIds: bigint[],
    amounts: bigint[],
    sovToken: string,
    sovTokenValue: bigint
  ];
  export interface OutputObject {
    from: string;
    to: string;
    tokenIds: bigint[];
    amounts: bigint[];
    sovToken: string;
    sovTokenValue: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokenWrapEvent {
  export type InputTuple = [
    from: AddressLike,
    tokenIds: BigNumberish[],
    amounts: BigNumberish[],
    sovToken: AddressLike,
    sovTokenValue: BigNumberish
  ];
  export type OutputTuple = [
    from: string,
    tokenIds: bigint[],
    amounts: bigint[],
    sovToken: string,
    sovTokenValue: bigint
  ];
  export interface OutputObject {
    from: string;
    tokenIds: bigint[];
    amounts: bigint[];
    sovToken: string;
    sovTokenValue: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferBatchEvent {
  export type InputTuple = [
    operator: AddressLike,
    from: AddressLike,
    to: AddressLike,
    ids: BigNumberish[],
    values: BigNumberish[]
  ];
  export type OutputTuple = [
    operator: string,
    from: string,
    to: string,
    ids: bigint[],
    values: bigint[]
  ];
  export interface OutputObject {
    operator: string;
    from: string;
    to: string;
    ids: bigint[];
    values: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferSingleEvent {
  export type InputTuple = [
    operator: AddressLike,
    from: AddressLike,
    to: AddressLike,
    id: BigNumberish,
    value: BigNumberish
  ];
  export type OutputTuple = [
    operator: string,
    from: string,
    to: string,
    id: bigint,
    value: bigint
  ];
  export interface OutputObject {
    operator: string;
    from: string;
    to: string;
    id: bigint;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace URIEvent {
  export type InputTuple = [value: string, id: BigNumberish];
  export type OutputTuple = [value: string, id: bigint];
  export interface OutputObject {
    value: string;
    id: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TravelPBM extends BaseContract {
  connect(runner?: ContractRunner | null): TravelPBM;
  waitForDeployment(): Promise<this>;

  interface: TravelPBMInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  balanceOf: TypedContractMethod<
    [account: AddressLike, id: BigNumberish],
    [bigint],
    "view"
  >;

  balanceOfBatch: TypedContractMethod<
    [accounts: AddressLike[], ids: BigNumberish[]],
    [bigint[]],
    "view"
  >;

  burn: TypedContractMethod<
    [
      from: AddressLike,
      tokenId: BigNumberish,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  burnBatch: TypedContractMethod<
    [
      from: AddressLike,
      tokenIds: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  expiry: TypedContractMethod<[], [bigint], "view">;

  initialise: TypedContractMethod<
    [
      _sovToken: AddressLike,
      _expiry: BigNumberish,
      _pbmLogic: AddressLike,
      _pbmTokenManager: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  isApprovedForAll: TypedContractMethod<
    [account: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  pbmTokenManager: TypedContractMethod<[], [string], "view">;

  pmbLogic: TypedContractMethod<[], [string], "view">;

  revokePBM: TypedContractMethod<[tokenId: BigNumberish], [void], "nonpayable">;

  safeBatchTransferFrom: TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  safeMint: TypedContractMethod<
    [
      receiver: AddressLike,
      tokenId: BigNumberish,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  safeMintBatch: TypedContractMethod<
    [
      receiver: AddressLike,
      tokenIds: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  safeTransferFrom: TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  setApprovalForAll: TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;

  sovToken: TypedContractMethod<[], [string], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [_newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unwrap: TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      tokenId: BigNumberish,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  uri: TypedContractMethod<[tokenId: BigNumberish], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<
    [account: AddressLike, id: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "balanceOfBatch"
  ): TypedContractMethod<
    [accounts: AddressLike[], ids: BigNumberish[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<
    [
      from: AddressLike,
      tokenId: BigNumberish,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "burnBatch"
  ): TypedContractMethod<
    [
      from: AddressLike,
      tokenIds: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "expiry"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialise"
  ): TypedContractMethod<
    [
      _sovToken: AddressLike,
      _expiry: BigNumberish,
      _pbmLogic: AddressLike,
      _pbmTokenManager: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isApprovedForAll"
  ): TypedContractMethod<
    [account: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pbmTokenManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pmbLogic"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "revokePBM"
  ): TypedContractMethod<[tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "safeBatchTransferFrom"
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "safeMint"
  ): TypedContractMethod<
    [
      receiver: AddressLike,
      tokenId: BigNumberish,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "safeMintBatch"
  ): TypedContractMethod<
    [
      receiver: AddressLike,
      tokenIds: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "safeTransferFrom"
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setApprovalForAll"
  ): TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sovToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[_newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unwrap"
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      tokenId: BigNumberish,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "uri"
  ): TypedContractMethod<[tokenId: BigNumberish], [string], "view">;

  getEvent(
    key: "ApprovalForAll"
  ): TypedContractEvent<
    ApprovalForAllEvent.InputTuple,
    ApprovalForAllEvent.OutputTuple,
    ApprovalForAllEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "PBMrevokeWithdraw"
  ): TypedContractEvent<
    PBMrevokeWithdrawEvent.InputTuple,
    PBMrevokeWithdrawEvent.OutputTuple,
    PBMrevokeWithdrawEvent.OutputObject
  >;
  getEvent(
    key: "TokenUnwrapForPBMBurn"
  ): TypedContractEvent<
    TokenUnwrapForPBMBurnEvent.InputTuple,
    TokenUnwrapForPBMBurnEvent.OutputTuple,
    TokenUnwrapForPBMBurnEvent.OutputObject
  >;
  getEvent(
    key: "TokenUnwrapForTarget"
  ): TypedContractEvent<
    TokenUnwrapForTargetEvent.InputTuple,
    TokenUnwrapForTargetEvent.OutputTuple,
    TokenUnwrapForTargetEvent.OutputObject
  >;
  getEvent(
    key: "TokenWrap"
  ): TypedContractEvent<
    TokenWrapEvent.InputTuple,
    TokenWrapEvent.OutputTuple,
    TokenWrapEvent.OutputObject
  >;
  getEvent(
    key: "TransferBatch"
  ): TypedContractEvent<
    TransferBatchEvent.InputTuple,
    TransferBatchEvent.OutputTuple,
    TransferBatchEvent.OutputObject
  >;
  getEvent(
    key: "TransferSingle"
  ): TypedContractEvent<
    TransferSingleEvent.InputTuple,
    TransferSingleEvent.OutputTuple,
    TransferSingleEvent.OutputObject
  >;
  getEvent(
    key: "URI"
  ): TypedContractEvent<
    URIEvent.InputTuple,
    URIEvent.OutputTuple,
    URIEvent.OutputObject
  >;

  filters: {
    "ApprovalForAll(address,address,bool)": TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;
    ApprovalForAll: TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "PBMrevokeWithdraw(address,uint256,address,uint256)": TypedContractEvent<
      PBMrevokeWithdrawEvent.InputTuple,
      PBMrevokeWithdrawEvent.OutputTuple,
      PBMrevokeWithdrawEvent.OutputObject
    >;
    PBMrevokeWithdraw: TypedContractEvent<
      PBMrevokeWithdrawEvent.InputTuple,
      PBMrevokeWithdrawEvent.OutputTuple,
      PBMrevokeWithdrawEvent.OutputObject
    >;

    "TokenUnwrapForPBMBurn(address,address,uint256[],uint256[],address,uint256)": TypedContractEvent<
      TokenUnwrapForPBMBurnEvent.InputTuple,
      TokenUnwrapForPBMBurnEvent.OutputTuple,
      TokenUnwrapForPBMBurnEvent.OutputObject
    >;
    TokenUnwrapForPBMBurn: TypedContractEvent<
      TokenUnwrapForPBMBurnEvent.InputTuple,
      TokenUnwrapForPBMBurnEvent.OutputTuple,
      TokenUnwrapForPBMBurnEvent.OutputObject
    >;

    "TokenUnwrapForTarget(address,address,uint256[],uint256[],address,uint256)": TypedContractEvent<
      TokenUnwrapForTargetEvent.InputTuple,
      TokenUnwrapForTargetEvent.OutputTuple,
      TokenUnwrapForTargetEvent.OutputObject
    >;
    TokenUnwrapForTarget: TypedContractEvent<
      TokenUnwrapForTargetEvent.InputTuple,
      TokenUnwrapForTargetEvent.OutputTuple,
      TokenUnwrapForTargetEvent.OutputObject
    >;

    "TokenWrap(address,uint256[],uint256[],address,uint256)": TypedContractEvent<
      TokenWrapEvent.InputTuple,
      TokenWrapEvent.OutputTuple,
      TokenWrapEvent.OutputObject
    >;
    TokenWrap: TypedContractEvent<
      TokenWrapEvent.InputTuple,
      TokenWrapEvent.OutputTuple,
      TokenWrapEvent.OutputObject
    >;

    "TransferBatch(address,address,address,uint256[],uint256[])": TypedContractEvent<
      TransferBatchEvent.InputTuple,
      TransferBatchEvent.OutputTuple,
      TransferBatchEvent.OutputObject
    >;
    TransferBatch: TypedContractEvent<
      TransferBatchEvent.InputTuple,
      TransferBatchEvent.OutputTuple,
      TransferBatchEvent.OutputObject
    >;

    "TransferSingle(address,address,address,uint256,uint256)": TypedContractEvent<
      TransferSingleEvent.InputTuple,
      TransferSingleEvent.OutputTuple,
      TransferSingleEvent.OutputObject
    >;
    TransferSingle: TypedContractEvent<
      TransferSingleEvent.InputTuple,
      TransferSingleEvent.OutputTuple,
      TransferSingleEvent.OutputObject
    >;

    "URI(string,uint256)": TypedContractEvent<
      URIEvent.InputTuple,
      URIEvent.OutputTuple,
      URIEvent.OutputObject
    >;
    URI: TypedContractEvent<
      URIEvent.InputTuple,
      URIEvent.OutputTuple,
      URIEvent.OutputObject
    >;
  };
}
