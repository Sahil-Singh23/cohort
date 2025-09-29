import { useState, useEffect } from "react";

export function useFetch(url) {
  const [post, setPost] = useState({});

  async function getPosts() {
    const res = await fetch(url);
    const json = await res.json();

    setPost(json);
  }
  useEffect(() => {
    getPosts();
  }, []);

  return { post };
}
