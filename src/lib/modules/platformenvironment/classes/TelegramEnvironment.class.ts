import type { PlatformEnvironment } from "../interfaces/PlatformEnvironment.interface";

export class
  TelegramEnvironment implements PlatformEnvironment {
  readonly _webApp = Telegram.WebApp;
  readonly _backButton = Telegram.WebApp.BackButton;
  readonly _appData = Telegram.Utils.urlParseQueryString(this._webApp.initData);
  readonly webAppUser = JSON.parse(this._appData.user);
  readonly user = { id: this.webAppUser.id, username: this.webAppUser.username };
  constructor() {
    this.applyColorScheme();
  };

  get userId(): number {
    if (this.user.id) {
      return this.user.id;
    } else {
      throw ("No user id")
    }
  };

  get platformName(): string {
    return this._appData.platform;
  };

  get colorScheme(): string {
    return this._webApp.colorScheme;
  }

  showBackButton(): void {
    this._backButton.show();
  }

  hideBackButton(): void {
    this._backButton.hide();
  }

  onBackButtonClick(callback: Function): void {
    this._backButton.onClick(callback);
  }

  envokeHaptic(style: string): void {
    this._webApp.HapticFeedback.impactOccurred(style);
  }

  close(): void {
    this._webApp.close()
  }

  showMainButton(text: string): void {
    this._webApp.MainButton.text = text;
    this._webApp.MainButton.show();
  }

  setMainButtonText(text: string): void {
    this._webApp.MainButton.setText(text);
  }

  setMainButtonCallback(callback: Function): void {
    this._webApp.MainButton.onClick(callback)
    console.log("callback is set", callback)
  }

  hideMainButton(): void {
    this._webApp.MainButton.hide();
  }

  private applyColorScheme() {
    if (this._webApp.colorScheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}
