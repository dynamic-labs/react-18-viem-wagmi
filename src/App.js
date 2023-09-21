import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react";

import Home from "./components/Home";


const App = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "4e598b41-f388-489b-a0b3-d24064b1d1ed"
      }}
    >
      <DynamicWagmiConnector>
        <DynamicWidget />
        <Home />
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  );
};

export default App;


