import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import Internal from "./Internal";

const App = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "0349f074-5a4a-457d-9db5-566e1e1bc6b8",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <DynamicWagmiConnector>
        <DynamicWidget />
        <Internal />
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  );
};

export default App;
