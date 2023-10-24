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

const EMAIL_SSO_VIEW = {
  type: SdkViewType.Login,
  sections: [
    {
      type: SdkViewSectionType.Email,
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

const Demo = ({ setViewOverrides }) => {
  const [flavor, setFlavor] = useState(FLAVORS.Wallets);
  const { createEmbeddedWallet } = useEmbeddedWallet();
  const { user } = useDynamicContext();

  useEffect(() => {
    if (flavor === FLAVORS.Wallets) {
      setViewOverrides([WALLET_VIEW]);
    } else if (flavor === FLAVORS.EmailSso) {
      setViewOverrides([EMAIL_SSO_VIEW]);
    } else {
      setViewOverrides([]);
    }
  
  }, [flavor]);

  return (
    <div>
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
  const [viewOverrides, setViewOverrides] = useState([]);
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "fa3bb3e5-319a-43a2-a6d4-dd1427b84970",
        walletConnectors: [EthereumWalletConnectors],
        overrides: { views: viewOverrides },
      }}
    >
      <DynamicWidget />
      <Demo setViewOverrides={setViewOverrides} />
    </DynamicContextProvider>
  );
};

export default App;
