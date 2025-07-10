async function getAffirmation() {
    try {
        const response = await fetch('https://www.affirmations.dev/');
        const data= await response.json();
        document.getElementById('affirmation').innerText =data.getaffirmation;
    } catch (error) {
        document.getElementById('affirmation').innerText = 'Could not load affirmation. Please try again.';
        console.error('Error fetching affirmation:',error);
    }
}
//Fetch a new affirmation when on page load
getAffirmation();

//Fetch a new affirmation when the button is clicked
document.getElementById('newAffirmation').addEventListener('click', getAffirmation);

