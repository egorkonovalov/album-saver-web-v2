import tokensController from "$lib/modules/tokens/tokens.controller";
import { TOKEN_NAMES } from "$lib/constants";

type Method = 'GET' | 'POST'
type Data = { params?: Record<string, string>, body?: Record<string, string> }
type Fetch = <T>(url: string, data?: Data) => Promise<T>;
type CreateRequest = (url: string, method: Method, data?: Data) => Request

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const createRequest: CreateRequest = (url, method, data) => {
  const tokens = tokensController.getTokens(TOKEN_NAMES)
  const requestUrl = data?.params ?
    `${url}?${new URLSearchParams({
      ...data.params,
      ...tokens,
      continuation: Object.values(tokens).includes('undefined') ? 'true' : 'false'
    })}` : url
  return new Request(BASE_URL + requestUrl, { method, body: JSON.stringify(data?.body) })
}

const fetchData = async (request: Request) => {
  const response = await fetch(request.url, request)
  if (response) {
    if (response.status === 204) return null
    const data = await response.json()
    if (response.ok) {
      for (let token of TOKEN_NAMES) tokensController.tokens = { [token]: data[token] }
      return data
    }
    else throw new Error(data.reason)
  } else throw new Error('Something went wrong')
}

export const get: Fetch = async (url, data) => {
  const request = createRequest(url, 'GET', data)
  return await fetchData(request)
}

export const post: Fetch = async (url, data) => {
  const request = createRequest(url, 'POST', data)
  return await fetchData(request)
}
