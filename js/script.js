document.getElementById("set_url").onclick = function () {
    let play = document.getElementById("play_video"),
        url = document.getElementById("url").value;
    if (!url) {
        alert('Please set URL!');
        return;
    }
    play.setAttribute("href", url);
    let enteredUrl = play.getAttribute('href'),
        checkedUrl = isValidUrl(enteredUrl);
    if (checkedUrl) {
        play.classList.add('visible')
    } else {
        alert(`"${enteredUrl}" - is not valid URL. Please set valid URL!`);
        play.classList.remove('visible');
    }
}

function isValidUrl(url) {
    return url.toLowerCase().includes('youtube');
};

