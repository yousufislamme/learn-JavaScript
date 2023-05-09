document.getElementById('mySearch').addEventListener('click', function () {
   const myInput = document.getElementById('myInput');
   const myText = document.getElementById('myText');

   myText.innerHTML = myInput.value;
   myInput.value = '';
});