window.onload = function(){

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input elements 
	// they are initially empty and hidden

	var email = document.getElementById("email");
    var pwd = document.getElementById("pwd");
    var confirmpwd = document.getElementById("confirm");
    
    var span1 = document.createElement("span");
	span1.style.display = "none"; //hide the span element
    email.parentNode.appendChild(span1);


    var span2 = document.createElement("span");
    span1.style.display = "none"; //hide the span element
    pwd.parentNode.appendChild(span2);

    var span3 = document.createElement("span");
    span3.style.display = "none"; //hide the span element
    confirmpwd.parentNode.appendChild(span3);
	

    email.onfocus = function(){
         document.getElementById("email").classList.remove('error');
        span1.textContent="A valid email consists of an email prefix and an email domain with two parts. Eg: <prefix>@<domain_part1>.<domain_part2>";
    	span1.style.display = "contents";
    }

    email.onblur = function(){
       span1.style.display = "none";
    }


    pwd.onfocus = function(){
         document.getElementById("pwd").classList.remove('error');
        span2.textContent="The password field should contain at least six characters, one uppercase letter, one number and one special character (!,@,#,$,%,^,&,*,+).";
        span2.style.display = "contents";
    }

    pwd.onblur = function(){
       span2.style.display = "none";
    }

     confirmpwd.onfocus = function(){
        // document.getElementById("confirmpwd").classList.remove('error');
    }
    confirmpwd.onblur = function(){
       span3.style.display = "none";
    }
    
    var form = document.getElementById("myForm");
    form.onsubmit = function(e){
    	
    e.preventDefault();

    var email_reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;;
    var password_reg = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#^&+])[A-Za-z\d@$!%*#^&+]{6,}$/
   
    var pwdvalue = pwd.value;
    var confirmpwdvalue = confirmpwd.value;

    if (email_reg.test(email.value) == false) {
       email.classList.add("error");
        span1.textContent="Invalid format";
        span1.style.display = "contents";
    }else{

    }


    if(password_reg.test(pwdvalue) == false){
        pwd.classList.add("error");
        span2.textContent="You should enter at least six characters";
        span2.style.display = "contents";

    }

    if(pwdvalue != confirmpwdvalue){
        confirmpwd.classList.add("error");
        span3.textContent="Passwords do not match ";
        span3.style.display = "contents";
    }

    }


}


