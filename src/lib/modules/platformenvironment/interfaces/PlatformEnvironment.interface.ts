export interface PlatformEnvironment {
  readonly user: { id: number, username: string }
  readonly userId: number;
  readonly platformName: string;
  envokeHaptic(type: string): void
}
