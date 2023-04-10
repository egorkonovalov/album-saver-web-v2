export interface PlatformEnvironment {
  readonly user: { id: number, username: string }
  readonly userId: number;
  readonly platformName: string;
  close(): void;
  showBackButton(): void;
  hideBackButton(): void;
  onBackButtonClick(callback: Function): void;
  showMainButton(text: string): void;
  hideMainButton(): void;
  setMainButtonText(text: string): void;
  setMainButtonCallback(callback: Function): void;
  envokeHaptic(type: string): void
}
