import React from 'react';

// Dummy data for events, you should replace this with actual data fetching logic
const events = [
  {
    id: 1,
    name: 'Event 1',
    image: {
      url: 'path/to/image1.jpg'
    },
    start_time: '2024-05-30 10:00 AM'
  },
  {
    id: 2,
    name: 'Event 2',
    image: {
      url: 'path/to/image2.jpg'
    },
    start_time: '2024-06-05 02:00 PM'
  },
  // Add more events as needed
];

function Events() {
  return (
    <>
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Upcoming events</h2>
              <p>Explore our upcoming events to stay informed and check for available slots to book for your next event.</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Header */}

      {/* ======= Gallery Section ======= */}
      <section id="gallery" className="gallery">
        <div className="container-fluid">
          <div className="row gy-4 justify-content-center">
            {events.map((event) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={event.id}>
                <div className="gallery-item h-100">
                  {event.image && (
                    <img src={event.image.url} className="img-fluid" alt={event.name} />
                  )}
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    {event.image && (
                      <a href={event.image.url} title={event.name} className="glightbox preview-link">
                        <i className="bi bi-arrows-angle-expand"></i>
                      </a>
                    )}
                    <a href={`/display/${event.id}`} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Gallery Section */}
    </>
  );
}

export default Events;
