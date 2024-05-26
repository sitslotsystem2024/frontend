import React from 'react';

// Dummy data for event, you should replace this with actual data fetching logic
const event = {
  name: 'Sample Event',
  image: {
    url: 'path/to/event_image.jpg'
  },
  start_time: '2024-06-01 10:00 AM',
  location: 'Sample Location',
  description: 'This is a sample description for the event.'
};

const Gallery = () => {
  return (
    <>
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Event Details</h2>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Header */}

      <section id="gallery-single" className="gallery-single">
        <div className="container">
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-6">
              <div className="gallery-item h-100">
                <img src={event.image.url} className="img-fluid" alt={event.name} />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="portfolio-info">
                <h3>{event.name}</h3>
                <ul>
                  <li><strong>On</strong> <span>{event.start_time}</span></li>
                  <li><strong>At</strong> <span>{event.location}</span></li>
                  <li><strong>Event Description</strong> <span>{event.description}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <a className="cta-btn" href="/event">Upcoming Events</a>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Header */}
    </>
  );
}

export default Gallery;
