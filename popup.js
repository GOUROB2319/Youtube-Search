document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchBox').value;
    if (query) {
        const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
        chrome.tabs.create({ url: searchUrl });
    }
});
