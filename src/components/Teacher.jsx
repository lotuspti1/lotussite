import React from 'react';
function Teacher(){
return(
    <>
        <div className='container-fluid'>
            <div className='row teacherRow'>
                <div className='col-sm-4'>
                    <img className='img-responsive timage' src={require('../images/bishalimg.jpg')} alt='First Slide'></img>
                </div>
                <div className='col-sm-8 teacherDetails'>
                    <text id='tname'>Mr Bishal Tiwari</text>
                    <span style={{fontSize:'20px'}}>
                        <text>2 years of study in Melbourne, Australia</text><br></br>
                        <text>Marketing Manager, English Tutor</text>
                    </span>
                    <text id='tdetails'>
                        Mr Tiwari had lived and studied in Australia. Now from his experience and knowledge, he will
                        be handling the marketing department where he allows students to be creative and improve their
                        English skill and make them ready for the market.
                    </text>
                </div>
            </div>
            <div className='row teacherRow'>
                <div className='col-sm-4'>
                    <img className='img-responsive timage' src={require('../images/sudipsir.jpg')} alt='First Slide'></img>
                </div>
                <div className='col-sm-8 teacherDetails'>
                    <text id='tname'>Mr Sudeep Ghimire</text>
                    <span style={{fontSize:'20px'}}>
                        <text>BBS, CA (running)</text><br></br>
                        <text>+4 years of work experience in Audit firm</text><br></br>
                        <text>Accounting Trainer</text>
                    </span>
                    <text id='tdetails'>
                        Mr Ghimire is a professional trainer who has been working in the field of audit, taxation and
                        accounts for more than four years. He is devoted to transform your theoretical and academic skill
                        into professional skill by tutoring and mentoring you through his area of expertise.
                    </text>
                </div>
            </div>
            <div className='row teacherRow'>
                <div className='col-sm-4'>
                    <img className='img-responsive timage' src={require('../images/prakashimg.jpg')} alt='Teacher Image'></img>
                </div>
                <div className='col-sm-8 teacherDetails'>
                    <text id='tname'>Mr Youvraj Upadhaya</text>
                    <span style={{fontSize:'20px'}}>
                        <text>BBS (Final Year)</text><br></br>
                        <text>Accountant, Supervisor</text>
                    </span>
                    <text id='tdetails'>
                        Mr Upadhaya is a hard working, motivated and service oriented person. He will be handling our 
                        accounts and supervising students and other staffs inside the institute.
                    </text>
                </div>
            </div>
            <div className='row teacherRow'>
                <div className='col-sm-4'>
                    <img className='img-responsive timage' src={require('../images/teacher.png')} alt='Teacher Image'></img>
                </div>
                <div className='col-sm-8 teacherDetails'>
                    <text id='tname'>Mr Amrit Bhusal</text>
                    <span style={{fontSize:'20px'}}>
                        <text>Bachelor in Information Technology</text><br></br>
                        <text>Project Manager, IT Expert</text>
                    </span>
                    <text id='tdetails'>
                       As his expertise tells us about his professionalism in technology and computer. He will
                       be guiding the trainee through wide range of services like programming and codeing,
                       projects and application development.
                    </text>
                </div>
            </div>
            <div className='row teacherRow'>
                <div className='col-sm-4'>
                    <img className='img-responsive timage' src={require('../images/teacher.png')} alt='Teacher Image'></img>
                </div>
                <div className='col-sm-8 teacherDetails'>
                    <text id='tname'>Ms Swikriti Subedi</text>
                    <span style={{fontSize:'20px'}}>
                        <text>Front Desk, Customer Service</text>
                    </span>
                    <text id='tdetails'>
                       Ms Subedi is an energetic, dynamic and motivated lady. She will be helping the students,
                       guardians and other staffs to create friendly work related environment inside the institute.
                    </text>
                </div>
            </div>
        </div>
    </>
)
};
export default Teacher;