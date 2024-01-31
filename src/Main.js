import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

const Main = ({ isVisitor, setIsVisitor }) => {
  const { setAuthMode } = useDynamicContext();

  const handleAuthMode = (newIsVisitor) => {
    if (newIsVisitor !== isVisitor) {
      setIsVisitor(newIsVisitor);
      setAuthMode(newIsVisitor ? "connect-only" : "connect-and-sign");
    }
  };

  return (
    <div>
      <button onClick={() => handleAuthMode(true)}>Visitor</button>
      <button onClick={() => handleAuthMode(false)}>User</button>
    </div>
  );
};

export default Main;
