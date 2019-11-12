const setUrl = document.getElementById("set_url");
setUrl.addEventListener('click', setUrlHandler);

function setUrlHandler() {
    const play = document.getElementById("play_video"),
        urlObj = document.getElementById("url");
    url = urlObj.value;
    if (!url) {
        alert('Please set URL!');
        return;
    }
    play.setAttribute("href", url);
    const enteredUrl = play.getAttribute('href'),
        checkedUrl = isValidUrl(enteredUrl);
    if (checkedUrl) {
        play.classList.add('visible');
        setUrl.classList.add('success');
        urlObj.value = '';
    } else {
        alert(`"${enteredUrl}" - is not valid URL. Please set valid URL!`);
        play.classList.remove('visible');
        setUrl.classList.remove('success');

    }
}

function isValidUrl(url) {
    return url.toLowerCase().includes('youtube');
};