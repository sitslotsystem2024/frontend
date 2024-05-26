import React from 'react';

// Dummy data for place, you should replace this with actual data fetching logic
const place = {
  name: 'Sample Place',
  images: {
    url: 'path/to/main_image.jpg'
  },
  img1: {
    url: 'path/to/image1.jpg'
  },
  img2: {
    url: 'path/to/image2.jpg'
  },
  img3: {
    url: 'path/to/image3.jpg'
  },
  img4: {
    url: 'path/to/image4.jpg'
  },
  img5: {
    url: 'path/to/image5.jpg'
  },
  introduction: 'This is a sample introduction for the place.'
};

const GallerySingle = () => {
  return (
    <>
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>{place.name}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Header */}

      <section id="gallery-single" className="gallery-single">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {/* Gallery Images */}
            <div className="col-lg-6">
              <div className="position-relative h-100">
                <div className="slides-1 portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img src={place.images.url} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src={place.img1.url} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src={place.img2.url} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src={place.img3.url} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src={place.img4.url} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src={place.img5.url} alt="" />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>

          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8">
              <div className="portfolio-description">
                <h2>For your reference</h2>
                <p>{place.introduction}</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="portfolio-description">
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <div>
                    <img
                      src="/path/to/image.jpg"
                      className="testimonial-img"
                      alt="Dr. CA A. Raghavendra Rao"
                    />
                    <h3>Dr. CA A. Raghavendra Rao</h3>
                    <h4>Chairman of Srinivas Group of Institution</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GallerySingle;
