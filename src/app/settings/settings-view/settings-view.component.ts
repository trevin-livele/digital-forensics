import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.scss']
})
export class SettingsViewComponent implements OnInit {
  // Define properties for settings
  appName: string = 'My Angular App';
  notificationsEnabled: boolean = true;
  darkModeEnabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Load settings from a service or storage when the component initializes
    // Example: Load settings from local storage
    const storedSettings = localStorage.getItem('appSettings');
    if (storedSettings) {
      const settings = JSON.parse(storedSettings);
      this.appName = settings.appName || this.appName;
      this.notificationsEnabled = settings.notificationsEnabled || this.notificationsEnabled;
      this.darkModeEnabled = settings.darkModeEnabled || this.darkModeEnabled;
    }
  }

  // Save settings when they change
  saveSettings() {
    const settings = {
      appName: this.appName,
      notificationsEnabled: this.notificationsEnabled,
      darkModeEnabled: this.darkModeEnabled
    };
    // Example: Save settings to local storage
    localStorage.setItem('appSettings', JSON.stringify(settings));
  }
}
