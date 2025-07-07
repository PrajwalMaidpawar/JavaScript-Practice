let runAgain = true;
while (runAgain) {
    let age = prompt("Enter your age");
    age = parseInt(age);
    if (age >= 18) {
        alert("Get the License Out !!! , Your are eligible to Drive");
    }
    else if (age <=0 ){
        console.error("Please enter a valid age");
        break;
    }
    else {
        alert("You are not eligible to Drive, You are under 18");
    }
    runAgain = confirm("Do you want to insert age again?");
}