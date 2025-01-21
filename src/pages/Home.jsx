import { useEffect, useState } from "react";
import "./Home.scss";
import Map from "../components/Map/Map";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/constants";

function Home() {
  const [carbonData, setCarbonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = BASE_URL + "regional/";

  console.log({ url });
  const { data, loading: fetchLoading, error: fetchError } = useFetch(url);

  useEffect(() => {
    if (data) {
      try {
        const regions = data.data[0].regions;
        setCarbonData(regions);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  }, [data]); // Run this effect when `data` is updated by useFetch

  if (fetchLoading || loading) return <p>Loading...</p>;
  if (fetchError || error) return <p>Error: {error}</p>;

  return (
    <div className="home">
      {carbonData.length > 0 && <Map carbonData={carbonData} />}
    </div>
  );
}

export default Home;
