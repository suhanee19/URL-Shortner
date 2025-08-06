document.getElementById("urlForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const longUrl = document.getElementById("longUrl").value;
  const shortUrlDisplay = document.getElementById("shortUrl");
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  try {
    const response = await fetch("http://localhost:3000/api/url/shortener", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ originalUrl: longUrl })
    });

    const data = await response.json();

    if (response.ok) {
      shortUrlDisplay.href = data.shortId;
      shortUrlDisplay.textContent = data.shortId;
      resultDiv.classList.remove("hidden");
      errorDiv.classList.add("hidden");
    } else {
      resultDiv.classList.add("hidden");
      errorDiv.textContent = data.message || "Something went wrong.";
      errorDiv.classList.remove("hidden");
    }
  } catch (error) {
    resultDiv.classList.add("hidden");
    errorDiv.textContent = "Failed to connect to the server.";
    errorDiv.classList.remove("hidden");
  }
});
