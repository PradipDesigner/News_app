import React from "react";

const Contact = () => {
  return (
    <div className="col-md-12">
      <h1 className="text-center">Contact Us</h1>
      <hr />
      <div className="row">
        <div className="col-md-6 mt-lg-4 mt-0 mx-auto">
          <form>
            <div className="form my-3">
              <label htmlFor="Name">Name</label>
              <input
                type="email"
                className="form-control"
                id="Name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form my-3">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                className="form-control"
                id="Email"
                placeholder="name@example.com"
              />
            </div>
            <div className="form  my-3">
              <label htmlFor="Password">Message</label>
              <textarea
                rows={5}
                className="form-control"
                id="Password"
                placeholder="Enter your message"
              />
            </div>
            <div className="text-center">
              <button
                className="my-2 px-4 mx-auto btn btn-dark"
                type="submit"
                disabled
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
