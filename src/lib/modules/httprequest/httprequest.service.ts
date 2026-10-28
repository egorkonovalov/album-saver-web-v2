import tokensController from "$lib/modules/tokens/tokens.controller";
import { TOKEN_NAMES } from "$lib/constants";

type Method = 'GET' | 'POST'
type Data = { params?: Record<string, string>, body?: Record<string, string> }
type RequestOptions = { keepalive?: boolean }
type Fetch = <T>(url: string, data?: Data, options?: RequestOptions) => Promise<T>;
type CreateRequest = (url: string, method: Method, data?: Data, options?: RequestOptions) => Request
type GetRequestUrl = (url: string, data?: Data) => string

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const getRequestUrl: GetRequestUrl = (url, data) => {
  const tokens = tokensController.getTokens(TOKEN_NAMES)
  let urlParams = { ...data?.params }
  if (tokens) urlParams = { ...urlParams, ...tokens, continuation: 'true' }
  return url + '?' + new URLSearchParams(urlParams);
}

const createRequest: CreateRequest = (url, method, data, options) => {
  const requestUrl = getRequestUrl(url, data)
  return new Request(BASE_URL + requestUrl, { method, body: JSON.stringify(data?.body), headers: { "Content-Type": "application/json", "ngrok-skip-browser-warning" : "true" }, keepalive: options?.keepalive })
}

const fetchData = async (request: Request) => {
  const response = await fetch(request)
  if (response) {
    if (response.status === 204) return null
    else if (response.headers.get('content-length') === "0") return {}
    const data = await response.json()
    if (response.ok) {
      for (let token of TOKEN_NAMES) tokensController.tokens = { [token]: data[token] }
      return data
    }
    else throw new Error(data.reason)
  } else throw new Error('Something went wrong')
}

export const get: Fetch = async (url, data, options) => {
  const request = createRequest(url, 'GET', data, options)
  return await fetchData(request)
}

export const post: Fetch = async (url, data, options) => {
  const request = createRequest(url, 'POST', data, options)
  return await fetchData(request)
}
