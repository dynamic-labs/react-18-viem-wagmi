import {
  useDynamicContext,
  useDynamicScopes,
} from "@dynamic-labs/sdk-react-core";
import { useEffect } from "react";

const Internal = () => {
  const { user } = useDynamicContext();
  const { userHasScopes, userScopes } = useDynamicScopes();
  useEffect(() => {
    if (user) {
      console.log(userScopes);
      console.log(userHasScopes("scope-1"));
    }
  }, [user]);

  return (
    user && (
      <div>
        userId: {user.userId} is logged in
        <br />
        scopes: {userScopes}
        <br />
        hasAccess: {userHasScopes("scope-1").toString()}
      </div>
    )
  );
};

export default Internal;
