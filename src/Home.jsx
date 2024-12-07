import React, { useState, useEffect } from "react";
import ImagePopup from "./ImagePopup";
import PdfModal from "./PdfModal";

function HomeComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const AandS = Array.from(
    { length: 6 },
    (_, index) => `/WORKS1/ANU_SASHI/${index + 1}.jpg`
  );
  const AandH = Array.from(
    { length: 8 },
    (_, index) => `/WORKS1/ANITHA_HARSHA/${index + 1}.jpg`
  );
  const AN = Array.from(
    { length: 6 },
    (_, index) => `/WORKS1/AZIZ_NAGAR/${index + 1}.jpg`
  );
  const RandP = Array.from(
    { length: 6 },
    (_, index) => `/WORKS1/RAMA_PRADEEP/${index + 1}.jpg`
  );
  const SandS = Array.from(
    { length: 8 },
    (_, index) => `/WORKS1/SHANTHI_SRINIVAS/${index + 1}.jpg`
  );

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (imageSet) => {
    setShowModal(true);
    document.body.classList.add("no-scroll");
    switch (imageSet) {
      case "SandS":
        setModalData({ images: SandS });
        break;
      case "AandS":
        setModalData({ images: AandS });
        break;
      case "AandH":
        setModalData({ images: AandH });
        break;
      case "AN":
        setModalData({ images: AN });
        break;
      case "RandP":
        setModalData({ images: RandP });
        break;
      default:
        setModalData(null);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove("no-scroll");
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/logo.svg"
              loading="lazy"
              alt="Logo"
              width="60%"
              height="100%"
              className="d-inline-block align-text-top logo mt-2 mb-2"
            />
          </a>
          <button
            className="navbar-toggler border border-0 p-0"
            type="button"
            onClick={handleToggle}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <img
              src="icon.png"
              alt="Toggle navigation icon"
              style={{ width: "24px", height: "24px" }}
            />
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item text-end">
                <a
                  className="fw-medium nav-link active"
                  aria-current="page"
                  href="#profile"
                >
                  PROFILE
                </a>
              </li>
              <li className="nav-item text-end">
                <a
                  className="fw-medium nav-link active"
                  href="#work"
                  onClick={handleLinkClick}
                >
                  WORKS
                </a>
              </li>
              <li className="nav-item text-end">
                <a
                  className="fw-medium nav-link active"
                  href="#magazines"
                  onClick={handleLinkClick}
                >
                  MAGAZINES
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="fw-medium nav-link active"
                  href="#blog"
                  onClick={handleLinkClick}
                >
                  BLOG
                </a>
              </li> */}
              <li className="nav-item text-end">
                <a
                  className="fw-medium nav-link active"
                  href="#contact"
                  onClick={handleLinkClick}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="carosel-section p-0">
        <div
          className="carousel slide"
          id="carouselDemo"
          data-bs-wrap="true"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            
            <div className="carousel-item active">
              <img
                loading="lazy"
                src={isMobile ? "/01.jpg" : "/1.jpg"}
                className="d-block w-100"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                loading="lazy"
                src={isMobile ? "/mobile2.jpeg" : "/2.jpg"}
                className="d-block w-100"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/Mobile1.jpeg" : "/3.jpg"}
                className="d-block w-100"
                alt="Slide 3"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/mobile3.jpeg" : "/1.jpg"}
                className="d-block w-100"
                alt="Slide 4"
              />
            </div>
          </div>

             {/* Conditionally show arrows only if not mobile */}
      {/* {!isMobile && (
        <>
          <button className="carousel-control-prev" aria-label="Previous">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" aria-label="Next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </>
      )} */}

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselDemo"
            data-bs-slide="prev"
          >
            {/* <span className="carousel-control-prev-icon"></span> */}
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselDemo"
            data-bs-slide="next"
          >
            {/* <span className="carousel-control-next-icon"></span> */}
          </button>
          <div className="carousel-indicators">
            <button
              type="button"
              className="active"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="0"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="3"
            ></button>
          </div>
        </div>
      </section>

      <section className="works-section">
        <div className="text-center">
          <h2 id="work">WORKS</h2>
        </div>
        {/* <div className="row">
                 <div className="col-sm-6">
                    <div className="card mt-4" onClick={() => openModal('AandS')}>
                        <img loading="lazy" src="/WORKS/ANU-SHASHI/27.jpg" className="img-fluid" alt="ANU & SASHI" />
                    </div>
                    <div className="col clientNames text-center mt-1">
                        <span className="fw-medium">ANU & SASHI</span>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card mt-4" onClick={() => openModal('CharuSrini')}>
                        <img loading="lazy" src="/WORKS/CHARU-SRINIVASAN/home.jpg" className="" />
                    </div>
                    <div className="col clientNames text-center mt-1">
                        <span className="fw-medium">CHARU & SRINIVAS</span>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card mt-4" onClick={() => openModal('RamaPradeep')}>
                        <img loading="lazy" src="/WORKS/RAMA-PRADEEP/home.jpg" className="" />
                    </div>
                    <div className="col clientNames text-center mt-1">
                        <span className="fw-medium">RAMA & PRADEEP</span>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card mt-4" onClick={() => openModal('ShanthiSrini')}>
                        <img loading="lazy" src="/WORKS/SHANTHI-SRINIVAS/home.jpg" className="" />
                    </div>
                    <div className="col clientNames text-center mt-1">
                        <span className="fw-medium">SHANTHI & SRINIVAS</span>
                    </div>
                </div>
            </div> */}

        <div className="row">
          <div className="col-sm-4" onClick={() => openModal("AandS")}>
            <div className="mt-4 card-mag">
              <img
                loading="lazy"
                src="/WORKS1/ANU_SASHI/1.jpg"
                className="magazine-cover"
              />
            </div>
            <div className="col clientNames text-center mt-1">
              <span className="fw-medium">ANU & SASHI</span>
            </div>
          </div>

          <div className="col-sm-4" onClick={() => openModal("AandH")}>
            <div className="mt-4 card-mag">
              <img
                loading="lazy"
                src="/WORKS1/ANITHA_HARSHA/1.jpg"
                className="magazine-cover"
              />
            </div>
            <div className="col clientNames text-center mt-1">
              <span className="fw-medium">SHANTHI & SRINIVAS</span>
            </div>
          </div>

          <div className="col-sm-4" onClick={() => openModal("AN")}>
            <div className="mt-4 card-mag">
              <img
                loading="lazy"
                src="/WORKS1/AZIZ_NAGAR/1.jpg"
                className="magazine-cover"
              />
            </div>
            <div className="col clientNames text-center mt-1">
              <span className="fw-medium">AZIZ NAGAR</span>
            </div>
          </div>

          <div className="col-sm-4" onClick={() => openModal("RandP")}>
            <div className="mt-4 card-mag">
              <img
                loading="lazy"
                src="/WORKS1/RAMA_PRADEEP/1.jpg"
                className="magazine-cover"
              />
            </div>
            <div className="col clientNames text-center mt-1">
              <span className="fw-medium">RAMA & PRADEEP</span>
            </div>
          </div>

          <div className="col-sm-4" onClick={() => openModal("SandS")}>
            <div className="mt-4 card-mag">
              <img
                loading="lazy"
                src="/WORKS1/SHANTHI_SRINIVAS/1.jpg"
                className="magazine-cover"
              />
            </div>
            <div className="col clientNames text-center mt-1">
              <span className="fw-medium">SHANTHI & SRINIVAS</span>
            </div>
          </div>
        </div>

        {modalData && (
          <ImagePopup
            showModal={showModal}
            images={modalData.images}
            closeModal={closeModal}
          />
        )}
      </section>

      {/* <section id="publishing-section">
            <div className="text-center mt-2">
                <h2 id="publishing">PUBLICATIONS</h2>
                <div className="row d-flex justify-content-center">

                    <div className="col-sm-6">
                        <div className="card mt-5">
                            <img loading="lazy" src="/PUBLICATIONS/5.png" className="" />
                        </div>
                        <div className="col clientNames text-center mt-1">
                            <span className="fw-medium">VILLA 18</span>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card mt-5">
                            <img loading="lazy" src="/PUBLICATIONS/2.jpg" className="" />
                        </div>
                        <div className="col clientNames text-center mt-1">
                            <span className="fw-medium">India Today</span>
                        </div>
                    </div>

                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-6">
                        <div className="card mt-5">
                            <img loading="lazy" src="/PUBLICATIONS/3.jpg" className="" />
                        </div>
                        <div className="col clientNames text-center mt-1">
                            <span className="fw-medium">The Architect's Dairy</span>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card mt-5">
                            <img loading="lazy" src="/PUBLICATIONS/4.jpg" className="" />
                        </div>
                        <div className="col clientNames text-center mt-1">
                            <span className="fw-medium">Archizy</span>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-6">
                        <div className="card mt-5">
                            <img loading="lazy" src="/PUBLICATIONS/1.jpg" className="" />
                        </div>
                        <div className="col clientNames text-center mt-1">
                            <span className="fw-medium">Good Homes</span>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

      <section id = "magazines" className="magazine-section mt-5">
        <div className="mag-div text-center mt-0">
          <h2 id="">MAGAZINES</h2>
          <div className="row">
            <div className="col-sm-4">
              <div className=" mt-4 card-mag">
                <img
                  loading="lazy"
                  src="/MAGAZINES/MAGAZINES/APOORVA/1.jpg"
                  className="magazine-cover"
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className=" mt-4 card-mag">
                <img
                  loading="lazy"
                  src="/MAGAZINES/MAGAZINES/HOME-AND-DEISGN-TRENDS/0.jpg"
                  className="magazine-cover"
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className=" mt-4 card-mag">
                <img
                  loading="lazy"
                  src="/MAGAZINES/MAGAZINES/INDIAN-TODAY-HOMES/1.jpg"
                  className="magazine-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="blogs-section mt-5" >
            <div className="blog-div text-center mt-0">
                <h2 id="blog">BLOGS</h2>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card mt-4">
                            <img loading="lazy" src="/BLOGS/1.png" alt="Blog 1" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Blog 1</h5>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-6">
                        <div className="card mt-4">
                            <img loading="lazy" src="/BLOGS/2.png" className="" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card mt-4">
                            <img loading="lazy" src="/BLOGS/3.png" className="" />
                        </div>
                    </div>


                    <div className="col-sm-6">
                        <div className="card mt-4 ">
                            <img loading="lazy" src="/BLOGS/4.png" className="" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card mt-4">
                            <img loading="lazy" src="/BLOGS/5.png" className="" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card mt-4">
                            <img loading="lazy" src="/BLOGS/6.png" className="" />
                        </div>
                    </div>
                </div>
            </div>


        </section> */}

      <section className="profile-section mb-5">
        <div className="row mt-4 d-flex justify-content-center text-center ">
          <h2 id="profile">PROFILE</h2>
          <div className="card mt-4 profile-card" style={{ width: "35vw" }}>
            <img
              loading="lazy"
              src="/MAGAZINES/MAGAZINES/HOME-AND-DEISGN-TRENDS/0.jpg"
              className="card-img-top "
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">JYOTHIRMAYI MITTA</h5>
              <figcaption className="blockquote-footer mt-1">
                <cite title="Source Title">Architect</cite>
              </figcaption>
              <p className="card-text fw-medium ">
                <em>
                  Graduate in architecture from the university college of
                  architecture - Andhra university. Craft centric design
                  approach. Weaves spaces with diverse complexities of material
                  and textures.
                </em>
              </p>
            </div>
          </div>
          <div className="card mt-4 profile-card" style={{ width: "35vw" }}>
            <img
              loading="lazy"
              src="/MAGAZINES/MAGAZINES/HOME-AND-DEISGN-TRENDS/0.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">LALITH MITTA</h5>
              <figcaption className="blockquote-footer mt-1">
                <cite title="Source Title">Architect</cite>
              </figcaption>
              <p className="card-text fw-medium  ms-2">
                {" "}
                <em>
                  Graduate in architecture from the university college of
                  architecture - Andhra university. Enjoys design as a process
                  emerging form the non programmed moments.And then to weave
                  those moments into the material forms.
                </em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id = "contact" className="Contact-section mt-mb-5 ">
        <div className="contactDiv row d-flex justify-content-end m-4 mb-5">
          <div className="col-md-12">
            <div className="mt-4 mt-md-0">
              <h2>Contact</h2>
              <div className="d-flex align-items-center mt-3">
                <h6 className="p-0 m-0 me-4 fw-medium">
                  Hemu, Vittal Rao Nagar, HITEC City, Hyderabad, Telangana
                  500081
                </h6>
              </div>

              <div className="row align-items-center mt-2 p-0">
                <div className="col-12 col-md-auto d-flex align-items-center mb-2 mt-2 mb-md-0">
                  <h6 className="p-0 m-0 fw-medium">info@lalithjyothi.com</h6>
                </div>

                <div className="col-12 col-md-auto d-flex align-items-center mt-2">
                  <h6
                    className="p-0 m-0 fw-medium"
                    style={{ fontSize: "0.9rem" }}
                  >
                    +91-9704475888
                  </h6>
                </div>
              </div>

              <div className="map mt-4">
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30451.228423446337!2d78.3862516!3d17.4403886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c88eb0ddc3%3A0x4e9e70803a44d23f!2sLalith%20and%20Jyothi%20-%20Architects!5e0!3m2!1sen!2sin!4v1728584200552!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    style={{ border: "0", filter: "grayscale(100%)" }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeComponent;
