import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

import Wagmi from "./Wagmi";

const App = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "2762a57b-faa4-41ce-9f16-abff9300e2c9",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <DynamicWagmiConnector>
        <Wagmi />
        <DynamicWidget />
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  );
};

export default App;
