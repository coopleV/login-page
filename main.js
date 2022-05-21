//body
document.body.style.maxWidth = "1440px";
document.body.style.margin = "auto";

//main
let main = document.createElement('main');
document.body.appendChild(main);
main.style.backgroundImage = "url('./kofe.jpg')";
main.style.backgroundPosition = "center";
main.style.backgroundSize = "cover";
main.style.height = "600px";
main.style.padding = "70px 500px";
main.style.boxSizing = "border-box";

//back(div1) css
let div1 = document.createElement('div');
main.appendChild(div1);
div1.innerText = "Login Form";
div1.style.backgroundImage = "url('./fon.jpg')";
div1.style.width = "320px";
div1.style.height = "500px";
div1.style.color = "white";
div1.style.boxSizing = "border-box";
div1.style.fontSize = "30px";
div1.style.textAlign = "center";
div1.style.paddingTop = "40px";
div1.style.fontWeight = "600px";
div1.style.boxShadow = "0px 0px 5px black";
div1.style.borderRadius = "30px";

//form1
let form1 = document.createElement('form');
div1.appendChild(form1);

//input 1
let input1 = document.createElement('input');
form1.appendChild(input1);
input1.placeholder = "Email or Phone";
input1.type = "email";
input1.style.marginTop = "30px";
input1.style.padding = "10px";
input1.style.fontSize = "16px";
input1.style.border = "1px solid gray";
input1.style.outline = "none";
input1.style.margin = "10px 0";
input1.style.boxSizing = "border-box";
input1.style.paddingRight = "50px";

//input 2
let input2 = document.createElement('input');
form1.appendChild(input2);
input2.placeholder = "Password";
input2.type = "password";
input2.style.padding = "10px";
input2.style.fontSize = "16px";
input2.style.border = "1px solid gray";
input2.style.outline = "none";
input2.style.margin = "10px 0";
input2.style.boxSizing = "border-box";
input2.style.paddingRight = "50px";

//a1
let a1 = document.createElement('a');
form1.appendChild(a1);
a1.href = "#";
a1.text = "Forgot Password?";
a1.style.display = "block";
a1.style.fontSize = "18px";
a1.style.textAlign = "left";
a1.style.margin = "10px 35px";
a1.style.textDecoration = "none";
a1.style.color = "white";

//button1
let button1 = document.getElementById("button1");
form1.appendChild(button1);
// button1.type="button";
// button1.value="Login";
button1.style.backgroundColor = "#4921FF";
button1.style.padding = "10px 77px";
button1.style.fontSize = "18px";
// button1.style.border = "none";
button1.style.outline = "none";
button1.style.boxShadow = "0px 0xp 5px gray";
button1.style.color = "white";
button1.style.fontWeight = "600px";
button1.style.borderRadius = '15px';

//div2
let div2 = document.createElement('div');
form1.appendChild(div2);
div2.textContent = "Or login with";
div2.fontSize = 'small';

//a3
let a3 = document.createElement('a');
form1.appendChild(a3);
a3.href = "#";
a3.text = "Facebook";
a3.style.backgroundColor = "royalblue";
a3.style.display = "inline-block";
a3.style.textDecoration = "none";
a3.style.color = "white";
a3.style.padding = "7px 17px";
a3.style.boxShadow = "0px 0px 10px gray";
a3.style.margin = "0px 5px 10px";
a3.style.borderRadius = '10px';

//a4
let a4 = document.createElement('a');
form1.appendChild(a4);
a4.href = "#";
a4.text = "Instagram";
a4.style.backgroundColor = 'orange';
a4.style.color = 'white';
a4.style.borderRadius = '70px';
a4.style.padding = "7px 17px";

//div3
let div3 = document.createElement('div');
form1.appendChild(div3);
div3.innerText = "Don't have account?";

//a5
let a5 = document.createElement('a');
div3.appendChild(a5);
a5.href = "#";
a5.text = "Sign-up Now";
a5.style.color = "navy";
a5.style.display = "inline-block";
a5.style.textDecoration = "none";
// function validateForm() {
//         var un = document.loginform.usr.value;
//         var pw = document.loginform.pword.value;
//         var username = "username"; 
//         var password = "password";
//         if ((un == username) && (pw == password)) {
//             window.location = "./index.html";
//             return false;
//         }
//         else {
//             alert ("Login was unsuccessful, please check your username and password");
//         }
//       }