
let formData = {
    email: "",
    message: "" 
}


const form = document.querySelector('.feedback-form');
const storageKey = "feedback-form-state";

const fillFormFields = () => {
    try {
      if (localStorage.length === 0) {
        return;
      }
      const formDataFromLS = JSON.parse(localStorage.getItem(storageKey));

  
      if(formDataFromLS){
        formData = formDataFromLS;
      }

      for(const el in formDataFromLS){
        form.elements[el].value = formDataFromLS[el]
      }
    
    } catch (err) {
      console.log(err);
    }
  };
  
  fillFormFields();



const setInforamtionLS = event => {
   const formInf = event.target;
   
   const formValue = formInf.value.trim();
   const formName = formInf.name.trim();

   formData[formName] = formValue;
   localStorage.setItem(storageKey, JSON.stringify(formData));

}

const submit = event => {
  event.preventDefault();

    if(formData.email && formData.message){
    console.log(formData);
    form.reset();
    formData = {
      email: "",
      message: "" 
  }
    localStorage.removeItem(storageKey);
    }else {
      alert('Fill please all fields');

}
}
form.addEventListener('input', setInforamtionLS);
form.addEventListener('submit', submit);



// Всі поля заповнені
// input відслідковуємо