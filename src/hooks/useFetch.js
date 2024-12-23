import { useEffect, useState } from "react";

function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // To prevent state updates if component unmounts

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const json = await response.json();
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
          setLoading(false);
        }
      }
    };
    fetchData();

    // clean up function
    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return { data, loading, error };
}

export default useFetch;
