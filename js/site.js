document.getElementById('submit').addEventListener('click', function(event) {
  const email = document.getElementById('email').value;
  const birthday = document.getElementById('birthday').value;
  const ssn = document.getElementById('ssn').value;
  const address = document.getElementById('address').value;
  const ageVerified = document.getElementById('age-verification').checked;

  if (!email) {
    alert('Please enter your email.');
    event.preventDefault();
    return;
  }

  if (!birthday) {
    alert('Please enter your birthday.');
    event.preventDefault();
    return;
  }

  if (!ssn.match(/^\d{3}-\d{2}-\d{4}$/)) {
    alert('Please enter a valid SSN (format: 123-45-6789).');
    event.preventDefault();
    return;
  }

  if (!address) {
    alert('Please enter your address.');
    event.preventDefault();
    return;
  }

  if (!ageVerified) {
    alert('Please confirm that you are over 18.');
    event.preventDefault();
    return;
  }

  alert('Thanks you for your data Sucker!');
});
