document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm'); // Get the form element
  const modal = document.getElementById('modal'); // Get the modal element
  const certificateContent = document.getElementById('certificateContent'); // Get the element where certificate content will be displayed
  const closeModal = document.querySelector('.close'); // Get the close button inside the modal

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission

      // Get input values
      const studentNameInput = document.getElementById('studentName').value; // Get student name input value
      const personalMessageInput = document.getElementById('personalMessage').value; // Get personal message input value
      const courseNameInput = document.getElementById('courseName').value; // Get course name input value

      if (studentNameInput.trim() === '' || personalMessageInput.trim() === '' || courseNameInput.trim() === '') {
          // Check if any required field is empty
          alert('Please fill in all fields');
          return;
      }

      // Generate certificate content dynamically
      const certificateHTML = `
          <h3>Certificate of Completion</h3>
          <p>This is to certify that ${studentNameInput}</p>
          <p>has successfully completed the course ${courseNameInput}</p>
          <p>with legendary perserverance amd world-class bad-assery for never giving up </p>
          <img id="logo" src="\logo.png" alt="Codespace">
          <p>${personalMessageInput}</p>
      `;

      certificateContent.innerHTML = certificateHTML; // Insert the generated HTML into certificateContent element

      // Display the modal
      modal.style.display = 'block';

      // Clear the form inputs
      cardForm.reset();
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none'; // Hide the modal
  });
});
