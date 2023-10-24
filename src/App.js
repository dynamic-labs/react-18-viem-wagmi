import {
  DynamicContextProvider,
  DynamicWidget,
  useDynamicContext,
  useEmbeddedWallet,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { useEffect, useState } from "react";
import { SdkViewSectionType, SdkViewType } from "@dynamic-labs/sdk-api";

const WALLET_VIEW = {
  type: SdkViewType.Login,
  sections: [
    {
      type: SdkViewSectionType.Wallet,
    },
  ],
};

const Email_SSO = {
  type: SdkViewType.Login,
  sections: [
    {
      type: SdkViewSectionType.Wallet,
    },
    {
      type: SdkViewSectionType.Separator,
      label: "Or",
    },
    {
      type: SdkViewSectionType.Social,
      defaultItem: "google",
    },
  ],
};

const FLAVORS = {
  Wallets: "wallet",
  EmailSso: "emailSso",
  EmbeddedAndWallets: "embeddedAndWallets",
};

const Demo = () => {
  const [flavor, setFlavor] = useState(FLAVORS.Wallets);
  const { createEmbeddedWallet } = useEmbeddedWallet();
  const { projectSettings, user } = useDynamicContext();

  useEffect(() => {
    console.log(projectSettings);
    if (projectSettings?.sdk) {
      if (flavor === FLAVORS.Wallets) {
        //   projectSettings.sdk.views = [WALLET_VIEW];
      } else if (flavor === FLAVORS.EmailSso) {
        // projectSettings.sdk.views = [Email_SSO];
      }
    }
  }, [flavor]);

  return (
    <div>
      {projectSettings}

      <button type="button" onClick={() => setFlavor(FLAVORS.Wallets)}>
        {" "}
        Wallets only{" "}
      </button>
      <button type="button" onClick={() => setFlavor(FLAVORS.EmailSso)}>
        {" "}
        Email and SSO{" "}
      </button>
      <button
        type="button"
        onClick={() => setFlavor(FLAVORS.EmbeddedAndWallets)}
      >
        {" "}
        Embeded and Wallets{" "}
      </button>

      {user && flavor === FLAVORS.EmbeddedAndWallets && (
        <button type="button" onClick={() => createEmbeddedWallet()}>
          {" "}
          createEmbeddedWallet{" "}
        </button>
      )}
    </div>
  );
};

const App = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "fa3bb3e5-319a-43a2-a6d4-dd1427b84970",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <DynamicWidget />
      {/* <Demo /> */}
    </DynamicContextProvider>
  );
};

export default App;
