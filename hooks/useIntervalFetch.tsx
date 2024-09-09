import { useState, useEffect, useRef } from "react";

/**
 * 使用指定的 URL 和间隔时间定时发起请求。
 * @param url 请求的 URL。
 * @param interval 请求的间隔时间（毫秒）。
 * 使用方法const { data, error, isLoading } = useIntervalFetch('https://api.example.com/data', 5000);
 */
const useIntervalFetch = (url: string, interval: number) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(); // Initial fetch

    if (interval > 0) {
      intervalRef.current = setInterval(fetchData, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [url, interval]);

  return { data, error, isLoading };
};

export default useIntervalFetch;
