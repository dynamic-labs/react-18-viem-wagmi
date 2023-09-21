import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react";

const App = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "4e598b41-f388-489b-a0b3-d24064b1d1ed",
      }}
    >
      <DynamicWagmiConnector>
        <DynamicWidget />
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  );
};

export default App;
