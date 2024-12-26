

let formData = {
    email: "",
    message: "" 
}


const form = document.querySelector('.feedback-form');

const fillFormFields = () => {
    try {
      if (localStorage.length === 0) {
        return;
      }
  
      const formDataFromLS = JSON.parse(localStorage.getItem('feedback'));
  
      formData = formDataFromLS;

      for(const el in formDataFromLS){
        form.elements[el].value = formDataFromLS[el]
      }
    
    } catch (err) {
      console.log(err);
    }
  };
  
  fillFormFields();



const formFieldInput = event => {
   const formFielEl = event.target;
   
   const formValue = formFielEl.value;
   const formName = formFielEl.name;

   formData[formName] = formValue;
   localStorage.setItem('feedback', JSON.stringify(formData));

}

const sumbitOn = event => {
    if(formData.email === "" && formData.message){
        alert('Fill please all fields');
    } else if (formData.message === ""){
        alert('Fill please all fields');
    }
    
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem('feedback');
}
form.addEventListener('input', formFieldInput);
form.addEventListener('submit', sumbitOn);



// Всі поля заповнені
// input відслідковуємо