import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useAccount } from "wagmi";

const Wagmi = () => {
  const { authToken, isAuthenticated } = useDynamicContext();
  const { address } = useAccount();

  console.log("isAuthenticated", isAuthenticated);
  console.log("authToken", authToken);
  console.log("address", address);

  return <></>;
};

export default Wagmi;
