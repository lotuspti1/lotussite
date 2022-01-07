import React from 'react';
function Teacher(){
return(
    <>
        <div className='container-fluid'>
            <div className='row teacherRow'>
                <div className='col-sm-4'>
                    <img className='img-responsive timage' src="https://image.shutterstock.com/image-vector/male-teacher-standing-front-blackboard-260nw-402654784.jpg" alt='First Slide'></img>
                </div>
                <div className='col-sm-8 teacherDetails'>
                    <text id='tname'>Prakash Chalise</text>
                    <text id='tdetails'>hello hello hello hello hello hello hello hello 
                    hello hello hello hello hello hello hello hello 
                    hello hello hello hello hello hello hello hello hello hello hello hello 
                    hello hello hello hello hello hello hello hello hello  </text>
                </div>
            </div>
            <div className='row teacherRow'>
                <div className='col-sm-4'>
                    <img className='img-responsive timage' src="https://image.shutterstock.com/image-vector/male-teacher-standing-front-blackboard-260nw-402654784.jpg" alt='First Slide'></img>
                </div>
                <div className='col-sm-8 teacherDetails'>
                    <text id='tname'>Prakash Chalise</text>
                    <text id='tdetails'>hello hello hello hello hello 
                    hello hello hello hello hello hello hello 
                    hello hello hello hello hello hello hello hello hello hello hello hello hello 
                    hello hello hello hello hello hello hello </text>
                </div>
            </div>
            <div className='row teacherRow'>
                <div className='col-sm-4'>
                    <img className='img-responsive timage' src="https://image.shutterstock.com/image-vector/male-teacher-standing-front-blackboard-260nw-402654784.jpg" alt='Teacher Image'></img>
                </div>
                <div className='col-sm-8 teacherDetails'>
                    <text id='tname'>Prakash Chalise</text>
                    <text id='tdetails'>hello hello hello hello hello 
                    hello hello hello hello hello hello 
                    hello hello hello hello hello hello hello hello hello hello hello </text>
                </div>
            </div>
        </div>
    </>
)
};
export default Teacher;