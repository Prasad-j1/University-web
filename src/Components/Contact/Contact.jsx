import "./Contact.css"
import React from "react"

import msg_icon from "..//..//assets//msg-icon.png"
import mail_icon from "..//..//assets//mail-icon.png"
import phone_icon from "..//..//assets//phone-icon.png"
import location_icon from "..//..//assets//location-icon.png"
import white_arrow from "..//..//assets//white-arrow.png"


const Contact=()=>{


    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f8075bc6-647b-4d7f-960d-488bf2f95ca2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return(
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={mail_icon} />joshiprasad@gmail.com</li>
                    <li><img src={phone_icon}  />+91 7620XXXXXX</li>
                    <li><img src={location_icon}  />Mumbai, Maharashtra India</li>
                </ul>
            </div>




            <div className="contact-col">

                <form onSubmit={onSubmit}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" name="name" placeholder="Enter you name" required />


                    <label htmlFor="">Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your phone number" required/>


                    <label htmlFor="">Enter Email</label>
                    <input type="eamil" name="email" placeholder="Enter your Email id" required/>


                    
                    <label htmlFor="">Write you message here</label>
                    <textarea rows={6} name="messgae" placeholder="Enter your message here" ></textarea>


                    <button type="submit" className="submit-btn">Submit Now <img src={white_arrow} alt="" /></button>
                </form>


                <span>{result}</span>
            </div>
        </div>
    );
}

export default Contact;
