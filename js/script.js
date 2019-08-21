document.getElementById("link").onclick = function () {
    let link = document.getElementById("play_video"),
        url = document.getElementById("url").value,
        icon = document.getElementById('play_icon');
    if (!url) {
        alert('Please set URL!');
        return;
    }
    link.setAttribute("href", url);
    if (link.getAttribute('href')) {
        icon.classList.add('visible');
    }
}