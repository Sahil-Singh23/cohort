import { useState, useEffect } from "react";

export function useFetch(url) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  async function getPosts() {
    setLoading(true);
    const res = await fetch(url);
    const json = await res.json();

    setPost(json);
    setLoading(false);
  }
  useEffect(() => {
    getPosts();
  }, [url]);

  useEffect(() => {
    const refecth = setInterval(getPosts, 10 * 1000);
    return () => {
      clearInterval(refecth);
    };
  }, [url]);

  return { post, loading };
}
