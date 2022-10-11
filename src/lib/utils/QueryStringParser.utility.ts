export class QueryStringParser {
  static parseString(string: string) {
    return JSON.parse(
      '{"' +
      decodeURI(string)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
    );
  }

  static parseJson(string: string) {
    return JSON.parse(decodeURI(string)
      .replace(/%3A/g, '\:')
      .replace(/%2C/g, ','))
  }
}
