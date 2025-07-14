async function getAffirmation() {
  const affirmationEl = document.getElementById('affirmation');
  affirmationEl.innerText = 'Loading affirmation...';

  try {
    const response = await fetch('https://www.affirmations.dev');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    affirmationEl.innerText = data.affirmation;
  } catch (error) {
    affirmationEl.innerText = 'Could not load affirmation. Please try again.';
    console.error('Error fetching affirmation:', error);
  }
}

// Fetch a new affirmation on page load
getAffirmation();

// Fetch a new affirmation when button is clicked
document.getElementById('newAffirmationBtn').addEventListener('click', getAffirmation);
