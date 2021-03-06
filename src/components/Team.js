import React from "react";

const Team = () => {
  return (
    <>
      <section className="bg-light page-section" id="team">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">
                    Our Amazing Team
                    </h2>
                    <h3 className="section-subheading text-muted">
                    A small group of only two members.
                    </h3>
                </div>
            </div>    
            <div className="row">
                <div className="col-sm">
                    <div className="team-member">
                        <img
                        className="mx-auto rounded-circle"
                        src="../../image/thuy.png"
                        alt=""
                        />
                        <h4>Nguyễn Phương Thùy</h4>
                        <p className="text-muted">Lead Designer</p>
                                <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                            <a href="#something">
                            <i className="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#something">
                            <i className="fa fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#something">
                            <i className="fa fa-instagram"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="team-member">
                        <img
                        className="mx-auto rounded-circle"
                        src="../../image/vu.png"
                        alt=""
                        />

                        <h4>Nguyễn Anh Vũ</h4>
                        <p className="text-muted">Lead Developer</p>
                        <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                            <a href="#something">
                            <i className="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#something">
                            <i className="fa fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#something">
                            <i className="fa fa-instagram"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
              Studied at the university of information technology led by Ms. Nghi as a teacher.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
