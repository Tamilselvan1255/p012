import React from "react";
import { Button } from "reactstrap";
import { GrInstagram } from 'react-icons/gr';
import { BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs';


const Form = () => {
    
    return (
        <div class="container text-center">
            <div class="row">
                <div class="col-md-6">
                    <p style={{ fontFamily:'Segoe Print', color:'#00539CFF', fontSize:'25px'}}><b><center>For callback kindly fill the below form,</center></b></p>
                         <label>Name</label><input placeholder='Kindly enter your name' style={{width:"80%", marginLeft:'30px'}} /><br></br><br></br>
                         <label>Office</label><input placeholder='Kindly enter office/shop name' style={{width:"80%", marginLeft:'30px'}}/><br></br><br></br>
                         <label>Address</label><input placeholder='Kindly enter your address' style={{width:"80%", marginLeft:'15px'}}/><br></br><br></br>
                         <label>Contact</label><input placeholder='Kindly enter your mobile no.' style={{width:"80%", marginLeft:'18px'}}/><br></br><br></br>
                        <Button variant="primary">Submit</Button>
                </div>
                <div class="col-md-6" style={{marginTop:'90px'}}>
                    <center><p style={{fontFamily:'Segoe Print', color:'#00539CFF', fontSize:'25px'}}><b>Follow us on,</b></p></center>
                    <span style={{fontSize:'30px'}}><a href="https://www.instagram.com/" ><GrInstagram /></a></span>
                    <span style={{paddingLeft:'50px', fontSize:'30px'}}><a href="https://www.facebook.com/" ><BsFacebook /></a></span>
                    <span style={{paddingLeft:'50px', fontSize:'30px'}}><a href="https://twitter.com/" ><BsTwitter /></a></span>
                    <span style={{paddingLeft:'50px', fontSize:'30px'}}><a href="https://www.whatsapp.com/" ><BsWhatsapp /></a></span>

                </div>
            </div>
        </div>
      
    )
}

export default Form;