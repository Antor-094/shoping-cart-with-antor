
let count =0;
document.getElementById('first-card').addEventListener('click',function(){
    count+=1;
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;
    // console.log(productName,productPrice,productQuantity)
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity); 
    displayData(count,productName,productPrice,productQuantity,priceTotal) 
    buttonDisabled('first-card')
    
})

document.getElementById('second-card').addEventListener('click',function(e){
  // console.log(e.target.parentNode.parentNode.children[0].innerText)
  count+=1;
  const productName = e.target.parentNode.parentNode.children[0].innerText;
  const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
  const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
  const priceTotal = parseInt(productPrice) * parseInt(productQuantity)
  // console.log(productName,productPrice,productQuantity,priceTotal)
  displayData(count,productName,productPrice,productQuantity,priceTotal)
  buttonDisabled('second-card');
  
})
document.getElementById('third-card').addEventListener('click',function(){
  count+=1;
  const productName = document.getElementById('third-name').innerText;
  const productPrice = document.getElementById('third-price').innerText;
  const productQuantity = document.getElementById('third-quantity').innerText;
  // console.log(productName,productPrice,productQuantity)
  const priceTotal = parseInt(productPrice) * parseInt(productQuantity); 
  displayData(count,productName,productPrice,productQuantity,priceTotal) 
  buttonDisabled('third-card')
  
})
document.getElementById('fourth-card').addEventListener('click',function(){
  count+=1;
  const productName = document.getElementById('fourth-name').innerText;
  const productPrice = document.getElementById('fourth-price').innerText;
  const productQuantity = document.getElementById('fourth-quantity').innerText;
  // console.log(productName,productPrice,productQuantity)
  const priceTotal = parseInt(productPrice) * parseInt(productQuantity); 
  displayData(count,productName,productPrice,productQuantity,priceTotal) 
  buttonDisabled('fourth-card')
  
})
document.getElementById('fifth-card').addEventListener('click',function(){
  count+=1;
  const productName = document.getElementById('fifth-name').innerText;
  const productPrice = document.getElementById('fifth-price').value;
  
  const productQuantity = document.getElementById('fifth-quantity').value;
  console.log(productPrice,productQuantity)
  if(productPrice===''||productQuantity===''||productPrice<=0||productQuantity<=0){
    return alert('input must be a greater then zero')
  }
  if(isNaN(productPrice)||isNaN(productQuantity)){
    return alert('Input can only be number man')
  }
  const priceInt = parseInt(productPrice)
  const quantityInt = parseInt(productQuantity)
  
  const priceTotal = priceInt * quantityInt;

  displayData(count,productName,productPrice,productQuantity,priceTotal)
  buttonDisabled('fifth-card')
  
})



function displayData(count,productName,productPrice,productQuantity,resultP){
  const container = document.getElementById('table-container')
    const tr = document.createElement("tr");

    tr.innerHTML = `
    
        <td>${count}</td>
        <td>${productName}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${resultP}</td>
    
    `
    container.appendChild(tr)
}


function buttonDisabled(e){
  document.getElementById(e).setAttribute('disabled',true)
}