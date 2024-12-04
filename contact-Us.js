document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    fetch("/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(message => {
        document.getElementById("responseMessage").innerText = message;
    })
    .catch(error => console.error("Error:", error));
});
