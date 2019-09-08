import { useEffect, useState, useRef } from "react";

export const useFetch = url => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  // called when the component is going to unmount
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

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
      setTimeout(() => {
        if (isCurrent.current) {
          setState({ data: text, loading: false });
        }
      }, 2000);
    };
    fetchF(url);
  }, [url, setState]);

  return state;
};
