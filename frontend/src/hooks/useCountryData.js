import { useEffect, useState } from "react";

const useCountryData = (apiUrl, callBack) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(apiUrl);
        const data = await res.json();
        callBack(data);
      } catch (err) {
        console.log(err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [apiUrl, callBack]);

  return { loading };
};

export default useCountryData;
