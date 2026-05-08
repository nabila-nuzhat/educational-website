// function showDateTime(){
//     const now = new Date();

//     const showOnPage = now.toLocaleString();

//     document.querySelector("#today").textContent = showOnPage;
//     console.log(document.querySelector("#today").textContent);

// }

// showDateTime();
// setInterval(showDateTime, 1000);

/* for validation contact --------------*/

// name not a number check
function testNumberinName(text) {
    for (char of text) {
        if (!isNaN(char) && char !== " ") {
            return true;
        }
        return false;
    }
}

function formValidation() {
    const name = document.getElementById("fullname").value;
    // console.log(name);
    const email = document.getElementById("exampleInputEmail1").value;
    const ph = document.getElementById("ph").value;
    const pass = document.getElementById("exampleInputPassword1").value;

    // error msg

    const errorName = document.getElementById("errorName");
    const errorEmail = document.getElementById("errorEmail");
    const errorPh = document.getElementById("errorPh");
    const errorPass = document.getElementById("errorPass");

    // initial error content text blank
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorPh.textContent = "";
    errorPass.textContent = "";

    // initially
    let isValid = true;

    if (name === "" || testNumberinName(name)) {
        errorName.textContent = "Please enter valid name";
        // alert("Please enter valid name");
        isValid = false;
    }
    if (email === "" || !email.includes("@") || !email.includes(".")) {
        errorEmail.textContent = "Please enter valid email";
        isValid = false;
    }
    if (ph === "" || isNaN(ph)) {
        errorPh.textContent = "Please enter ph number";
        isValid = false;
    }
    if (pass === "") {
        errorPass.textContent = "Please enter password";
        isValid = false;
    }

    if (isValid) {
        alert("Submitted Successfully");
        // return true;
    } else {
        return false;
    }
}


    function resetErrors() {
      document.getElementById("name-error").textContent     = "";
      document.getElementById("address-error").textContent  = "";
      document.getElementById("email-error").textContent    = "";
      document.getElementById("password-error").textContent = "";
      document.getElementById("subject-error").textContent  = "";
      document.getElementById("agree-error").textContent    = "";
    }



    