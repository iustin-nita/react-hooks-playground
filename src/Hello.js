import React from "react";

export const Hello = () => {
  React.useEffect(() => {
    console.log("render");
    return () => {
      console.log("cwunmount");
    };
  }, []);

  return <div>Hello comp</div>;
};
