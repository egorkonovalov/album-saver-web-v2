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
  setMainButtonCallback(callback: () => void): void;
  envokeHaptic(style: "light" | "medium" | "heavy" | "rigid" | "soft"): void
}
