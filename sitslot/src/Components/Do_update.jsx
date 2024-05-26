import React from 'react';

const DoUpdate = ({ event, messages }) => {
  return (
    <>
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Book Now!</h2>
              <p>
                "Welcome to our college venue booking page! Easily reserve a venue for your event with just a few clicks. Whether it's a club meeting, seminar, or celebration, we have the perfect space for you. Enjoy a seamless booking experience tailored. Book now and make your event a success!"
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Header */}

      {/* ======= Contact Section ======= */}
      <section className="bg-black py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-12 col-lg-9">
              <div className="bg-black border rounded shadow-sm overflow-hidden">
                <form
                  action={`/do_update/${event.id}`}
                  method="post"
                  encType="multipart/form-data"
                >
                  {/* Assuming CSRF token and messages will be handled separately in React */}
                  <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                    {messages.map((message, index) => (
                      <div className="col-12" key={index}>
                        <div
                          className={`alert alert-${message.tags} alert-dismissible fade show`}
                          role="alert"
                        >
                          <strong>{message.content}</strong>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          ></button>
                        </div>
                      </div>
                    ))}

                    <div className="col-12">
                      <label htmlFor="event" className="form-label">
                        Event <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="event"
                        name="event"
                        defaultValue={event.event}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        Event Description <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="3"
                        defaultValue={event.description}
                        required
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <label htmlFor="photo" className="form-label">
                        Current Photo
                      </label>
                      {event.image ? (
                        <img
                          src={event.image.url}
                          alt="Event Image"
                          style={{ maxWidth: '200px', maxHeight: '200px' }}
                        />
                      ) : (
                        <p>No image uploaded</p>
                      )}
                    </div>

                    <div className="col-12">
                      <label htmlFor="photo" className="form-label">
                        Upload New Photo
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="photo"
                        name="photo"
                        accept="image/*"
                      />
                    </div>

                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </>
  );
};

export default DoUpdate;
