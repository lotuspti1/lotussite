import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import Maps from './Maps';

class Contact extends Component{
    render(){
        function sendEmail(e) {
            e.preventDefault();
            emailjs.sendForm('service_cvzu30a', 'template_cpxs6ae', e.target, 'user_0p76HNivucyckw4nROcV8')
              .then((result) => {
                  alert('Success');
              }, (error) => {
                  alert(e.error);
              });
              e.target.reset();
          }
    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 mt-4'>
                    <text style={{fontSize:'40px',fontFamily:'cursive'}}>Contact Us</text>
                </div>
            </div>
            <hr className='rounded float-left' style={{width:'10%', borderColor:'blue'}}></hr><br></br>
            <div className='row mt-4'>
                <div className='col-sm-8 form1' id='form1'>
                <form onSubmit={sendEmail}>
                    <div className="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" className="form-control" name="fname"></input>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" name="femail"></input>
                    </div>
                    <div className="form-group">
                        <label for="msg">Messages</label>
                        <textarea class="form-control" name="fmessage" rows="2"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                
                <div className='col-sm-4 formm' id='mapp'>
                    <Maps />
                    <div className='mt-3'>
                        <text>
                            <p><i class="fa fa-map-marker mr-2"></i>Shivanagar Colony, Bardaghat, Nawalparasi, Nepal</p>
                            <p><i className='fa fa-phone mr-2'></i><a id='hoverEffect' href='tel:078590056'>078590056</a></p>
                            <p><i className='fa fa-envelope mr-2'></i><a id='hoverEffect' href='mailto:lotuspti1@gmail.com'>lotuspti1@gmail.com</a></p>
                        </text>
                    </div>
                </div>
            </div>
            <div>                
            </div>
            </div>
        
        </>
    )
}
}

export default Contact;