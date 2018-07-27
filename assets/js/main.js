function checkSetup() {
  if (!window.firebase || !(firebase.app instanceof Function) || !firebase.app().options) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
        'Make sure you go through the codelab setup instructions and make ' +
        'sure you are running the codelab using `firebase serve`');
  }
}

// Checks that Firebase has been imported.
checkSetup();
console.log(firebase);


//computation

var data = "Great";
 var qrcode = new QRCode("qrcode");

 function makeCode() {

     qrcode.makeCode(data);
 }
 makeCode();
 $("#text").
 on("blur", function() {
     makeCode();
 }).
 on("keydown", function(e) {
     if (e.keyCode == 13) {
         makeCode();
     }
 });