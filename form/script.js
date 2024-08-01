const form = document.getElementById('mental-health-form');
const submitButton = document.getElementById('submit');
const resultsDiv = document.getElementById('results');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  calculateScores();
});


function calculateScores() {

  let section1Score = 0;
  let section2Score = 0;


  const nervousValue = parseInt(document.getElementById('nervous').value);
  const hopelessValue = parseInt(document.getElementById('hopeless').value);
  const sadValue = parseInt(document.getElementById('sad').value);
  const sleepValue = parseInt(document.getElementById('sleep').value);
  const concentrateValue = parseInt(document.getElementById('concentrate').value);
  const tiredValue = parseInt(document.getElementById('tired').value);


  section1Score = nervousValue + hopelessValue + sadValue;
  section2Score = sleepValue + concentrateValue + tiredValue;


  displayResults(section1Score, section2Score);
}

function displayResults(section1Score, section2Score) {
 
  let message = '';
  if (section1Score >= 9 || section2Score >= 9) {
    message = 'You may be experiencing severe mental health symptoms. Please seek professional help.';
  } else if (section1Score >= 6 || section2Score >= 6) {
    message = 'You may be experiencing moderate mental health symptoms. Consider seeking professional help.';
  } else {
    message = 'You are experiencing mild or no mental health symptoms.';
  }

  resultsDiv.innerHTML = `
    <p>Section 1 Score: ${section1Score}</p>
    <p>Section 2 Score: ${section2Score}</p>
    <p>${message}</p>
    <a href="https://omareldieb.github.io/my_Mental/" id="link"></a>
    <button id="next-button" class = "button">Next</button>
  `;


  document.getElementById('next-button').addEventListener('click', function() {
    const link = document.getElementById('link').href;
    window.location.href = link;
  });
}