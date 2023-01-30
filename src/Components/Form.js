import React from 'react'
import './FormStyles.css'
const Form = () => {
  return (
    <div className='Form'>
        <form method="POST" action="mailto: kd14ka4@gmail.com"
          enctype="multipart/form-data" >
            <label for="name">Your Name</label>
            <input type="text" name="name" id="name"/>
            <label for="email">Email</label>
            <input type="email" name="email" id="email"/>
            <label for="subject">Subject</label>
            <input type="text" name="subject" id="subject"/>
            <label for="message">Message</label>
            <textarea rows="6" name="message" placeholder='Type your message here'></textarea>
            <button className="btn" type="submit" name="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form;