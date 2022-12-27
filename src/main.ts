import './style.css'
import './select.css'
import './pratikchhya.css'
import './mozillavideo.ts'

function getFormData(): void {
  const marketingPreferenceForm = document.getElementById("marketing-preference-form") as HTMLFormElement;
  console.info({ marketingPreferenceForm });

  const email = document.getElementById("email") as HTMLInputElement;
  console.info({ email: email.value });

  const firstName = document.getElementById("firstName") as HTMLInputElement;
  const lastName = document.getElementById("lastName") as HTMLInputElement;

  const interests = document.getElementById("interest-select") as HTMLSelectElement;
  console.info({ interests: interests.selectedOptions });
  console.info({ interests: interests });
  let interestsHtmlCollection = interests.selectedOptions;
  let commaSeparatedInterests = extractOptions(interestsHtmlCollection);

  const frequency = document.getElementById("frequency-select") as HTMLSelectElement;
  console.info({ frequency: frequency.value });

  const formData = new FormData();
  formData.append('email', email?.value);
  formData.append('firstName', firstName?.value);
  formData.append('lastName', lastName?.value);
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
  marketingFormValueParagraphElement.innerHTML = JSON.stringify(Object.fromEntries(formData.entries()), undefined, 2);
}

const submitButton = document.getElementById("marketing-preference-submit") as HTMLButtonElement;
if (submitButton) {
  submitButton.addEventListener("click", getFormData);
}

export function extractOptions(interestsHtmlCollection: HTMLCollectionOf<HTMLOptionElement>): string {
  let commaSeparatedInterests = "";
  if (interestsHtmlCollection.length > 0) {
    for (let i = 0; i < interestsHtmlCollection.length; i++) {
      if (commaSeparatedInterests.trim() !== "") {
        commaSeparatedInterests += ", ";
      }
      commaSeparatedInterests += interestsHtmlCollection[i].value;
    }
  }
  return commaSeparatedInterests;
}
