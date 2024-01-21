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
import type { NonPayableOverrides } from "../../../../../common";
import type {
  SignatureVerification,
  SignatureVerificationInterface,
} from "../../../../../contracts/tests/permit2/libraries/SignatureVerification";

const _abi = [
  {
    inputs: [],
    name: "InvalidContractSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSigner",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b3e2153b37a5438dc317c51c52db93440454c9aca08e08bd5f263b686afb94b464736f6c63430008140033";

type SignatureVerificationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SignatureVerificationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SignatureVerification__factory extends ContractFactory {
  constructor(...args: SignatureVerificationConstructorParams) {
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
      SignatureVerification & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): SignatureVerification__factory {
    return super.connect(runner) as SignatureVerification__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignatureVerificationInterface {
    return new Interface(_abi) as SignatureVerificationInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SignatureVerification {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as SignatureVerification;
  }
}