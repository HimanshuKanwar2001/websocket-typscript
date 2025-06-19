import { useEffect, useState } from "react";

const usePostTitle = () => {
  const [post, setPost] = useState([]);

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setPost(json);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return post.title;
};

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});
  const [loading, setLoading] = useState(true);
  const [prevData, setPrevData] = useState(null); // To store the previous data for comparison

  async function getDetails() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();

    // Compare with previous data
    if (JSON.stringify(json) !== JSON.stringify(prevData)) {
      // Update only if data has changed
      setFinalData(json);
      setPrevData(json);
    }
    setLoading(false);
  }

  useEffect(() => {
    getDetails(); // Initial call to fetch data
  }, [url]);

  useEffect(() => {
    // Create an interval and store its ID
    const intervalId = setInterval(() => {
      getDetails(); // Call getDetails function
    }, 10 * 1000); // 10 seconds

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
    };
  }, [prevData]); // Dependency on previous data ensures re-evaluation if it changes

  return { finalData, loading };
}

export default usePostTitle;
