import './style.css'

function getFormData(): void {
  const marketingPreferenceForm = document.getElementById("marketing-preference-form") as HTMLFormElement;
  console.info({ marketingPreferenceForm });

  const email = document.getElementById("email") as HTMLInputElement;
  console.info({ email: email.value });

  const Firstname = document.getElementById("Firstname") as HTMLInputElement;
  const Lastname = document.getElementById("Lastname") as HTMLInputElement;

  const interests = document.getElementById("interest-select") as HTMLSelectElement;
  console.info({ interests: interests.selectedOptions });
  console.info({ interests: interests });
  let interestsHtmlCollection = interests.selectedOptions;
  let commaSeparatedInterests = "";
  if (interestsHtmlCollection.length > 0) {
    for (let i = 0; i < interestsHtmlCollection.length; i++) {
      if (commaSeparatedInterests.trim() !== "") {
        commaSeparatedInterests += ",";
      }
      commaSeparatedInterests += interestsHtmlCollection[i].value;
    }
  }

  const frequency = document.getElementById("frequency-select") as HTMLSelectElement;
  console.info({ frequency: frequency.value });

  const formData = new FormData();
  formData.append('email', email?.value);
  formData.append('Firstname', Firstname?.value);
  formData.append('Lastname', Lastname?.value);
  formData.append('interests', commaSeparatedInterests);
  formData.append('frequency', frequency.value);
  console.info({ formData });

  const response = fetch("api/marketing-preference",
    {
      body: formData,
      method: "post"
    });
  console.info({ response });
  const marketingFormValueParagraphElement = document.getElementById("marketing-form-value") as HTMLPreElement;
  marketingFormValueParagraphElement.innerHTML = JSON.stringify(Object.fromEntries(formData.entries()));
}

const submitButton = document.getElementById("marketing-preference-submit") as HTMLButtonElement;
if (submitButton) {
  submitButton.addEventListener("click", getFormData);
}

export function addToNumbers(a: number, b: number): number {
  return a + b;
}
