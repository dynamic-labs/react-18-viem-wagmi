import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

import { SdkViewSectionType, SdkViewType } from "@dynamic-labs/sdk-api";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";
import Home from "./Home.tsx";

const App = () => {

  const locale = {
    en: {
      dyn_widget: {
        connect: "Sign Up",
      },
      dyn_collect_user_data: {
        description: "Help us get to know you better!",
        fields: {
          alias: {
            label: "What should we call you?",
          },
        },
      },
    },
  };

  const viewOverrides = {
    type: SdkViewType.Login,
    sections: [
      {
        type: SdkViewSectionType.Email,
      },
    ],
  };

  const cssOverrides = `
  .transaction-confirmation__app-origin-tile {
    display: none
  }
  .transaction-confirmation__rows:not(:first-child) {
    display: none
  }
  `;

  return (
      <div className="app">
        <DynamicContextProvider
            settings={{
              environmentId: "96057dfb-d9fa-45e8-9021-7877032f86d4",
              cssOverrides: cssOverrides,
              overrides: { views: [viewOverrides] },
              walletConnectors: [
                EthereumWalletConnectors,
                ZeroDevSmartWalletConnectors,
              ],
            }}
            locale={locale}
        >
          <DynamicWidget innerButtonComponent={undefined} />
            <Home/>
        </DynamicContextProvider>
      </div>
  );
};

export default App;
