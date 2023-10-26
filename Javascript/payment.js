const firebaseConfig = {
  apiKey: "AIzaSyBxsw1nzJ6sDxn7mKkKbgDrHTpp3B3OVsw",
  authDomain: "payment-data-b520e.firebaseapp.com",
  databaseURL: "https://payment-data-b520e-default-rtdb.firebaseio.com",
  projectId: "payment-data-b520e",
  storageBucket: "payment-data-b520e.appspot.com",
  messagingSenderId: "333673527841",
  appId: "1:333673527841:web:b91dac53492a2fc5f44160"
};
 
firebase.initializeApp(firebaseConfig);

// reference your database
var paymentFormDB = firebase.database().ref("user");

document.getElementById("paymentForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("email");
  var mobile = getElementVal("mobile");
  var address = getElementVal("address");
  var city = getElementVal("city");
  var mentor = getElementVal("mentor");
  saveMessages(name, emailid, mobile,address,city,mentor);
  
  document.getElementById("paymentForm").reset();
  location.replace("1.html")
  
}

const saveMessages = (name, emailid, mobile,address,city,mentor) => {
  var newpaymentForm = paymentFormDB.push();

  newpaymentForm.set({
    name: name,
    emailid: emailid,
    mobile: mobile,
    address:address,
    city:city,
    mentor:mentor,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};





