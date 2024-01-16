import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

const Signer = () => {
  const { primaryWallet } = useDynamicContext();

  const sign = async () => {
    const message = "Hello World";
    const signer = await primaryWallet.connector.getSigner();
    console.log(signer);

    const signature = await signer.signMessage(message);
    console.log(signature);
  };

  return (
    <div>
      <h1>Signer</h1>
      <button onClick={() => sign()}>Sign</button>
    </div>
  );
};

export default Signer;
