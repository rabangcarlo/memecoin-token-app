import "@phantom/browser-sdk";

declare module "@phantom/browser-sdk" {
  interface BrowserSDK {
    isPhantomInstalled(): Promise<boolean>;
  }
}
