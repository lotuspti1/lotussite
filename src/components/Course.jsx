import React from 'react';
function Course(){
    return(
        <>
        <div className='container'>
        <div className='row'>
                <div className='col-sm-12 mt-4'>
                    <text style={{fontSize:'40px'}}>Our Courses</text>
                </div>
            </div>
            <hr className='rounded float-left' style={{width:'10%', borderColor:'blue',position:'absolute'}}></hr>
            <div className='row mt-3'>
            <div className='col-sm-6 mt-4'>
                <text className='circle-with-text'>1</text> 
                <text className='courseName'>IT Projects</text>
                <ol className='cOrderList'>
                    <li>IT Projects</li>
                    <li>Programming Csdfslasses</li>
                    <li>Website/Webapp designing</li>
                    <li>Mobile App Development</li>
                </ol>        
            </div>
            <div className='col-sm-6 mt-4'>
                <text className='circle-with-text'>2</text> 
                <text className='courseName'>Accounting Training</text>
                <ol className='cOrderList'>
                    <li>IT Projects</li>
                    <li>Programming Clasfsdfsdsses</li>
                    <li>Website/Webapp designing</li>
                    <li>Mobile App Development</li>
                </ol>        
            </div>
             <div className='col-sm-6 mt-4'>
                <text className='circle-with-text'>3</text> 
                <text className='courseName'>Marketing Training</text>
                <ol className='cOrderList'>
                    <li>Marketing Training</li>
                    <li>Programming Classes</li>
                    <li>Website/Webapp designing</li>
                    <li>Mobile App Development</li>
                </ol>        
            </div>
            </div>
           
            </div>
        </>
    )
}
export default Course;