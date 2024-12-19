function injectTheScript() {
    // Wuery the active tab, which will be only one tab and inject the script in it.
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['content_script.js']})
    })

    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
        function(tabs){
           document.querySelector("#currentwebpage").innerHTML = "Webpage: " + tabs[0].url
        }
     );
}

document.getElementById('clickactivity').addEventListener('click', injectTheScript)

