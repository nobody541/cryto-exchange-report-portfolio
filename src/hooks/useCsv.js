import { useEffect, useState } from 'react'
import { csvParse } from 'd3-dsv'

const useCsv = (url, mapRow, enabled = true) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!enabled) {
      setData([])
      setLoading(false)
      setError(null)
      return () => {}
    }

    let isMounted = true
    const controller = new AbortController()

    const load = async () => {
      try {
        setLoading(true)
        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) throw new Error(`Failed to load ${url}`)
        const text = await response.text()
        const rows = csvParse(text, mapRow)
        if (isMounted) {
          setData(rows)
          setError(null)
        }
      } catch (err) {
        if (isMounted && err.name !== 'AbortError') {
          setError(err)
          setData([])
        }
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    load()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [url, mapRow, enabled])

  return { data, loading, error }
}

export default useCsv
