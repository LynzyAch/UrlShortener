const reloadBtn = document.getElementById("reload");
const shortenBtn = document.getElementById("shorten");

shortenBtn.addEventListener("click", shortenUrl);

function shortenUrl() {
    var originalUrl = document.getElementById("realUrl").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);

    let shortenedUrl = document.getElementById("urlTextArea");

    fetch(apiUrl).then(response => {
        if (!response.ok) {
            throw new Error("Invalid URL or API error!");
        }
        return response.text();
    }).then(data => {

        if (!data.startsWith("http")) {
            throw new Error("Invalid URL!");
        }

        Swal.fire({
            title: "URL Shortened Success!",
            text: `${data}`,
            icon: "success"
        });
        shortenedUrl.value = data;
        
    }).catch(error => {
        Swal.fire({
            title: "URL Shortened Failed!",
            text: `${error.message}`,
            icon: "warning"
        });
    });
}

reloadBtn.addEventListener("click", ()=>{
    location.reload();
})
