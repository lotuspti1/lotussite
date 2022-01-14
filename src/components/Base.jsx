import React from 'react';
import { NavLink } from 'react-router-dom';
function closeNav(){
    if(window.innerWidth<925){
    openNav();
    document.getElementById('check').checked=false;
    }
}
function openNav(){
    if(document.getElementById('check').checked==false){
        document.body.style.overflowY='hidden';
        document.getElementById('crosss').style.display='block';
    }
    else{
        document.body.style.overflowY='visible';
        document.getElementById('crosss').style.display='none';
    }
}
function Base() {
    return (
        <>
            <div className='container-fluid topNav sticky-top'>
                <a className='text-white fa fa-phone pt-1' href='tel:9857023165'> 078590056</a>
                <text className='longAdd text-white'>Shivanagar Colony, Bardaghat</text>
                <div>
                    <a className='sIcon' href='https://www.facebook.com/Lotus-Professional-Training-Institute-102074555187115'><i className='fa fa-facebook'></i></a>
                    <a className='sIcon' href='mailto:lotuspti1@gmail.com'><i className='fa fa-envelope'></i></a>
                </div>
            </div>
            <div className='container-fluid bg-primary'>
                <nav>
                    <div className='row justify-content-between' style={{fontFamily:'cursive'}}>
                        <div className='row'>
                            <a className='logoHref' href="/">
                                <img className='logoimg img-responsive' src={require('../images/logo.png')} alt='logo'></img>
                            </a>
                            <div className='compName ml-1 mt-2 text-white'>
                                <text id='wordLotus'>LOTUS</text><br></br>
                                <text id='remWord'>Professional Training Institute</text>
                            </div>
                        </div>

                        <div>
                            <input type="checkbox" id="check"></input>
                            <label for="check" class="checkbtn">
                                <i onClick={openNav} class="fa fa-bars"></i>
                            </label>
                            <ul id='navvLinks'>
                                <button onClick={closeNav} id='crosss'>&times;</button>
                                <li><NavLink onClick={closeNav} to="/">Home</NavLink></li>
                                <li><NavLink onClick={closeNav} to="/course">Courses</NavLink></li>
                                <li><NavLink onClick={closeNav} to="/staff">Staffs</NavLink></li>
                                <li><NavLink onClick={closeNav} to="/contact">Contact</NavLink></li>
                                <li><NavLink onClick={closeNav} to="/about">About Us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
};
export default Base;