// const button = document.querySelector('#my-button');
// button.addEventListener('click', (){
//     //process form here
//     const firstTextInput =  document.querySelector('#first-text-input');
//     console.log(firstTextInput.value);

    //color input
    const color = document.querySelector('.color');
    const colorInput = document.querySelector('color-input');
    // form.style.backgroundColor = colorInput.value;
    // colorInput.value;

    colorInput.addEventListener('input', () => {
        color.style.backgroundcolor = colorInput.value;
    })


    // //checkboxes input
    // const checkboxesElement = document.querySelector('#checkboxes');
    // const checkboxes = checkboxesElement.querySelectorAll('input');
    // for(const checkbox of checkboxes){
    //     console.log(checkbox.checked);

    // }
  
// })