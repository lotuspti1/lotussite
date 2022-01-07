import React from 'react';

function About(){
    return(
        <>
        <div className='container-fluid' style={{height:'80%'}}>
            <div className='row pt-3'>
                <div className='col-sm-6 contentAbt'>
                    <text id='aboutUsHead'>About Us</text>
                    <text id='aboutUsBody'>
                        <p>
                            We are a team of professionals who are determined to produce market ready manpower
                            and allow them to choose over hundred of companies for work.
                        </p>
                        <p>
                            Now, we do that by training our students and trainee, providing market knowledge and
                            making them ready for job by professionals who are already excelling in their profession.
                            We provide all the materials, guide them through their problems and difficulties and compare
                            it with market, financial companies or any workplace specified according to their profession.
                        </p>
                        <p>
                            Here at Lotus, student can always expect to be professional because we train each of the individual
                            all the way from basic knowledge to strategic understanding. No student can be uplifted to advance
                            course unless they completely pass the basic course. So, if you come to Lotus, you do not have to worry
                            about what you will learn, how much you will earn and will your learning assist you to get your dream
                            by because that is what we do to our students.
                        </p>
                    </text>
                </div>
                <div className='col-sm-6 imgAbt'>
                    <img style={{width:'100%',height:'95%'}} src="https://english.nepalpress.com/wp-content/uploads/2021/01/school.jpg" alt="About"></img>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;