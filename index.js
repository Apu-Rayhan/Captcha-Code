

//! random Captcha code 
const captcha = document.querySelector(".captcha");
reloadBtn = document.querySelector(".reload-btn");
inputField = document.querySelector("input");
checkBtn = document.querySelector(".check-btn");
statusTxt = document.querySelector(".status-txt");

let allCaptcha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9];
// debugger;
function getCaptcha(){
  for(let i = 0; i < 7; i++){ // getting 6 random characters from the array
    let randomChar = allCaptcha[Math.floor(Math.random() * allCaptcha.length)];
    //console.log(randomChar);
    captcha.innerText += `${randomChar}`; // passing 6 random characters inside captcha innerText 
  }
}
getCaptcha();

reloadBtn.addEventListener("click", ()=>{
  captcha.innerText = "";
  getCaptcha();

});

checkBtn.addEventListener("click", (e) =>{
  e.preventDefault();  // preventing button from its default behaviour
  statusTxt.style.display = "block";
  let inputVal = inputField.value.split('').join('');
  // console.log(inputVal);
  if(inputVal == captcha.innerText){ // if captcha matched
    console.log("Captch Matches");
    statusTxt.style.color = "#09f705";
    statusTxt.innerText = "Nice! You Don't Appear To Be A robot";
    setTimeout(()=>{
      statusTxt.style.display = "";
      inputField.value = "";
      captcha.innerText = "";
      getCaptcha();

    },4000);

  }else{
    //console.log("Captcha Not Matched");
    statusTxt.style.color = "white";
    statusTxt.innerText = "Captcha Not Matched . Please Try Again!";
  }

});


