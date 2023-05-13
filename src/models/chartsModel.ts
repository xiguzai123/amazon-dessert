import { useState } from "react";

export default () => {

  const [data, setData] = useState(new Array<any>);
  let [imported, setImported] = useState(false);
  return {data, setData, imported, setImported};
};
