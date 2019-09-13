import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import img1 from '../../img/5d5f7b045966d.1920px-by-400px.jpg'
import img2 from '../../img/5d677c3d20f95.1920px-by-400px.jpg'
import img3 from '../../img/5d6374163b6b5.health-brand-slider.jpg'



const CarouselPage = () => {
  return (
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={img2}
                alt="First slide"
                style={{height: '300px'}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={img1}
                alt="Second slide"
                style={{height: '300px'}}

              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                style={{height: '300px'}}
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  );
}

export default CarouselPage;