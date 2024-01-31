import { useState } from "react";

import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

import Main from "./Main";
const App = () => {
  const [isVisitor, setIsVisitor] = useState(false);
  return (
    <DynamicContextProvider
      settings={{
        initialAuthenticationMode: isVisitor
          ? "connect-only"
          : "connect-and-sign",
        environmentId: "2762a57b-faa4-41ce-9f16-abff9300e2c9",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <Main isVisitor={isVisitor} setIsVisitor={setIsVisitor} />
      <DynamicWidget />
    </DynamicContextProvider>
  );
};

export default App;
