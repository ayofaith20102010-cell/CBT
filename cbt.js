function handlesubmit() {
       const fullname =  document.getElementById("userfullname").value.trim();
       const inputname = document.getElementById("username").value.trim();
       const age = document.getElementById("userage").value.trim();
       const email = document.getElementById("useremail").value.trim();

         document.getElementById("errorfullname").innerHTML = "";
    document.getElementById("errorusername").innerHTML = "";
    document.getElementById("errorage").innerHTML = "";
    document.getElementById("erroremail").innerHTML = "";
    
if (fullname === "" || inputname === "" || age === "" || email === "") {
      if (fullname === "") {
        document.getElementById("errorfullname").innerHTML = "please enter your fullname";
    } 
    if (inputname === "") {
        document.getElementById("errorusername").innerHTML = "please enter your username";
    } 
    if (age === "") {
        document.getElementById("errorage").innerHTML = "please enter your age";
    } 
    if (email === "") {
        document.getElementById("erroremail").innerHTML = "please enter your email";
    }
    return;
}

         document.getElementById("errorfullname").innerHTML = "";
    document.getElementById("errorusername").innerHTML = "";
    document.getElementById("errorage").innerHTML = "";
    document.getElementById("erroremail").innerHTML = "";
  let userdetails =[
    document.getElementById("userfullname").value,
    document.getElementById("username").value,
    document.getElementById("userage").value,
    document.getElementById("useremail").value
  ]
  let allDetails = JSON.parse(localStorage.getItem("userdetails") || "[]");
  allDetails.push(userdetails);
  localStorage.setItem("userdetails", JSON.stringify(allDetails));

  document.getElementById("showfirst").style.display = "block"
  document.getElementById("shownext").style.display = "block"
}

function handlemath(){
    document.getElementById("bios").style.display = "none"
    document.getElementById("math").style.display = "block"
    document.getElementById("maths").style.display = "block"
    document.getElementById("engs").style.display = "none"
     document.getElementById("chems").style.display = "none"
      document.getElementById("phys").style.display = "none"
}
function handleeng(){
    document.getElementById("maths").style.display = "none"
    document.getElementById("math").style.display = "block"
    document.getElementById("engs").style.display = "block"
    document.getElementById("chems").style.display = "none"
      document.getElementById("phys").style.display = "none"
       document.getElementById("bios").style.display = "none"
}
function handlephy(){
    document.getElementById("engs").style.display = "none"
    document.getElementById("math").style.display = "block"
    document.getElementById("phys").style.display = "block"
     document.getElementById("maths").style.display = "none"
        document.getElementById("bios").style.display = "none"
        document.getElementById("chems").style.display = "none"
}
function handlechem(){
    document.getElementById("phys").style.display = "none"
    document.getElementById("math").style.display = "block"
    document.getElementById("chems").style.display = "block"
    document.getElementById("maths").style.display = "none"
        document.getElementById("bios").style.display = "none"
        document.getElementById("engs").style.display = "none"
}
function handlebio(){
    document.getElementById("chems").style.display = "none"
    document.getElementById("math").style.display = "block"
    document.getElementById("bios").style.display = "block"
     document.getElementById("engs").style.display = "none"
         document.getElementById("phys").style.display = "none"
          document.getElementById("maths").style.display = "none"
}




