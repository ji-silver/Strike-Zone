import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;
