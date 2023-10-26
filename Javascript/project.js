const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

var options={
  "key":"rzp_test_h9MQfOENPFcr6F",
  "amount":"50000",
  "currency":"INR",
  "name":"Call a Edge",
  "description":"Test transaction",
  "image":"",
  "handler":function(response){
      alert("Payment done Successfully");
  }
};
var rzp1=new Razorpay(options);
document.getElementById('rzp-button').onclick=function(e){
  rzp1.open();
}
