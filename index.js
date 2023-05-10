document.getElementById('post-btn').addEventListener('click', function () {
   const boxContainer = document.getElementById('box-container');
   const inputFiled = document.getElementById('input-filed');
   const p = document.createElement('p');

   p.innerText = inputFiled.value;

   boxContainer.appendChild(p);

   inputFiled.value = '';

});