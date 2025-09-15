document.getElementById('vacationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.name.value;
  const email = this.email.value;
  const destination = this.destination.value;
  const message = this.message.value;

  // Simulate submission
  alert(`Thanks, ${name}! We'll send info about ${destination} to ${email}.`);

  // Reset form
  this.reset();
});
