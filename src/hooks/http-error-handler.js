import { useState, useEffect } from 'react'

export default httpClient => {
  const [error, setError] = useState(null)

  const requestInterceptor = httpClient.interceptors.request.use(req => {
    setError(null)
    return req
  })
  const resInterceptor = httpClient.interceptors.response.use(
    res => res,
    err => {
      setError(err)
    }
  )

  //preventing memory leaks
  useEffect(() => {
    // as unmount
    return () => {
      httpClient.interceptors.request.eject(requestInterceptor)
      httpClient.interceptors.response.eject(resInterceptor)
    }
  }, [])

  const errorCinfirmHandler = () => {
    setError(null)
  }

  return [error, errorCinfirmHandler]
}
