const setUrlForm = document.querySelector("#set_url_form"),

    play = document.getElementById("play_video"),
    urlInput = document.getElementById("url"),
    localUrl = localStorage.getItem('url'),
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
setUrlForm.addEventListener('submit', setUrlHandler);

function setUrlHandler(e) {
    e.preventDefault();
    url = urlInput.value;
    if (!url) {
        alert('Please set URL!');
        return;
    }
    play.href = url;
    const enteredUrl = play.href,
        checkedUrl = isValidUrl(enteredUrl);
    if (checkedUrl) {
        makeVisible(play);
        urlInput.value = '';
        localStorage.setItem('url', url);
        sessionStorage.setItem('url', url);
        play.click();
    } else {
        alert(`"${enteredUrl}" - is not valid URL. Please set valid URL!`);
        play.classList.remove('visible');
        setUrlForm.classList.remove('success');
    }
}

function isValidUrl(url) {
    return url.toLowerCase().includes('youtube');
};

function makeVisible(play) {
    play.classList.add('visible');
}