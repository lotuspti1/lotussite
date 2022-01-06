import React from 'react';
function Home() {
    return (
        <>
            <div className='container-fluid'>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img style={{width: "100%",height: "100%"}} src="https://scontent.fktm1-1.fna.fbcdn.net/v/t1.15752-9/267875772_911182259764201_4764856803698123937_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=osaUGqcMLLgAX_wGqeW&_nc_ht=scontent.fktm1-1.fna&oh=03_AVLuz2jhE7Lg5MPMaZCg-42qCxOajE3d0bRTIP_X2_p5aw&oe=61F84B26" alt='First Slide'></img>
                        </div>
                        <div className="carousel-item">
                            <img style={{width: "100%",height: "100%"}} src="https://scontent.fktm1-1.fna.fbcdn.net/v/t1.15752-9/267875772_911182259764201_4764856803698123937_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=osaUGqcMLLgAX_wGqeW&_nc_ht=scontent.fktm1-1.fna&oh=03_AVLuz2jhE7Lg5MPMaZCg-42qCxOajE3d0bRTIP_X2_p5aw&oe=61F84B26" alt='Second Slide'></img>
                        </div>
                        <div className="carousel-item">
                        <img style={{width: "100%",height: "100%"}} src="https://scontent.fktm1-1.fna.fbcdn.net/v/t1.15752-9/267875772_911182259764201_4764856803698123937_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=osaUGqcMLLgAX_wGqeW&_nc_ht=scontent.fktm1-1.fna&oh=03_AVLuz2jhE7Lg5MPMaZCg-42qCxOajE3d0bRTIP_X2_p5aw&oe=61F84B26" alt='Third Slide'></img>
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
                            <i class="fa fa-graduation-cap"></i>
                            <text id='shortInfoHead'>Courses</text>
                            <text id='shortInfoBody'>sdfsfsfsfsfslskdjflskdjflskfjsldfjslkfsdsdfsdfsdfsfsdfsfssdfsdfsffsdf</text>
                        </div>
                        <div className='col-sm-4 bg-primary shortInfo'>
                            <i class="fa fa-graduation-cap"></i>
                            <text id='shortInfoHead'>Courses</text>
                            <text id='shortInfoBody'>sdfsfsfsfsfsfsdsdfsdfsdfsfsdfsfssdfsdfsffsdf</text>
                        </div> <div className='col-sm-4 bg-warning shortInfo'>
                            <i class="fa fa-graduation-cap"></i>
                            <text id='shortInfoHead'>Courses</text>
                            <text id='shortInfoBody'>sdfsfsfsfsfsfsdsdfsdfsdfsfsdfsfssdfsdfsffsdf</text>
                        </div>
                        </div>
                        </div>
            </div>
           
        </>
    )
};
export default Home;