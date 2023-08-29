import React from 'react'

export default function About(props) { 


  return (
    <div className='container' style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
             <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}}>
               <h2 className="accordion-header">
                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" 
                 aria-controls="collapseOne" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}}>
                   Welcome to our Text Utility App!
                 </button>
               </h2>
               <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                 <div className="accordion-body">
                    We aim to provide you with a set of helpful tools for manipulating and analyzing text.
                    Whether you need to format your text, count words, or extract specific information,
                    our app has got you covered.
                 </div>
               </div>
             </div>
             <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}}>
               <h2 className="accordion-header">
                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" 
                 aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}}>
                   Our Goal: Empowering You with Text Manipulation and Analysis Tools
                 </button>
               </h2>
               <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                 <div className="accordion-body">
                    Our goal is to make your text-related tasks easier and more efficient. We have designed
                    this app with simplicity and usability in mind, ensuring that you can perform various
                    text operations quickly and effectively.
                 </div>
               </div>
             </div>
             <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}}>
               <h2 className="accordion-header">
                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" 
                 aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}}>
                   Get in Touch with Us
                 </button>
               </h2>
               <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                 <div className="accordion-body">
                 <p>We value your feedback and would love to hear from you. If you have any questions, suggestions, or concerns, please don't hesitate to reach out to us.</p>
                    <p>Feel free to contact our support team by using the following methods:</p>
                    <ul>
                      <li>Email: sunnyOfficial101@gmail.com</li>
                      <li>Phone: +91 7002773474</li>
                      <li>Address: Haflong, Assam, India</li>
                    </ul>
                    <p>We strive to respond to all inquiries as quickly as possible. Your input is essential to help us improve our app and provide you with the best possible text utility experience.</p>
                    <p>Thank you for your interest and support. We look forward to hearing from you!</p>
                 </div>
               </div>
             </div>
           </div>
    </div>
  )
}
