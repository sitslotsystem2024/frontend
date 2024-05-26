import React from 'react';

// Dummy data for places, you should replace this with actual data fetching logic
const places = [
  {
    id: 1,
    name: 'Place 1',
    imageUrl: 'path/to/image1.jpg'
  },
  {
    id: 2,
    name: 'Place 2',
    imageUrl: 'path/to/image2.jpg'
  }
  // Add more places as needed
];

const Index = () => {
  return (
    <>
      <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay="1500">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Welcome to <span>SIT_SLOT</span></h2>
              <p>Our College Hall Slot Booking page! This platform offers a quick and easy way to reserve halls for your events. With just a few clicks, you can access available spaces, amenities, and scheduling options. Simplify your event planning process and book with ease!</p>
              <a href="/event" className="btn-get-started">Upcoming events</a><br /><br />
              <a href="/login" className="btn-get-started">Book</a>
            </div>
          </div>
        </div>
      </section>
      <main id="main" data-aos="fade" data-aos-delay="1500">
        <section id="gallery" className="gallery">
          <div className="container-fluid">
            <div className="row gy-4 justify-content-center">
              {places.map(place => (
                <div key={place.id} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="gallery-item h-100">
                    <img src={place.imageUrl} className="img-fluid" alt={place.name} />
                    <div className="gallery-links d-flex align-items-center justify-content-center">
                      <a href={place.imageUrl} title={place.name} className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
                      <a href={`/gallery/${place.id}`} className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
