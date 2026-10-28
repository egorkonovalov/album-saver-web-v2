export interface PlatformEnvironment {
  readonly user: { id: number, username: string }
  readonly userId: number;
  readonly platformName: string;
  close(): void;
  showBackButton(): void;
  hideBackButton(): void;
  onBackButtonClick(callback: () => void): void;
  showMainButton(text: string): void;
  hideMainButton(): void;
  setMainButtonText(text: string): void;
  disableMainButton(): void;
  enableMainButton(): void;
  onMainButtonClick(callback: () => void): void;
  offMainButtonClick(callback: () => void): void;
  showAlert(message: string): void;
  envokeHaptic(style: "light" | "medium" | "heavy" | "rigid" | "soft"): void;
}
