const reloadBtn = document.getElementById("reload");
const shortenBtn = document.getElementById("shorten");

shortenBtn.addEventListener("click", shortenUrl);

function shortenUrl() {
    // get the value of given url from user.
    var originalUrl = document.getElementById("realUrl").value;

    // get the Tinyurl API link
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);

    let shortenedUrl = document.getElementById("urlTextArea");

    fetch(apiUrl).then(response => {
        if (!response.ok) {
            // Random text is not valid.
            throw new Error("Invalid URL or API error!");
        }
        return response.text();
    }).then(data => {

        // if the data starts with 'http', it will cause an Invalid Url.
        if (!data.startsWith("http")) {
            throw new Error("Invalid URL!");
        }

        // when everything is okay, this will be shown.
        Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: "success",
            title: "URL Shortened Success!",
            text: `${data}`,
            background: 'hsl(0, 100%, 96%)',
            color: '#0059ff'
        });

        //diplay the shortened link in the text area.
        shortenedUrl.value = data;
    }).catch(error => {
        // Every error message, the catch will provide. (Error Handling)
        Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: 'warning',
            title: 'URL Shortened Failed!',
            text: `${error.message}`,
            background: 'hsl(0, 100%, 96%)',
            color: '#ff0000'
        });
    });
}

// Reload the page when clicking the Reload Button.
reloadBtn.addEventListener("click", () => {
    location.reload();
}) 
