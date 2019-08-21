document.getElementById("link").onclick = function() {
    var link = document.getElementById("play-video");
    var url = document.getElementById("url").value;
    console.log(typeof url);
    
    link.setAttribute("href", url);
}