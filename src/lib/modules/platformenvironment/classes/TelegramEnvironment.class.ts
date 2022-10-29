import type { PlatformEnvironment } from "../interfaces/PlatformEnvironment.interface";
import { QueryStringParser } from "$lib/utils/QueryStringParser.utility";

export class
  TelegramEnvironment implements PlatformEnvironment {
  readonly _webApp = Telegram.WebApp
  readonly _userId: number;
  readonly _platformName: string;
  readonly _colorScheme: string;
  constructor() {
    const data = QueryStringParser.parseString(Telegram.WebApp.initData);
    const user = QueryStringParser.parseJson(data.user);
    this._userId = user.id;
    this._platformName = data.platform;
    this._colorScheme = Telegram.WebApp.colorScheme;
    this.applyColorScheme()
  };

  get userId(): number {
    return this._userId;
  };

  get platformName(): string {
    return this._platformName;
  };

  get colorScheme(): string {
    return this._colorScheme;
  }

  applyColorScheme() {
    if (this._webApp.colorScheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}
