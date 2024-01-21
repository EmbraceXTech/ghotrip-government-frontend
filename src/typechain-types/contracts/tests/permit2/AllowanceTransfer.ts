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
} from "../../../common";

export declare namespace IAllowanceTransfer {
  export type TokenSpenderPairStruct = {
    token: AddressLike;
    spender: AddressLike;
  };

  export type TokenSpenderPairStructOutput = [
    token: string,
    spender: string
  ] & { token: string; spender: string };

  export type PermitDetailsStruct = {
    token: AddressLike;
    amount: BigNumberish;
    expiration: BigNumberish;
    nonce: BigNumberish;
  };

  export type PermitDetailsStructOutput = [
    token: string,
    amount: bigint,
    expiration: bigint,
    nonce: bigint
  ] & { token: string; amount: bigint; expiration: bigint; nonce: bigint };

  export type PermitBatchStruct = {
    details: IAllowanceTransfer.PermitDetailsStruct[];
    spender: AddressLike;
    sigDeadline: BigNumberish;
  };

  export type PermitBatchStructOutput = [
    details: IAllowanceTransfer.PermitDetailsStructOutput[],
    spender: string,
    sigDeadline: bigint
  ] & {
    details: IAllowanceTransfer.PermitDetailsStructOutput[];
    spender: string;
    sigDeadline: bigint;
  };

  export type PermitSingleStruct = {
    details: IAllowanceTransfer.PermitDetailsStruct;
    spender: AddressLike;
    sigDeadline: BigNumberish;
  };

  export type PermitSingleStructOutput = [
    details: IAllowanceTransfer.PermitDetailsStructOutput,
    spender: string,
    sigDeadline: bigint
  ] & {
    details: IAllowanceTransfer.PermitDetailsStructOutput;
    spender: string;
    sigDeadline: bigint;
  };

  export type AllowanceTransferDetailsStruct = {
    from: AddressLike;
    to: AddressLike;
    amount: BigNumberish;
    token: AddressLike;
  };

  export type AllowanceTransferDetailsStructOutput = [
    from: string,
    to: string,
    amount: bigint,
    token: string
  ] & { from: string; to: string; amount: bigint; token: string };
}

export interface AllowanceTransferInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DOMAIN_SEPARATOR"
      | "allowance"
      | "approve"
      | "invalidateNonces"
      | "lockdown"
      | "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)"
      | "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"
      | "transferFrom((address,address,uint160,address)[])"
      | "transferFrom(address,address,uint160,address)"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "Lockdown"
      | "NonceInvalidation"
      | "Permit"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "invalidateNonces",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lockdown",
    values: [IAllowanceTransfer.TokenSpenderPairStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)",
    values: [AddressLike, IAllowanceTransfer.PermitBatchStruct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)",
    values: [AddressLike, IAllowanceTransfer.PermitSingleStruct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom((address,address,uint160,address)[])",
    values: [IAllowanceTransfer.AllowanceTransferDetailsStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom(address,address,uint160,address)",
    values: [AddressLike, AddressLike, BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "invalidateNonces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockdown", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom((address,address,uint160,address)[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom(address,address,uint160,address)",
    data: BytesLike
  ): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    token: AddressLike,
    spender: AddressLike,
    amount: BigNumberish,
    expiration: BigNumberish
  ];
  export type OutputTuple = [
    owner: string,
    token: string,
    spender: string,
    amount: bigint,
    expiration: bigint
  ];
  export interface OutputObject {
    owner: string;
    token: string;
    spender: string;
    amount: bigint;
    expiration: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LockdownEvent {
  export type InputTuple = [
    owner: AddressLike,
    token: AddressLike,
    spender: AddressLike
  ];
  export type OutputTuple = [owner: string, token: string, spender: string];
  export interface OutputObject {
    owner: string;
    token: string;
    spender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NonceInvalidationEvent {
  export type InputTuple = [
    owner: AddressLike,
    token: AddressLike,
    spender: AddressLike,
    newNonce: BigNumberish,
    oldNonce: BigNumberish
  ];
  export type OutputTuple = [
    owner: string,
    token: string,
    spender: string,
    newNonce: bigint,
    oldNonce: bigint
  ];
  export interface OutputObject {
    owner: string;
    token: string;
    spender: string;
    newNonce: bigint;
    oldNonce: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PermitEvent {
  export type InputTuple = [
    owner: AddressLike,
    token: AddressLike,
    spender: AddressLike,
    amount: BigNumberish,
    expiration: BigNumberish,
    nonce: BigNumberish
  ];
  export type OutputTuple = [
    owner: string,
    token: string,
    spender: string,
    amount: bigint,
    expiration: bigint,
    nonce: bigint
  ];
  export interface OutputObject {
    owner: string;
    token: string;
    spender: string;
    amount: bigint;
    expiration: bigint;
    nonce: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AllowanceTransfer extends BaseContract {
  connect(runner?: ContractRunner | null): AllowanceTransfer;
  waitForDeployment(): Promise<this>;

  interface: AllowanceTransferInterface;

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

  DOMAIN_SEPARATOR: TypedContractMethod<[], [string], "view">;

  allowance: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: AddressLike],
    [
      [bigint, bigint, bigint] & {
        amount: bigint;
        expiration: bigint;
        nonce: bigint;
      }
    ],
    "view"
  >;

  approve: TypedContractMethod<
    [
      token: AddressLike,
      spender: AddressLike,
      amount: BigNumberish,
      expiration: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  invalidateNonces: TypedContractMethod<
    [token: AddressLike, spender: AddressLike, newNonce: BigNumberish],
    [void],
    "nonpayable"
  >;

  lockdown: TypedContractMethod<
    [approvals: IAllowanceTransfer.TokenSpenderPairStruct[]],
    [void],
    "nonpayable"
  >;

  "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)": TypedContractMethod<
    [
      owner: AddressLike,
      permitBatch: IAllowanceTransfer.PermitBatchStruct,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)": TypedContractMethod<
    [
      owner: AddressLike,
      permitSingle: IAllowanceTransfer.PermitSingleStruct,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  "transferFrom((address,address,uint160,address)[])": TypedContractMethod<
    [transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[]],
    [void],
    "nonpayable"
  >;

  "transferFrom(address,address,uint160,address)": TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      token: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DOMAIN_SEPARATOR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: AddressLike],
    [
      [bigint, bigint, bigint] & {
        amount: bigint;
        expiration: bigint;
        nonce: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [
      token: AddressLike,
      spender: AddressLike,
      amount: BigNumberish,
      expiration: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "invalidateNonces"
  ): TypedContractMethod<
    [token: AddressLike, spender: AddressLike, newNonce: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "lockdown"
  ): TypedContractMethod<
    [approvals: IAllowanceTransfer.TokenSpenderPairStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)"
  ): TypedContractMethod<
    [
      owner: AddressLike,
      permitBatch: IAllowanceTransfer.PermitBatchStruct,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"
  ): TypedContractMethod<
    [
      owner: AddressLike,
      permitSingle: IAllowanceTransfer.PermitSingleStruct,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom((address,address,uint160,address)[])"
  ): TypedContractMethod<
    [transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom(address,address,uint160,address)"
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      token: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "Lockdown"
  ): TypedContractEvent<
    LockdownEvent.InputTuple,
    LockdownEvent.OutputTuple,
    LockdownEvent.OutputObject
  >;
  getEvent(
    key: "NonceInvalidation"
  ): TypedContractEvent<
    NonceInvalidationEvent.InputTuple,
    NonceInvalidationEvent.OutputTuple,
    NonceInvalidationEvent.OutputObject
  >;
  getEvent(
    key: "Permit"
  ): TypedContractEvent<
    PermitEvent.InputTuple,
    PermitEvent.OutputTuple,
    PermitEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,address,uint160,uint48)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "Lockdown(address,address,address)": TypedContractEvent<
      LockdownEvent.InputTuple,
      LockdownEvent.OutputTuple,
      LockdownEvent.OutputObject
    >;
    Lockdown: TypedContractEvent<
      LockdownEvent.InputTuple,
      LockdownEvent.OutputTuple,
      LockdownEvent.OutputObject
    >;

    "NonceInvalidation(address,address,address,uint48,uint48)": TypedContractEvent<
      NonceInvalidationEvent.InputTuple,
      NonceInvalidationEvent.OutputTuple,
      NonceInvalidationEvent.OutputObject
    >;
    NonceInvalidation: TypedContractEvent<
      NonceInvalidationEvent.InputTuple,
      NonceInvalidationEvent.OutputTuple,
      NonceInvalidationEvent.OutputObject
    >;

    "Permit(address,address,address,uint160,uint48,uint48)": TypedContractEvent<
      PermitEvent.InputTuple,
      PermitEvent.OutputTuple,
      PermitEvent.OutputObject
    >;
    Permit: TypedContractEvent<
      PermitEvent.InputTuple,
      PermitEvent.OutputTuple,
      PermitEvent.OutputObject
    >;
  };
}
