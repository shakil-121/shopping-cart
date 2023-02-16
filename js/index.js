function countNumber(value){
    const inputvalue=document.getElementById('number-input'); 
   const inputValueString=inputvalue.value; 
   const input=parseInt(inputValueString); 

   let newinputNumber;
if(value==true)
{
    newinputNumber=input+1;
} 
else{
    newinputNumber=input-1;
}

   inputvalue.value=newinputNumber; 

   return newinputNumber;
}

// common function for total section  
function getTotalValueById(elementId)
{
    const totalPrize=document.getElementById(elementId); 
    const totalstringPrize=totalPrize.innerText; 
    const totalprizeValue=parseInt(totalstringPrize); 

    return totalprizeValue;
}

function calculate_amount(){
       // calculate amount 
       const Total_Prize_one=getTotalValueById('Amount-one');
       const Total_Prize=getTotalValueById('Amount');
       const subTotal=Total_Prize+Total_Prize_one;
   
       const subTotalAmount=document.getElementById('subTotal');
       subTotalAmount.innerText=subTotal; 

       const tax_string=(subTotal*0.1).toFixed(2); 
       const tax=parseFloat(tax_string);
       const tax_total=document.getElementById('tax');
       tax_total.innerText=tax;
    
       const finalTotal=tax+subTotal; 
       const TotalWithTax=document.getElementById('total'); 
       TotalWithTax.innerText=finalTotal;
}
// card one 
document.getElementById('btn-plus').addEventListener('click',function(){ 
    const newinputNumber=countNumber(true);  
    

    const total=newinputNumber*1219; 
    const totalAmount=document.getElementById('Amount-one');
    totalAmount.innerText=total; 

    calculate_amount()
     
 }) 
 document.getElementById('btn-mainus').addEventListener('click',function(){ 
    const newinputNumber=countNumber(false); 
     
    const total=newinputNumber*1219; 
    const totalAmount=document.getElementById('Amount-one');
    totalAmount.innerText=total;

    calculate_amount()
 }) 

// card two 
function countNumberOne(value){
    const inputvalue=document.getElementById('input-number-one'); 
   const inputValueString=inputvalue.value; 
   const input=parseInt(inputValueString); 

   let newinputNumber;
if(value==true)
{
    newinputNumber=input+1;
} 
else{
    newinputNumber=input-1;
}

   inputvalue.value=newinputNumber; 

   return newinputNumber;
}





// card two 
document.getElementById('btn-mainus-one').addEventListener('click',function(){ 
    const newinputNumber=countNumberOne(false);

   const totalAmount=newinputNumber*59; 
   const total=document.getElementById('Amount'); 
   total.innerText=totalAmount;

   calculate_amount()
}) 
document.getElementById('btn-plus-one').addEventListener('click',function(){ 
   const newinputNumber= countNumberOne(true);
     
   const totalAmount=newinputNumber*59; 
   const total=document.getElementById('Amount'); 
   total.innerText=totalAmount;

   calculate_amount()
 })  

 document.getElementById('btn-checkOut').addEventListener('click',function(){ 
    alert("Dear Customer, Thanks For Chack Out");
 }) 

 
//  delete card  common function 
document.getElementById('delete_one').addEventListener('click',function(){ 
    const deleteOne=document.getElementById('section_one');
    deleteOne.style.display="none";
})
document.getElementById('delete_two').addEventListener('click',function(){ 
    const deleteOne=document.getElementById('section_two');
    deleteOne.style.display="none";
})