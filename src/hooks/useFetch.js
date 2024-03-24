import { useState, useEffect } from "react"

export function useFetch(fetchingFn, initialValue) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(initialValue)
  const [error, setError] = useState("")

  useEffect(() => {
    setIsLoading(true)
    async function fetchData() {
      try {
        const fetchedData = await fetchingFn()
        setData(fetchedData)
      } catch (err) {
        setError({message: err.message || 'Failed to fetch data.'})
      }
      setIsLoading(false)
    }
    fetchData()
    
  }, [fetchingFn])

  return {
    isLoading,
    data, 
    setData,
    error
  }
}
