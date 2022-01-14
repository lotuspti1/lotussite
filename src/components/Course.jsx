import React from 'react';
function Course(){
    return(
        <>
        <div className='container'>
        <div className='row'>
                <div className='col-sm-12 mt-4'>
                    <text style={{fontSize:'40px',fontFamily:'cursive'}}>Our Courses</text>
                </div>
            </div>
            <hr className='rounded float-left' style={{width:'10%', borderColor:'blue',position:'absolute'}}></hr>
            <div className='row mt-3'>
            <div className='col-sm-6 mt-4'>
                <text className='circle-with-text'>1</text> 
                <text className='courseName'>IT Projects</text>
                <ol className='cOrderList'>
                    <li>IT Projects</li>
                    <li>Programming Classes</li>
                    <li>Website/Webapp designing</li>
                    <li>Mobile App Development</li>
                </ol>        
            </div>
            <div className='col-sm-6 mt-4'>
                <text className='circle-with-text'>2</text> 
                <text className='courseName'>Accounting Training</text>
                <ol className='cOrderList'>
                    <li>Software Training (Tally, Swastik, Finpro, Finacle)</li>
                    <li>MS-Office (Excel, Powerpoint, Word)</li>
                    <li>Book Keeping and Filing (Purchase and Sales Laser, Stock Laser)</li>
                    <li>Receipt and Payment Voucher</li>
                </ol>        
            </div>
             <div className='col-sm-6 mt-4'>
                <text className='circle-with-text'>3</text> 
                <text className='courseName'>Marketing Training</text>
                <ol className='cOrderList'>
                    <li>Customer Service</li>
                    <li>Digital Marketing</li>
                    <li>Product Sales</li>
                    <li>Service Sales</li>
                    <li>Insurance and Share Market</li>
                </ol>        
            </div>
            <div className='col-sm-6 mt-4'>
                <text className='circle-with-text'>4</text> 
                <text className='courseName'>Personality Development</text>
                <ol className='cOrderList'>
                    <li>Basic English Grammar</li>
                    <li>English Writing</li>
                    <li>English Speaking</li>
                    <li>Leadership and Communication Skill</li>
                </ol>        
            </div>
            <div className='col-sm-6 mt-4'>
                <text className='circle-with-text'>5</text> 
                <text className='courseName'>Tuition Classes</text>
                <ol className='cOrderList'>
                    <li>BBS Tuition (Math, Account, Finance, Audit and Transcation</li>
                    <li>+2 Management (Math, Account and Finance)</li>
                    <li>+2 Science (Physics, Chemistry and Math)</li>
                    <li>Class 6 to 10 (All Subjects)</li>
                </ol>        
            </div>
            <div className='col-sm-6 mt-4'>
                <text className='circle-with-text'>6</text> 
                <text className='courseName'>Bridge Courses</text>
                <ol className='cOrderList'>
                    <li>Career Counselling</li>
                    <li>Entrance Preparation</li>
                </ol>        
            </div>
            </div>
            </div>
        </>
    )
}
export default Course;