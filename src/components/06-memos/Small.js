import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("hola");
  return <small>{value}</small>;
});
