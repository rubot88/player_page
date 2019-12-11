const setUrl = document.querySelector("#set_url"),
    play = document.getElementById("play_video"),
    urlObj = document.getElementById("url"),
    localUrl = localStorage.getItem('url');
sessionUrl = sessionStorage.getItem('url');

if (sessionUrl) {
    play.href = localUrl;
    play.href = localUrl;
    makeVisible(play);
} else if (localUrl) {
    play.href = localUrl;
    play.href = localUrl;
    makeVisible(play);
}

setUrl.addEventListener('click', setUrlHandler);

function setUrlHandler(e) {
    e.preventDefault();
    url = urlObj.value;
    if (!url) {
        alert('Please set URL!');
        return;
    }
    play.href = url;
    const enteredUrl = play.href,
        checkedUrl = isValidUrl(enteredUrl);
    if (checkedUrl) {
        makeVisible(play);
        setUrl.classList.add('success');
        urlObj.value = ''
        localStorage.setItem('url', url);
        sessionStorage.setItem('url', url);
    } else {
        alert(`"${enteredUrl}" - is not valid URL. Please set valid URL!`);
        play.classList.remove('visible');
        setUrl.classList.remove('success');
    }
}

function isValidUrl(url) {
    return url.toLowerCase().includes('youtube');
};

function makeVisible(play) {
    play.classList.add('visible');
}