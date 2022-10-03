const start = document.getElementById("start")
const complete = document.getElementById("complete")
const form = document.getElementById('myform')
const name = document.getElementById('CardholderName')
const number = document.getElementById('CardNumber')
const month = document.getElementById('CardMonth')
const year = document.getElementById('CardYear')
const cvc = document.getElementById('CardCVC')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validateInputs() === true) {
    return false;
  }
  else showComplete();


});


function showComplete() {
  start.style.display = "none"
  complete.style.display = "block"
  
}



const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
  element.style.outline = "2px solid hsl(0, 100%, 74%)";
  element.style.color = "hsl(0, 100%, 74%)"
  return false;
  
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
  element.style.outline = "1px hsl(246, 25%, 77%) solid";
  element.style.color = "hsl(278, 68%, 11%)"
}


const validateInputs = () => {
  const nameValue = name.value.trim();
  const numberValue = number.value.trim();
  const monthValue = month.value.trim();
  const yearValue = year.value.trim();
  const cvcValue = cvc.value.trim();

  if(nameValue === '') {
    setError(name, "Can't be blank");
    return false;
  } else {
    setSuccess(name);
  }
  
  if(numberValue === '') {
    setError(number, "Can't be blank");
    return false;
  } else {
    setSuccess(number);
  }
  
  if(monthValue === '' || yearValue === '' ) {
    errors1();
    errors2();
    return false;

  } else {
    noerrors1();
    noerrors2();

  }


  if(cvcValue === '') {
    errors3();
    return false;
  } else {
    noerrors3()
  }

  return true;
};

function errors1(){
  field = document.getElementById("CardMonth");
  error = document.getElementById("error2my");
  field.style.outline = "2px solid hsl(0, 100%, 74%)";
  field.classList.add("err");
  field.style.color = "hsl(0, 100%, 74%)";
  error.style.display = "grid";
  return false;
}

function noerrors1(){
  error = "", field = "";
  field = document.getElementById("CardMonth");
  error = document.getElementById("error2my");
  field.style.outline = "1px hsl(246, 25%, 77%) solid";
  field.classList.remove("err");
  field.style.color = "hsl(249, 10%, 26%)";
  error.style.display = "none";
}
function errors2(){
  field = document.getElementById("CardYear");
  error = document.getElementById("error2my");
  field.style.outline = "2px solid hsl(0, 100%, 74%)";
  field.classList.add("err");
  field.style.color = "hsl(0, 100%, 74%)";
  error.style.display = "grid";
  return false;
}

function noerrors2(){
  error = "", field = "";
  field = document.getElementById("CardYear");
  error = document.getElementById("error2my");
  field.style.outline = "1px hsl(246, 25%, 77%) solid";
  field.classList.remove("err");
  field.style.color = "hsl(249, 10%, 26%)";
  error.style.display = "none";
}


function errors3(){
  error = "", field = "";
  field = document.getElementById("CardCVC");
  error = document.getElementById("error2cvc");
  field.style.outline = "2px solid hsl(0, 100%, 74%)";
  field.classList.add("err");
  field.style.color = "hsl(0, 100%, 74%)";
  error.style.display = "block";
  return false;
}

function noerrors3(){
  error = "", field = "";
  field = document.getElementById("CardCVC");
  error = document.getElementById("error2cvc");
  field.style.outline = "1px hsl(246, 25%, 77%) solid";
  field.classList.remove("err");
  field.style.color = "hsl(249, 10%, 26%)";
  error.style.display = "none";
}









function nameFunc() {
    const x = document.getElementById("CardholderName").value;
    document.getElementById("name").innerHTML = x;
}
function cardFunc() {
    const x = document.getElementById("CardNumber").value;
    let spaced = x.match(/.{1,4}/g);
    let newX = spaced.join('&nbsp;');
    document.getElementById("number").innerHTML = newX;
}
function mFunc() {
    const x = document.getElementById("CardMonth").value;
    document.getElementById("month").innerHTML = x;
}
function yFunc() {
    const x = document.getElementById("CardYear").value;
    document.getElementById("year").innerHTML = x;
}
function cvcFunc() {
    const x = document.getElementById("CardCVC").value;
    document.getElementById("CVC").innerHTML = x;
}



