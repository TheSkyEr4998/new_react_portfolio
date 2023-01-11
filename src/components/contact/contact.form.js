import React from "react";
import "./Contact.css";
function submitForm(e){
    e.preventDefault()
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwPeteTqJ1MaFs8vvsFJkRIfkyag-bloOO_yKRUIAd-PciI1BDrCN9wC5cZaXxqU4vP/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(res => {
        msg.innerHTML = 'Be patient, I will connect with you shortly....!'
        setTimeout(function(){
            msg.innerHTML = ''
        }, 5000);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
}
export default function ContactForm() {
    return(
        
        <div className="input__box">
            <div className="contact__meta">
                <p className="hire__text white">I am available for work. Connect with me via phone <strong>+91 7028813613</strong> or email <strong>ghoneniranjan@gmail.com</strong></p>
            </div>
            <form name="submit-to-google-sheet" onSubmit={submitForm}>
                <input type="text" name="Name" placeholder="Enter Your Name" required/>
                <input type="email" name="Email" placeholder="Enter Your Email" required/>
                <div className="col-md-12"><textarea name="Message" rows="6" fixed placeholder="Enter Your Message"></textarea></div>
                <button className="btn contact pointer" type="submit">Submit</button>
            </form>
            <span id="msg"></span>
        </div>
    )
}