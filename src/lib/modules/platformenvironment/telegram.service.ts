import {
  type ImpactHapticFeedbackStyle, closeMiniApp,
  hapticFeedbackNotificationOccurred, miniApp, cloudStorage,
  retrieveLaunchParams, init, backButton, hapticFeedback, mainButton
} from "@telegram-apps/sdk-svelte";

export class TelegramService {

  closeWith(status: "success") {
    hapticFeedbackNotificationOccurred(status);
    if (miniApp.close.isAvailable()) {
      closeMiniApp();
    }
  }

  getInitData() {

    const { initData } = retrieveLaunchParams();

    if (initData === undefined) {
      throw "Could not retrieve Telegram Launch Parameters"
    }

    return initData
  }

  init(routeId: string | null) {
    init()
    backButton.mount()
    mainButton.mount()
    if (routeId === '/') backButton.hide()
    else backButton.show()
    backButton.onClick(() => window.history.back())
  }

  setMainButtonText(text: string) {
    mainButton.setParams({ text })
  }

  onMainButtonClick(callback: (...args: any) => Promise<any> | any) {
    mainButton.onClick(callback)
  }

  showMainButton(text: string) {
    this.setMainButtonText(text)
    mainButton.setParams({ isVisible: true })
  }

  offMainButtonClick(callback: (...args: any) => Promise<any> | any) {
    mainButton.offClick(callback)
  }

  hideMainButton() {
    mainButton.setParams({ isVisible: false })
  }

  envokeHaptic(type: ImpactHapticFeedbackStyle) {
    if (hapticFeedback.impactOccurred.isAvailable()) {
      hapticFeedback.impactOccurred(type);
    }
  }

  async addToStorage(key: string, value: string) {
    if (cloudStorage.setItem.isAvailable()) {
      await cloudStorage.setItem(key, value);
    }
  }

  async getKeys() {
    if (cloudStorage.getKeys.isAvailable()) {
      return await cloudStorage.getKeys();
    }
  }
}

export default new TelegramService();
