import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react";

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: "8b5038f9-171c-480b-9f3c-294d868aeb74",
    }}
  >
    <DynamicWidget />
  </DynamicContextProvider>
);

export default App;
