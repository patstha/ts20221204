import './style.css'

function getFormData(): void {
  const marketingPreferenceForm = document.getElementById("marketing-preference-form") as HTMLFormElement;
  console.info({ marketingPreferenceForm });

  const email = document.getElementById("email") as HTMLInputElement;
  console.info({ email: email.value });

  const interests = document.getElementById("interest-select") as HTMLSelectElement;
  console.info({ interests: interests.selectedOptions });

  const frequency = document.getElementById("frequency-select") as HTMLSelectElement;
  console.info({ frequency: frequency.selectedOptions });

  // Build formData object.
  let formData = new FormData();
  formData.append('email', email?.value);
  formData.append('password', 'John123');

  fetch("api/marketing-preference",
    {
      body: formData,
      method: "post"
    });
}

const submitButton = document.getElementById("marketing-preference-submit") as HTMLButtonElement;
if (submitButton) {
  submitButton.addEventListener("click", getFormData);
}