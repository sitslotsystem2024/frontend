import React from 'react';

function Contact() {
  return (
    <>
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Contact</h2>
              <p>
                Feel free to reach out via email or phone for assistance with hall bookings, or use our feedback form for inquiries, and don't forget to check our FAQs for quick answers
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Header */}
  
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-3">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>Merlapadavu, Arkula, via, Valachil, Mangaluru, Karnataka 574143</p>
                </div>
              </div>
            </div>
            {/* End Info Item */}
  
            <div className="col-lg-3">
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
            {/* End Info Item */}
  
            <div className="col-lg-3">
              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
            </div>
            {/* End Info Item */}
          </div>
          
          <section className="bg-black py-3 py-md-5">
            <div className="container">
              <div className="row justify-content-lg-center">
                <div className="col-12 col-lg-9">
                  <div className="bg-black border rounded shadow-sm overflow-hidden">
                    <form action="/contact" method="post" encType="multipart/form-data">
                      <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                        <div className="col-12">
                          <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="fullname" name="name" required/>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                          <input type="email" className="form-control" id="email" name="email" required />
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className="form-label">Event Description <span className="text-danger">*</span></label>
                          <textarea className="form-control" id="message" name="feedback" rows="3" required></textarea>
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
        </div>
      </section>
      {/* End Contact Section */}
    </>
  );
}

export default Contact;