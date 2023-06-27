import { Cookies } from '$lib/tools/cookies.tool'

class TokensController {
  set tokens(tokens: Record<string, string>) {
    for (const [key, value] of Object.entries(tokens)) {
      Cookies.set(key, value);
    }
  }
  getTokens(names: string[]) {
    let tokens: Record<string, any> = {};
    for (let name in names) {
      const token = Cookies.get(name)
      if (token) tokens[name] = token
    }
    return tokens
  }
  clearTokens(names: string[]) {
    for (let name in names) {
      Cookies.deleteCookie(name)
    }
  }
}

export default new TokensController()
