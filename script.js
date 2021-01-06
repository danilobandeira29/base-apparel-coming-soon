const inputContainerElement = document.querySelector('.input-container');
const iconErrorElement = document.querySelector('.input-container img');
const buttonElement = document.querySelector('.input-container button');
const inputElement = document.querySelector('.input-container input');

buttonElement.addEventListener('click', function () {
  const inputValue = inputElement.value;
  const emailRegex = new RegExp(/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i);
  
  if(emailRegex.test(inputValue)) {
    inputContainerElement.style.borderColor = 'hsl(0, 36%, 70%)';
    inputContainerElement.classList.remove('error');
    iconErrorElement.classList.remove('img-error');
    alert("Thanks for send your email");
  } else {
    inputContainerElement.style.borderColor = 'hsl(0, 93%, 68%)';
    inputContainerElement.classList.add('error');
    iconErrorElement.classList.add('img-error');

  }
})
