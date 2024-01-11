import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

const Main = () => {
  const { setShowLinkNewWalletModal, isAuthenticated } = useDynamicContext();

  return (
    <>
      {isAuthenticated && (
        <button onClick={() => setShowLinkNewWalletModal(true)}>
          Show Link Modal
        </button>
      )}
    </>
  );
};

export default Main;
