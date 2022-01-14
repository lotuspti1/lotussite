import React from 'react';
function Home() {
    return (
        <>
            <div className='container-fluid'>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img style={{width: "100%",height: "100%"}} src="https://english.nepalpress.com/wp-content/uploads/2021/01/school.jpg" alt='First Slide'></img>
                        </div>
                        <div className="carousel-item">
                            <img style={{width: "100%",height: "100%"}} src="https://english.nepalpress.com/wp-content/uploads/2021/01/school.jpg" alt='Second Slide'></img>
                        </div>
                        <div className="carousel-item">
                        <img style={{width: "100%",height: "100%"}} src="https://english.nepalpress.com/wp-content/uploads/2021/01/school.jpg" alt='Third Slide'></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <i id='slideButton' class="fa fa-angle-left"></i>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <i id='slideButton' class="fa fa-angle-right"></i>
                    </a>  
                </div>
                <div className='container-fluid' id='conPointDetails'>
                        <div className='row pointDetails text-white'>
                        <div className='col-sm-4 bg-danger shortInfo'>
                        <i class="fa fa-book"></i>
                            <text id='shortInfoHead'>Courses</text>
                            <text id='shortInfoBody'>We provide a wide variety of services so that our learners and trainee could persue
                            their professional career goals.</text>
                        </div>
                        <div className='col-sm-4 bg-primary shortInfo'>
                            <i class="fa fa-users"></i>
                            <text id='shortInfoHead'>Community</text>
                            <text id='shortInfoBody'>We are a team of professionals who are specialized in their respective area of expenses.</text>
                        </div> <div className='col-sm-4 bg-success shortInfo'>
                            <i class="fa fa-graduation-cap"></i>
                            <text id='shortInfoHead'>Career</text>
                            <text id='shortInfoBody'>Lotus is a platform for any of the trainees who once enter into our institute will
                            leave with their professional career outcomes.</text>
                        </div>
                        </div>
                        </div>
            </div>
           
        </>
    )
};
export default Home;