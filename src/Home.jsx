import { useState, useEffect } from "react";
import ImagePopup from "./ImagePopup";
import ImagePopupDesktop from "./ImagePopupDesktop";

function HomeComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const AandS_Web = Array.from(
    { length: 34 },
    (_, index) => `/WORKS/ANU_SASHI/${index + 1}.jpg`
  );
  const CandS_Web = Array.from(
    { length: 58 },
    (_, index) => `/WORKS/CHARU-SRINIVASAN/${index + 1}.jpg`
  );
  const RandP_Web = Array.from(
    { length: 52 },
    (_, index) => `/WORKS/RAMA-PRADEEP/${index + 1}.jpg`
  );
  const SandS_Web = Array.from(
    { length: 64 },
    (_, index) => `/WORKS/SHANTHI-SRINIVAS/${index + 1}.jpg`
  );
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
      case "AandS_Web":
        setModalData({ images: AandS_Web });
        break;
      case "CandS_Web":
        setModalData({ images: CandS_Web });
        break;
      case "RandP_Web":
        setModalData({ images: RandP_Web });
        break;
      case "SandS_Web":
        setModalData({ images: SandS_Web });
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
                  href="#publishing"
                  onClick={handleLinkClick}
                >
                  PUBLICATIONS
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
                src={isMobile ? "/MOBILE/1.jpg" : "/WEB/1.jpg"}
                className="d-block w-100"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/2.jpeg" : "/WEB/2.jpg"}
                className="d-block w-100"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/3.jpeg" : "/WEB/3.jpg"}
                className="d-block w-100"
                alt="Slide 3"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/4.jpg" : "/WEB/4.jpg"}
                className="d-block w-100"
                alt="Slide 4"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/5.jpg" : "/WEB/5.jpg"}
                className="d-block w-100"
                alt="Slide 5"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/6.jpg" : "/WEB/6.jpg"}
                className="d-block w-100"
                alt="Slide 6"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/7.jpg" : "/WEB/7.jpg"}
                className="d-block w-100"
                alt="Slide 7"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/8.jpg" : "/WEB/8.jpg"}
                className="d-block w-100"
                alt="Slide 8"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/9.jpg" : "/WEB/9.jpg"}
                className="d-block w-100"
                alt="Slide 9"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/10.jpg" : "/WEB/10.jpg"}
                className="d-block w-100"
                alt="Slide 10"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/11.jpg" : "/WEB/11.jpg"}
                className="d-block w-100"
                alt="Slide 11"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/12.jpeg" : "/WEB/12.jpg"}
                className="d-block w-100"
                alt="Slide 12"
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
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselDemo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
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
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="4"
              style={{ display: "none" }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="5"
              style={{ display: "none" }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="6"
              style={{ display: "none" }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="7"
              style={{ display: "none" }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="8"
              style={{ display: "none" }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="9"
              style={{ display: "none" }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="10"
              style={{ display: "none" }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="11"
              style={{ display: "none" }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="12"
              style={{ display: "none" }}
            ></button>
          </div>
        </div>
      </section>
      <section className="works-section">
        <div className="text-center">
          <h2 id="work">WORKS</h2>
        </div>
        {!isMobile ? (
          <div className="row">
            <div className="col-sm-6">
              <div className="card mt-4" onClick={() => openModal("AandS_Web")}>
                <img
                  loading="lazy"
                  src="/WORKS/ANU_SASHI/27.jpg"
                  className="img-fluid"
                  alt="ANU & SASHI"
                />
              </div>
              <div className="col clientNames text-center mt-1">
                <span className="fw-medium">ANU & SASHI</span>
              </div>
            </div>

            <div className="col-sm-6">
              <div
                className="card mt-4"
                onClick={() => openModal("CandS_Web")}
              >
                <img
                  loading="lazy"
                  src="/WORKS/CHARU-SRINIVASAN/home.jpg"
                  className=""
                />
              </div>
              <div className="col clientNames text-center mt-1">
                <span className="fw-medium">CHARU & SRINIVAS</span>
              </div>
            </div>

            <div className="col-sm-6">
              <div
                className="card mt-4"
                onClick={() => openModal("RandP_Web")}
              >
                <img
                  loading="lazy"
                  src="/WORKS/RAMA-PRADEEP/home.jpg"
                  className=""
                />
              </div>
              <div className="col clientNames text-center mt-1">
                <span className="fw-medium">RAMA & PRADEEP</span>
              </div>
            </div>

            <div className="col-sm-6">
              <div
                className="card mt-4"
                onClick={() => openModal("SandS_Web")}
              >
                <img
                  loading="lazy"
                  src="/WORKS/SHANTHI-SRINIVAS/home.jpg"
                  className=""
                />
              </div>
              <div className="col clientNames text-center mt-1">
                <span className="fw-medium">SHANTHI & SRINIVAS</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-sm-4" onClick={() => openModal("AandH")}>
              <div className="mt-4 card-mag">
                <img
                  loading="lazy"
                  src="/WORKS1/ANITHA_HARSHA/1.jpg"
                  className="magazine-cover"
                />
              </div>
              <div className="col clientNames text-center mt-1">
                <span className="fw-medium">
                  ANITA AND HARSHA BHOGLE&apos;S RESIDENCE
                </span>
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
                <span className="fw-medium">
                  CHARU AND SRINI&apos;S RESIDENCE
                </span>
              </div>
            </div>

            <div className="col-sm-4" onClick={() => openModal("AandS")}>
              <div className="mt-4 card-mag">
                <img
                  loading="lazy"
                  src="/WORKS1/ANU_SASHI/1.jpg"
                  className="magazine-cover"
                />
              </div>
              <div className="col clientNames text-center mt-1">
                <span className="fw-medium">
                  ANU AND SASHI&apos;S RESIDENCE
                </span>
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
                <span className="fw-medium">
                  RAMA AND PRADEEP&apos;S RESIDENCE
                </span>
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
                <span className="fw-medium">
                  SHANTI AND SRINIVAS&apos;S RESIDENCE
                </span>
              </div>
            </div>
          </div>
        )}

        {modalData && (
          <ImagePopup
            showModal={showModal}
            images={modalData.images}
            closeModal={closeModal}
          />
        )}

        {modalData && (
          <ImagePopupDesktop
            showModal={showModal}
            images={modalData.images}
            closeModal={closeModal}
          />
        )}
      </section>
      
      <section id="publishing-section">
        <div className="text-center mt-2">
          <h2 id="publishing">PUBLICATIONS</h2>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-6">
              <a href="https://www.indiatoday.in/magazine/supplement/story/20240930-harsha-and-anita-bhogles-home-effortless-charm-2602503-2024-09-21">
                <div className="card mt-5">
                  <img loading="lazy" src="/PUBLICATIONS/2.jpg" className="" />
                </div>
              </a>
              <div className="col clientNames text-center mt-1">
                <span className="fw-medium">India Today</span>
              </div>
            </div>

            <div className="col-sm-6">
              <a href="https://www.goodhomes.co.in/home-and-design-trends/centred-around-a-courtyard-this-aziznagar-home-is-breathtaking-9107.html">
                <div className="card mt-5">
                  <img loading="lazy" src="/PUBLICATIONS/1.jpg" className="" />
                </div>
              </a>
              <div className="col clientNames text-center mt-1">
                <span className="fw-medium">Good Homes</span>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-6">
              <a href="https://thearchitectsdiary.com/this-hyderabad-house-harmonizes-two-distinct-units-lalith-and-jyothi-architects/">
                <div className="card mt-5">
                  <img loading="lazy" src="/PUBLICATIONS/6.jpg" className="" />
                </div>
              </a>
              <div className="col clientNames text-center mt-1">
                <span className="fw-medium">The Architect&apos;s Dairy</span>
              </div>
            </div>

            <div className="col-sm-6">
              <a href="">
                <div className="card mt-5">
                  <img loading="lazy" src="/PUBLICATIONS/3.jpg" className="" />
                </div>
              </a>
              <div className="col clientNames text-center mt-1">
                <span className="fw-medium">The Architect&apos;s Dairy</span>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-6">
              <a href="https://architizer.com/projects/villa-18/">
                <div className="card mt-5">
                  <img loading="lazy" src="/PUBLICATIONS/5.png" className="" />
                </div>
              </a>
              <div className="col clientNames text-center mt-1">
                <span className="fw-medium">Architizer</span>
              </div>
            </div>
            <div className="col-sm-6">
              <a href="https://www.archizy.com/magazines/archana-and-ramanas-house-by-lalith-and-jyothi-architects">
                <div className="card mt-5">
                  <img loading="lazy" src="/PUBLICATIONS/4.jpg" className="" />
                </div>
              </a>
              <div className="col clientNames text-center mt-1">
                <span className="fw-medium">Archizy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="magazines" className="magazine-section ">
        <div className="mag-div text-center mt-0">
          {/* <h2 id="">MAGAZINES</h2> */}
          <div className="row d-flex justify-content-center">
            {/* <div className="col-sm-4" style={{display:"none"}}>
              <div className=" mt-4 card-mag">
                <img
                  loading="lazy"
                  src="/MAGAZINES/MAGAZINES/APOORVA/1.jpg"
                  className="magazine-cover"
                />
              </div>
            </div> */}
            <div className="col-sm-4">
              <a href="https://www.goodhomes.co.in/home-and-design-trends/centred-around-a-courtyard-this-aziznagar-home-is-breathtaking-9107.html">
                <div className=" mt-4 card-mag">
                  <img
                    loading="lazy"
                    src="/MAGAZINES/MAGAZINES/HOME-AND-DEISGN-TRENDS/5.jpg"
                    className="magazine-cover"
                  />
                </div>
              </a>
            </div>

            <div className="col-sm-4">
              <a href="https://www.indiatoday.in/magazine/supplement/story/20240930-harsha-and-anita-bhogles-home-effortless-charm-2602503-2024-09-21">
                <div className=" mt-4 card-mag">
                  <img
                    loading="lazy"
                    src="/MAGAZINES/MAGAZINES/INDIAN-TODAY-HOMES/4.jpg"
                    className="magazine-cover"
                  />
                </div>
              </a>
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
      <section className="profile-section">
        <div className="row mt-2 p-1 d-flex justify-content-center text-center">
          <h2 id="profile">PROFILE</h2>
          <div
            className="card mt-2 p-0 profile-card m-2"
            style={{
              width: "fit-content",
              height: "fit-content",
              display: "inline-block",
              margin: "auto",
            }}
          >
            <div className="row g-0">
              {/* Image Section */}
              <div className="col-md-4">
                <img
                  className="img-fluid"
                  loading="lazy"
                  src="/MAGAZINES/MAGAZINES/HOME-AND-DEISGN-TRENDS/pp2.jpg"
                  alt="..."
                  style={{
                    height: isMobile ? "100%" : "80vh",
                    objectFit: "cover",
                  }}
                />
              </div>
              {/* Text Section */}
              <div className="col-md-8">
                <div className="card-body text-start p-2 pt-3">
                  <h5 className="card-title">Lalith and Jyothi</h5>
                  <figcaption className="blockquote-footer mt-1">
                    <cite title="Source Title">Architects</cite>
                  </figcaption>
                  <p
                    className="card-text fw-medium"
                    style={{
                      textAlign: "justify",
                      marginRight: isMobile ? "auto" : "3rem",
                    }}
                  >
                    A practice invested in crafting meaningful spaces was
                    initiated in the year 1994. In the past three decades, we
                    have worked on residential, commercial, and hospitality
                    projects of varying scales. Our practice is stationed at the
                    conflux of culture, craft, and architecture, capturing the
                    intangibles that impact people. All our projects are a
                    culmination of this understanding that we share with each of
                    our clients and collaborators. We believe that every project
                    comes in with an established context and our responses to
                    them - which is a process in itself - leads to its
                    understanding and to derive solutions which transcend into
                    materiality. This process of decoding the intangibles is
                    something that we completely thrive on and celebrate. Ours
                    is a versatile client portfolio consisting of multinational
                    companies, educational institutes, individuals with varied
                    backgrounds - from business leaders to film personalities -
                    entrepreneurs to influencers. Aligning with our larger
                    purposes of engaging in collaborations to make meaningful
                    spaces - we do get actively involved with the NGOs as well -
                    for pro-bono work. Our work has been featured in print and
                    digitally across various publications. We derive meaning and
                    joy in our journey and consider every project as an
                    opportunity to learn and grow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <p className="card-text fw-medium ">
                <em>
                  Graduate in architecture from the university college of
                  architecture - Andhra university. Craft centric design
                  approach. Weaves spaces with diverse complexities of material
                  and textures.
                </em>
              </p> */}

          {/* <div className="card mt-4 profile-card" style={{ width: "35vw" }}>
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
          </div> */}
        </div>
      </section>
      <section id="contact" className="Contact-section">
        <div className="contactDiv row d-flex justify-content-end m-4 mb-5">
          <div className="col-md-12 m-0 p-0">
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
