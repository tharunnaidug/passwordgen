//Accessing The Elements
const btn=document.querySelector(".btn")
const input=document.getElementById("input")
const copy=document.querySelector(".fa")
const alertEle=document.querySelector(".alert")

//Adding Event Listeners
btn.addEventListener("click",()=>{
    createPassword()
})
copy.addEventListener("click",()=>{
    copyPass()
    alertEle.classList.remove("active")
    setTimeout(()=>{
 alertEle.classList.add("active")
    },2000)
})

//Genarating Password
const createPassword =()=>{
    const chars="1234567890/*-+qwertyuiop[]asdfghjkl;'zxcvbnm,./`~!@#$%^&*()_.{}:QWERTYUIOPASDFGHJKLZXCVBNM";
    const passLength=14;
    let password="";
    for (let index = 0; index < passLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNum,randomNum+1);
        alertEle.innerText=password+" Copied"
    
    }
    input.value=password;
}

//For Copying passowrd
const copyPass=()=>{
    let password=``;
    input.select();
    input.setSelectionRange(0,9999);
    navigator.clipboard.writeText(input.value)
    alertEle.innerText=password+" Copied"
}