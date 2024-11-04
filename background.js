// Set an hourly alarm
chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create("hourlyPopup", { periodInMinutes: 60 });
  });
  
  // Listen for the alarm to trigger
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "hourlyPopup") {
      // Open the extension popup as a new tab or window
      chrome.action.openPopup();
    }
  });