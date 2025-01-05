async function getTab() {
    let queryOptions = { active: true, currentWindow: true };
    let tabs = await chrome.tabs.query(queryOptions);
    chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['content_script.js']})
  }
setInterval(getTab, 6000)