import {
  type ImpactHapticFeedbackStyle, closeMiniApp,
  hapticFeedbackNotificationOccurred, miniApp, cloudStorage,
  retrieveLaunchParams, init, backButton, hapticFeedback, mainButton, themeParams
} from "@telegram-apps/sdk-svelte";


function requires(feature: { isAvailable: () => boolean }) {

  function decorator(originalMethod: Function) {

    function caller(this: any, ...args: any[]) {
      return originalMethod.call(this, ...args)
    }

    if (feature.isAvailable()) {
      return caller
    }

  }
  return decorator
}


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
    themeParams.mount()
    if (!themeParams.isCssVarsBound()) {
      themeParams.bindCssVars()
    }
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

  // Decorators are not supported by Vite 🤷
  // @requires(hapticFeedback.impactOccurred)
  hideMainButton() {
    mainButton.setParams({ isVisible: false })
  }

  // @requires(hapticFeedback.impactOccurred)
  envokeHaptic(type: ImpactHapticFeedbackStyle) {
    hapticFeedback.impactOccurred(type);
  }

  // @requires(cloudStorage.setItem)
  async addToStorage(key: string, value: string) {
    try {
      return await cloudStorage.setItem(key, value);
    } catch (e) {
      alert(e)
    }
  }

  // @requires(cloudStorage.getKeys)
  async getKeys() {
    return await cloudStorage.getKeys();
  }

  // @requires(cloudStorage.getItem)
  async getItem(key: string) {
    return await cloudStorage.getItem(key)
  }

  async deleteItem(key: string) {
    return await cloudStorage.deleteItem(key)
  }


  async findInArrayItem<T>(key: string, id: string, idField: keyof T) {
    let keyStringValue = await this.getItem(key)
    let keyArrayValue = []
    if (keyStringValue.length) {
      keyArrayValue = JSON.parse(keyStringValue)
    }

    return keyArrayValue.find((x: T) => x[idField] === id)
  }

  async removeFromArrayItem<T>(key: string, id: string, idField: keyof T) {
    let keyStringValue = await this.getItem(key)
    let keyArrayValue = []
    if (keyStringValue.length) {
      keyArrayValue = JSON.parse(keyStringValue)
    }
    let result = []
    result = keyArrayValue.filter((x: T) => x[idField] !== id)
    this.addToStorage(key, JSON.stringify(result))
    return result
  }

  async addToArrayItem(key: string, value: Record<string, any>) {
    let keyStringValue = await this.getItem(key)
    let keyArrayValue = []
    if (keyStringValue.length) {
      keyArrayValue = JSON.parse(keyStringValue)
    }

    let result = []
    result = keyArrayValue.concat(value)
    this.addToStorage(key, JSON.stringify(result))
    return result
  }
}

export default new TelegramService();
