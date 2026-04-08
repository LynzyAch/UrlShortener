const reloadBtn = document.getElementById("reload");
const shortenBtn = document.getElementById("shorten");

shortenBtn.addEventListener("click", shortenUrl);

function shortenUrl() {
    var originalUrl = document.getElementById("realUrl").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);

    let shortenedUrl = document.getElementById("urlTextArea");

    fetch(apiUrl).then(respone => respone.text()).then(data => {
        shortenedUrl.value = data;
    }).catch(error => {
        shortenedUrl.value = "Error : Unable to Shorten URL, Try Again."
    })
}

reloadBtn.addEventListener("click", ()=>{
    location.reload();
})