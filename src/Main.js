import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

const Main = () => {
  const { setShowLinkNewWalletModal } = useDynamicContext();

  return (
    <button onClick={() => setShowLinkNewWalletModal(true)}>
      Show Link Modal
    </button>
  );
};

export default Main;
