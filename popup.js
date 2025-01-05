var done = false

function injectTheScript() {
    console.log("Injecting The Script")
    // Wuery the active tab, which will be only one tab and inject the script in it.
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
         chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['content_script.js']})
         if(tabs[0].url.split("/")[2].split(".")[0] == "linkshortx"){
            done = true
        }
        
    })

    chrome.tabs.query({active: true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, tabs => {
           document.querySelector("#currentwebpage").innerHTML = "Webpage: " + tabs[0].url
    });

    if(!done){
        setTimeout(injectTheScript, 1000)
    }
    
}


document.getElementById('clickactivity').addEventListener('click', injectTheScript)
// setInterval(injectTheScript, 60000)
setTimeout(() => done = true, 60000)
// setTimeout(injectTheScript, 60000)
