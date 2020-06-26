//start with a noSubmit function that prevents the default of refreshing the page so if you hit the ENTER key, it won't refresh.
function noSubmit(event){
  event.preventDefault();
}

//the rest of the code is inside this function. 
//AKA, if you hit sumbit, it does ALL the things
submit=$("#submit");
//noSubmit for the submit button
submit.click(function(sub){
sub.preventDefault();

//Collecting variables from the DOM
var fname=$("#fname").val();
var lname=$("#lname").val();
var emailSubject = $("#email-subject");
var emailMessage1 = $("#email-message1");
var emailMessage2 = $("#email-message2");
var hidden = $("#hidden");
var emailPopUp = $("#email-pop-up");

//If you want, you can also interpolate the name of the topic or have them input it in the form!
var subject="Demanding Change regarding Black Lives";

//This will include everything you want the body of the email to include
//breaks still dont work, fix here *********************VVVV
var message = `My name is ${fname} ${lname} and I am demanding change for the sake of Black Lives. Decades of prejudice and racism has given these people a disadvantage at the systematic level, and I implore you to make change. Listen to Black voices. Dismantle and rebuild the system.`

var message2 = `${fname} ${lname}`

//---------------------------//


//this looks really scary but I'll break it down
var emailLink=`mailto:abc@example.com?subject=${subject}&body=${message}`;


hidden.css("opacity", 1);

//this will push the subject variable to that empty div called email-subject in the HTML
emailSubject.text(subject);

//this will push the message variable to that empty div called email-message in the HTML
emailMessage1.text(message);
emailMessage2.text(message2);

//this puts that weird long link into the link you'll see into the href attribute of the email-pop-up <a> tag
emailPopUp.attr("href", emailLink);

//this is just to check that your code is working!
console.log(emailMessage);

});
