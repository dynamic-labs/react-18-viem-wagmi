import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { AlgorandWalletConnectors } from "@dynamic-labs/algorand";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { FlowWalletConnectors } from "@dynamic-labs/flow";
import { StarknetWalletConnectors } from "@dynamic-labs/starknet";
import { CosmosWalletConnectors } from "@dynamic-labs/cosmos";
import { MagicWalletConnectors } from "@dynamic-labs/magic";
import { BloctoEvmWalletConnectors } from "@dynamic-labs/blocto";

const App = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "4e598b41-f388-489b-a0b3-d24064b1d1ed",
        walletConnectors: [
          EthereumWalletConnectors,
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
        <DynamicWidget />
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  );
};

export default App;
