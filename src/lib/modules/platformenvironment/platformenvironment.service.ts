import { type ImpactHapticFeedbackStyle, closeMiniApp, hapticFeedbackNotificationOccurred, miniApp, retrieveLaunchParams, init, backButton, setMainButtonParams, onMainButtonClick, offMainButtonClick, hapticFeedback, isMainButtonVisible, mainButton } from "@telegram-apps/sdk-svelte";

export class PlatformEnvironmentService {

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
    setMainButtonParams({ text })
  }

  onMainButtonClick(callback: (...args: any) => Promise<any> | any) {
    onMainButtonClick(callback)
  }

  showMainButton(text: string) {
    this.setMainButtonText(text)
    setMainButtonParams({ isVisible: true })
  }

  offMainButtonClick(callback: (...args: any) => Promise<any> | any) {
    offMainButtonClick(callback)
  }

  hideMainButton() {
    setMainButtonParams({ isVisible: false })
  }

  envokeHaptic(type: ImpactHapticFeedbackStyle) {
    if (hapticFeedback.impactOccurred.isAvailable()) {
      hapticFeedback.impactOccurred(type);
    }
  }
}

export default new PlatformEnvironmentService();
