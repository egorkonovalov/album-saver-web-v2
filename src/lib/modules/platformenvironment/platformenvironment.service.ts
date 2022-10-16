import { TelegramEnvironment } from "./classes/TelegramEnvironment.class";
import type { PlatformEnvironment } from "./interfaces/PlatformEnvironment.interface";

export class PlatformEnvironmentService {
  static getEnvironment(): PlatformEnvironment {
    try {
      let _initData = Telegram.WebApp.initData
      return new TelegramEnvironment();
    } catch (error: any) {
      console.error(error)
      return error
    }
  }
}
