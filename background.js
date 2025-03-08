chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "searchText",
        title: "Search on YouTube", // Updated title
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "searchText") {
        const query = encodeURIComponent(info.selectionText);
        const searchUrl = `https://www.youtube.com/results?search_query=${query}`; // Updated URL for YouTube search
        chrome.tabs.create({ url: searchUrl });
    }
});
