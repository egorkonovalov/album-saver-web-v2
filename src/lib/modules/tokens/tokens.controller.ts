import { Cookies } from '$lib/tools/cookies.tool'

class TokensController {
  set tokens(tokens: Record<string, string>) {
    for (const [key, value] of Object.entries(tokens)) {
      Cookies.set(key, value);
    }
  }
  getTokens(names: string[]) {
    let tokens: Record<string, any> = {};
    for (let name of names) {
      const token = Cookies.get(name)
      if (token && token !== 'undefined' && token !== 'null') tokens[name] = token
    }
    if (Object.keys(tokens).length === 0 && tokens.constructor === Object) {
      return null
    }
    return tokens
  }
  clearTokens(names: string[]) {
    for (let name of names) {
      Cookies.deleteCookie(name)
    }
  }
}

export default new TokensController()
