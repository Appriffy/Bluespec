export class SettingsModel {
    debugMode: boolean;
    devMode: boolean;
    syncTimer: number;
    enablePush:boolean;
    enableLoading:boolean;
    strictMode:boolean;

      
    constructor() {
        this.debugMode = false;
        this.devMode = false;
        this.syncTimer = 60;
        this.enablePush = false;
        this.enableLoading = false;
        this.strictMode = false;
      }
}