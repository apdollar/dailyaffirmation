async function getAffirmation() {
  const affirmationEl = document.getElementById("affirmation");
  affirmationEl.innerText = "Loading affirmation...";

  const proxy = "https://api.allorigins.win/raw?url=";
  const apiURL = "https://www.affirmations.dev";

  try {
    const response = await fetch(proxy + encodeURIComponent(apiURL), {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    affirmationEl.innerHTML = data.affirmation;
  } catch (error) {
    affirmationEl.innerText = "Could not load affirmation. Please try again.";
    console.error("Error fetching affirmation:", error);
  }
}

getAffirmation();

// Fetch a new affirmation when button is clicked
document
  .getElementById("newAffirmationBtn")
  .addEventListener("click", getAffirmation);
