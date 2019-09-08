import { useEffect, useState } from "react";

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState({ data: null, loading: true });
    // fetch(url).then(x => {
    //   console.log("xx", x);
    //   return x.text().then(y => {
    //     console.log("then");
    //     setState({ data: y, loading: false });
    //     console.log(y);
    //   });
    // });

    const fetchF = async () => {
      setState(state => ({ data: state.data, loading: true }));

      const response = await fetch(url);
      console.log("async await");

      const text = await response.text();
      console.log("async await text", text);
      setState({ data: text, loading: false });
    };
    fetchF(url);
  }, [url, setState]);

  return state;
};
