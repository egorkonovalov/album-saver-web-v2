import { TelegramEnvironment } from "./classes/TelegramEnvironment.class";
import type { PlatformEnvironment } from "./interfaces/PlatformEnvironment.interface";

export class PlatformEnvironmentService {
  static getEnvironment(): PlatformEnvironment {
    try {
      let _initData = Telegram.WebApp.initData
      return new TelegramEnvironment();
    } catch (error: any) {
      console.info("You can use this website only with this telegram bot: https://t.me/album_saver_web_tes_bot")
      return error
    }
  }
}
