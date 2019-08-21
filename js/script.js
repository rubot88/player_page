document.getElementById("link").onclick = function () {
    let link = document.getElementById("play_video"),
        url = document.getElementById("url").value,
        icon = document.getElementById('play_icon');
    if (!url) {
        alert('Please set YouTube URL!');
        return;
    }
    link.setAttribute("href", url);
    let enteredUrl = link.getAttribute('href'),
        checkedUrl = isValidUrl(enteredUrl);
    checkedUrl ? icon.classList.add('visible') : alert(`"${enteredUrl}" -  is not a YouTube URL. Please set valid YouTube URL!`)
}

function isValidUrl(url) {
    return url.toLowerCase().includes('youtube');
};