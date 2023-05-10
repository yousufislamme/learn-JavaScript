const textInput = document.getElementById('text-input').addEventListener('keyup', function (event) {
   const myButton = document.getElementById('myButton');
   const confirm = event.target.value;
   if (confirm === 'delete') {
      myButton.removeAttribute('disabled');
   } else {
      myButton.setAttribute('disabled', true);
   }

})



document.getElementById('myButton').addEventListener('click', function () {
   const clearInputText = document.getElementById('text-input');
   const removeTitle = document.getElementById('title');

   removeTitle.style.display = 'none';


   clearInputText.value = '';
});