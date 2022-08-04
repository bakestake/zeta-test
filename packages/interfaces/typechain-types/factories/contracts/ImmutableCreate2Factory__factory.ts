/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ImmutableCreate2Factory,
  ImmutableCreate2FactoryInterface,
} from "../../contracts/ImmutableCreate2Factory";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "deploymentAddress",
        type: "address",
      },
    ],
    name: "hasBeenDeployed",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "salt",
        type: "bytes32",
      },
      {
        name: "initializationCode",
        type: "bytes",
      },
    ],
    name: "safeCreate2",
    outputs: [
      {
        name: "deploymentAddress",
        type: "address",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "salt",
        type: "bytes32",
      },
      {
        name: "initCode",
        type: "bytes",
      },
    ],
    name: "findCreate2Address",
    outputs: [
      {
        name: "deploymentAddress",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "salt",
        type: "bytes32",
      },
      {
        name: "initCodeHash",
        type: "bytes32",
      },
    ],
    name: "findCreate2AddressViaHash",
    outputs: [
      {
        name: "deploymentAddress",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506109d0806100206000396000f3fe60806040526004361061003f5760003560e01c806308508b8f1461004457806364e03087146100ad57806385cf97ab14610170578063a49a7c9014610240575b600080fd5b34801561005057600080fd5b506100936004803603602081101561006757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102c5565b604051808215151515815260200191505060405180910390f35b61012e600480360360408110156100c357600080fd5b8101908080359060200190929190803590602001906401000000008111156100ea57600080fd5b8201836020820111156100fc57600080fd5b8035906020019184600183028401116401000000008311171561011e57600080fd5b909192939192939050505061031a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561017c57600080fd5b506101fe6004803603604081101561019357600080fd5b8101908080359060200190929190803590602001906401000000008111156101ba57600080fd5b8201836020820111156101cc57600080fd5b803590602001918460018302840111640100000000831117156101ee57600080fd5b90919293919293905050506106b5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561024c57600080fd5b506102836004803603604081101561026357600080fd5b8101908080359060200190929190803590602001909291905050506107db565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000833373ffffffffffffffffffffffffffffffffffffffff168160601c73ffffffffffffffffffffffffffffffffffffffff16148061037b5750600060601b6bffffffffffffffffffffffff1916816bffffffffffffffffffffffff1916145b6103d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260458152602001806109116045913960600191505060405180910390fd5b606084848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905060003087836040516020018082805190602001908083835b602083106104545780518252602082019150602081019050602083039250610431565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012060405160200180807fff000000000000000000000000000000000000000000000000000000000000008152506001018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140183815260200182815260200193505050506040516020818303038152906040528051906020012060001c90506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156105c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603f8152602001806108d2603f913960400191505060405180910390fd5b81602001825188818334f5955050508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614610654576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260468152602001806109566046913960600191505060405180910390fd5b60016000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050509392505050565b6000308484846040516020018083838082843780830192505050925050506040516020818303038152906040528051906020012060405160200180807fff000000000000000000000000000000000000000000000000000000000000008152506001018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140183815260200182815260200193505050506040516020818303038152906040528051906020012060001c90506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156107d357600090506107d4565b5b9392505050565b600030838360405160200180807fff000000000000000000000000000000000000000000000000000000000000008152506001018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140183815260200182815260200193505050506040516020818303038152906040528051906020012060001c90506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156108ca57600090506108cb565b5b9291505056fe496e76616c696420636f6e7472616374206372656174696f6e202d20636f6e74726163742068617320616c7265616479206265656e206465706c6f7965642e496e76616c69642073616c74202d206669727374203230206279746573206f66207468652073616c74206d757374206d617463682063616c6c696e6720616464726573732e4661696c656420746f206465706c6f7920636f6e7472616374207573696e672070726f76696465642073616c7420616e6420696e697469616c697a6174696f6e20636f64652ea265627a7a72305820d7c139ad04a8d13985b5e2d67c67413e545e678b3fc89b6305c26e51dee238a764736f6c634300050a0032";

type ImmutableCreate2FactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ImmutableCreate2FactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ImmutableCreate2Factory__factory extends ContractFactory {
  constructor(...args: ImmutableCreate2FactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ImmutableCreate2Factory> {
    return super.deploy(overrides || {}) as Promise<ImmutableCreate2Factory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ImmutableCreate2Factory {
    return super.attach(address) as ImmutableCreate2Factory;
  }
  override connect(signer: Signer): ImmutableCreate2Factory__factory {
    return super.connect(signer) as ImmutableCreate2Factory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ImmutableCreate2FactoryInterface {
    return new utils.Interface(_abi) as ImmutableCreate2FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ImmutableCreate2Factory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ImmutableCreate2Factory;
  }
}
