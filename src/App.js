import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";
import { AlgorandWalletConnectors } from "@dynamic-labs/algorand";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { FlowWalletConnectors } from "@dynamic-labs/flow";
import { StarknetWalletConnectors } from "@dynamic-labs/starknet";
import { CosmosWalletConnectors } from "@dynamic-labs/cosmos";
import { MagicWalletConnectors } from "@dynamic-labs/magic";
import { BloctoEvmWalletConnectors } from "@dynamic-labs/blocto-evm";

import Wagmi from "./Wagmi";
import Main from "./Main";

const App = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "2762a57b-faa4-41ce-9f16-abff9300e2c9",
        walletConnectors: [
          EthereumWalletConnectors,
          ZeroDevSmartWalletConnectors,
          AlgorandWalletConnectors,
          SolanaWalletConnectors,
          FlowWalletConnectors,
          StarknetWalletConnectors,
          CosmosWalletConnectors,
          MagicWalletConnectors,
          BloctoEvmWalletConnectors,
        ],
      }}
    >
      <DynamicWagmiConnector>
        <Wagmi />
        <DynamicWidget />
        <Main />
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  );
};

export default App;
