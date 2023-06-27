export class Cookies {
  static get(name: string) {
    let matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    )
    return matches ? decodeURIComponent(matches[1]) : null
  }

  static set(name: string, value: string, options: any = null) {
    options = {
      path: '/'
      //expires: null
    }

    //if (options.expires instanceof Date) {
    //    options.expires = options.expires.toUTCString();
    //}
    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

    for (let optionKey in options) {
      updatedCookie += '; ' + optionKey
      let optionValue = options[optionKey]
      if (optionValue !== true) {
        updatedCookie += '=' + optionValue
      }
    }

    document.cookie = updatedCookie
  }

  static deleteCookie(name: string, options: any = null) {
    options = {
      path: '/'
      //expires: null
    }

    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
