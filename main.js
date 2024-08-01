// Get all subscribe buttons
const subscribeBtns = document.querySelectorAll('.subscribe-btn');

// Add event listener to each subscribe button
subscribeBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Get the doctor's information
    const doctorName = btn.parentNode.querySelector('h3').textContent;
    const doctorSpecialty = btn.parentNode.querySelector('p').textContent;
    const doctorPrice = '$100'; // Replace with actual price

    // Create the modal box
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Subscribe to ${doctorName}</h2>
        <p>Specialty: ${doctorSpecialty}</p>
        <p>Price: ${doctorPrice}</p>
        <button class="confirm-subscription-btn">Confirm Subscription</button>
      </div>
    `;

    // Add the modal box to the body
    document.body.appendChild(modal);

    // Get the close button and add event listener
    const closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', () => {
      modal.remove();
    });

    // Get the confirm subscription button and add event listener
    const confirmSubscriptionBtn = modal.querySelector('.confirm-subscription-btn');
    confirmSubscriptionBtn.addEventListener('click', () => {
      // Replace with actual subscription logic
      alert(`You have subscribed to ${doctorName}!`);
      modal.remove();
    });
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
    })
})
