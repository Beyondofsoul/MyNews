import { useEffect, useState } from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetch(url);
        const data = await result.json();
        setData(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);
  return { data, isLoading };
}
