
$(document).ready(function() {
  $('.image-link').magnificPopup({delegate: 'a',type:'image'});
});
const sidebar = document.querySelector(".sidebar-container");

const handleNav = () => {
    console.log("Clicked!");
    sidebar.className="sidebar-container-active";
}
const handleClose = () => {
    sidebar.className="sidebar-container";
}
function openForm() {
    document.getElementById("myForm").style.display = "block";
    
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    
  }
  document.getElementById('myForm').style.display="none"; 
  

window.addEventListener('load', function() {
  setTimeout(function (){
    document.getElementById('myForm').style.display="block";  }, 4000);
})

//Firestore stuff  
  
const db = firebase.firestore()
const db_ref = db.collection("clients")
const phone =/^[6-9]\d{9}$/;

const adddata=()=>{
   
  let x = document.forms['popup']['name'].value
  let y = document.forms['popup']['mobile'].value
  let m = document.forms['popup']['msg'].value
  if(x!=="" && y!=="" &&m!=="")
  {
    if (!phone.test(y)) {
      Swal.fire({
        title: 'Invalid credentials',
        text: "Please enter a valid mobile number",
        icon: 'error',
       
        confirmButtonColor: '#0c2e8a',
        
      })
    }
    else{
      db_ref.add({
        name:x,
        mobile:y,
        msg:m,
        time:firebase.firestore.FieldValue.serverTimestamp(),
      })
      document.forms['popup']['name'].value=""
      document.forms['popup']['mobile'].value=""
      document.forms['popup']['msg'].value=""
      closeForm()
      show_success()
    }
    
  }
  else{
    Swal.fire({
      title: 'Insufficient data',
      text: "Please fill all the fields to send the message",
      icon: 'error',
     
      confirmButtonColor: '#0c2e8a',
      
    })
   
  }
  
  
  }

  function show_success(){
    Swal.fire({
      title: 'Your response has been recorded',
      text: "Our expert will contact you within the next 8 hours",
      icon: 'success',
     
      confirmButtonColor: '#0c2e8a',
      
    })
  }
  

