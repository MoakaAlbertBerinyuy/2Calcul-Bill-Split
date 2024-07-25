document.getElementById('btn1').addEventListener('click',splitbill)
function splitbill(){
   let amount = document.getElementsById('amount').valueAsNumber;
   let people = document.getElementById('people').valueAsNumber;
   let total = amount / people;
   document.getElementById('result').innerHTML = total;
   
}


