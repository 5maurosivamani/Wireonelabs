import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); // Holds the fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, [url]); // Re-fetch data when URL changes

  return { data, loading, error }; // Return data, loading, and error
};

export default useFetch;
