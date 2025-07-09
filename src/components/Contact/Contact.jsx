import React from 'react'
import "./Contact.css"


const Contact = () => {

  return (
    <div  id="contact">

<form action="https://formspree.io/f/mjvdlgdp" method='POST'>
      <div class="title">
        <h2>CONTACT</h2>
      </div>
      <div class="half">
        <div class="item">
          <label for="name">NAME</label>
          <input type="text" id = "name" placeholder='enter your name' name="name"/>
        </div>
        <div class="item">
          <label for="email">EMAIL</label>
          <input type="text" id = "email" placeholder='enter your email address' name="email"/>
        </div>
      </div>
      <div class="full">
        <label for="message">MESSAGE</label>
        <textarea name="messege" id = "message" placeholder='enter messege here...' ></textarea>
      </div>
      <div class="action">
        <input type="submit" value = "SEND MESSAGE"/>
        <input type="reset" value = "RESET" style={{color:"white"}}/>
      </div>
      <div class="icons">
        {/* <a href="" class = "fa fa-twitter"></a>
        <a href="" class = "fa fa-facebook"></a> */}
        <a href="https://github.com/RuchiAgrawal9186" target="_blank" class="fa fa-github"  id="contact-github"></a>
        <a href="https://www.linkedin.com/in/ruchi-agrawal-6a2585214/" target= "_blank" class = "fa fa-linkedin" id="contact-linkedin"></a>
      </div>
      <div style={{margin:"auto"}}>
        <p id="contact-email">Email : ruchiagrawal9186@gmail.com</p>
        <p id="contact-phone">Contact no : +91 9294969650</p>
      </div>
    </form>
   

    </div>
  );
}

export default Contact



