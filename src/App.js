import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

import Wagmi from "./Wagmi";
import Main from "./Main";

const App = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "4e598b41-f388-489b-a0b3-d24064b1d1ed",
        walletConnectors: [EthereumWalletConnectors],
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
