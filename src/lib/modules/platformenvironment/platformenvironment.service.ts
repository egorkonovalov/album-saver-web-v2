import { TelegramEnvironment } from "./classes/TelegramEnvironment.class";
import type { PlatformEnvironment } from "./interfaces/PlatformEnvironment.interface";

export class PlatformEnvironmentService {
  getEnvironment(): PlatformEnvironment {
    try {
      let _initData = Telegram.WebApp.initData;
      return new TelegramEnvironment();
    } catch (error: any) {
      console.info(
        `You can use this website only with this telegram bot: ${
          import.meta.env.VITE_API_TG_URL
        }`
      );
      return error;
    }
  }
}

export default new PlatformEnvironmentService();
