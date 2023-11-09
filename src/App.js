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
import { BloctoEvmWalletConnectors } from "@dynamic-labs/blocto-evm";

const App = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "f0b977d0-b712-49f1-af89-2a24c47674da",
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
        evmNetworks: [
          {
            blockExplorerUrls: ["https://cronoscan.com/"],
            chainId: 25,
            chainName: "Cronos Mainnet",
            iconUrls: [
              "https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4017632223-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FqXsIo4b4WtOTfICyOIxa%252Ficon%252FjttFGLyNrcsRyiavSGOl%252FCGzQIEVX_400x400.png%3Falt%3Dmedia%26token%3D9955a6fa-7d27-48a0-bc9d-534e107668d8",
            ],
            name: "Cronos",
            nativeCurrency: {
              decimals: 18,
              name: "Cronos",
              symbol: "CRO",
            },
            networkId: 25,
            rpcUrls: ["https://evm.cronos.org"],
            vanityName: "Cronos",
          },
        ],
      }}
    >
        <DynamicWidget />      
    </DynamicContextProvider>
  );
};

export default App;
