import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <header>
        <h1>About Us</h1>
      </header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Organization Details</h2>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Organization Name
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>Organization details go here.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;