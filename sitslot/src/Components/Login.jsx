import React from 'react';

const Login = () => {
  // Dummy function to mimic form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  // Dummy messages array for demonstration
  const messages = [
    { tags: 'success', text: 'Login successful' },
    { tags: 'error', text: 'Invalid username or password' },
  ];

  return (
    <div>
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Login</h2>
              <p>"Welcome to our college venue booking page! Easily reserve a venue for your event with just a few clicks. Whether it's a club meeting, seminar, or celebration, we have the perfect space for you. Enjoy a seamless booking experience tailored. Book now and make your event a success!"</p>
            </div>
          </div>
        </div>
      </div>
      
      <section className="bg-black py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-12 col-lg-9">
              <div className="bg-black border rounded shadow-sm overflow-hidden">
                <form onSubmit={handleSubmit} enctype="multipart/form-data">  
                  <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                    {messages.map((message, index) => (
                      <div className="col-12" key={index}>
                        <div className={`alert alert-${message.tags} alert-dismissible fade show`} role="alert">
                          <strong>{message.text}</strong>
                          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                      </div>
                    ))}
                    <div className="col-12">
                      <label htmlFor="username" className="form-label">User Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="username" name="username" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                      <input type="password" className="form-control" id="password" name="password" required />
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">Login</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 text-center mt-3">
                    <a href="/signup" className="btn btn-outline-primary btn-lg">Signup</a>
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
