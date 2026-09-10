import { useEffect, useState } from "react";

let cachedCount = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000;

export default function useGithubRepos() {
  const [count, setCount] = useState(cachedCount);

  useEffect(() => {
    const now = Date.now();
    if (cachedCount !== null && now - cacheTimestamp < CACHE_TTL) {
      setCount(cachedCount);
      return;
    }

    fetch("https://api.github.com/users/Karthikeyan-k-u/repos?per_page=100")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((repos) => {
        cachedCount = repos.length;
        cacheTimestamp = Date.now();
        setCount(repos.length);
      })
      .catch(() => {});
  }, []);

  return count;
}
