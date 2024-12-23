import { useEffect, useState } from "react";

function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return <div>useFetch</div>;
}

export default useFetch;
