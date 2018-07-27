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


//entrance json
var entrance_ref = firebase.database().ref("entrance/");

var fee = 50;
var section = 'a'; 
$("button").click(function() {
  var rfid = $("#rfid-info").val();
  // console.log(rfid);
  
  
  entrance_ref.push({
    'rfid': rfid,
    'section': section,
    'sno': 1,
    'fee': 45
  }
);
  section = 'b';
})

//database config and read
var ref = firebase.database().ref("entrance/");


var qrcode = new QRCode("qrcode");

function makeCode(data) {

     qrcode.makeCode(data);
 }


var foo = "BS";

/*ref.once('value').then(function(snapshot) {
  console.log(snapshot.val()['user1']);
  section_ref = firebase.database.ref('entrance/' + snapshot.val() + '/section');
  section_ref.once('child_added').then(function(ss) {

  })
  make
  var section = snapshot.val().section;
  console.log(section);
  var fee = snapshot.val().fee;
  console.log(fee);
  makeCode(section + ' ' + fee);
  // ...
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});*/

// ref.orderByChild('rfid').equalTo('jyuvaraj').once('value').then(function(snapshot) {
//   console.log(snapshot.val());
// })

entrance_ref.on('child_added',function(snapshot) {
  // console.log(snapshot);
  var section = snapshot.val().section;
  // console.log(section);
  var fee = snapshot.val().fee;
  // console.log(fee);
  makeCode(section + ' ' + fee);
});



//computation

  // console.log(data);
 console.log("Hello world");

 $("#text").
 on("blur", function() {
     makeCode();
 }).
 on("keydown", function(e) {
     if (e.keyCode == 13) {
         makeCode();
     }
 });

