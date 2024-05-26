import React, { useState } from 'react';

const Book = ({ places, user }) => {
  const [formData, setFormData] = useState({
    email: user.email,
    event: '',
    place: '',
    date: '',
    time: '',
    duration: '',
    message: '',
    photo: null,
  });

  const [messages, setMessages] = useState([]);
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, e.g., send formData to an API endpoint
    console.log(formData);
  };

  return (
    <>
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Book Now!</h2>
              <p>
                "Welcome to our college venue booking page! Easily reserve a venue for your event with just a few clicks. 
                Whether it's a club meeting, seminar, or celebration, we have the perfect space for you. Enjoy a seamless 
                booking experience tailored. Book now and make your event a success!"
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-black py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-12 col-lg-9">
              <div className="bg-black border rounded shadow-sm overflow-hidden">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                    {messages.map((message, index) => (
                      <div className="col-12" key={index}>
                        <div className={`alert alert-${message.tags} alert-dismissible fade show`} role="alert">
                          <strong>{message.text}</strong>
                          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                      </div>
                    ))}
                    <div className="col-12 col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="event" className="form-label">
                        Event <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="event"
                        name="event"
                        value={formData.event}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="place" className="form-label">
                        Place <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        name="place"
                        id="place"
                        value={formData.place}
                        onChange={handleChange}
                        required
                      >
                        {places.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="date" className="form-label">
                        Date <span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="time" className="form-label">
                        Time <span className="text-danger">*</span>
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="duration" className="form-label">
                        Duration (in hours) <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
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
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="photo" className="form-label">Photo</label>
                      <input
                        type="file"
                        className="form-control"
                        id="photo"
                        name="photo"
                        accept="image/*"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;
