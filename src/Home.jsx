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

  const AandH_Web = Array.from(
    { length: 9 },
    (_, index) => `/WORKS/ANITA_HARSHA/${index + 1}.webp`
  );

  const AandS_Web = Array.from(
    { length: 34 },
    (_, index) => `/WORKS/ANU_SASHI/${index + 1}.webp`
  );
  const CandS_Web = Array.from(
    { length: 58 },
    (_, index) => `/WORKS/CHARU-SRINIVASAN/${index + 1}.webp`
  );
  const RandP_Web = Array.from(
    { length: 52 },
    (_, index) => `/WORKS/RAMA-PRADEEP/${index + 1}.webp`
  );
  const SandS_Web = Array.from(
    { length: 64 },
    (_, index) => `/WORKS/SHANTHI-SRINIVAS/${index + 1}.webp`
  );
  const AandS = Array.from(
    { length: 6 },
    (_, index) => `/WORKS1/ANU_SASHI/${index + 1}.webp`
  );
  const AandH = Array.from(
    { length: 8 },
    (_, index) => `/WORKS1/ANITHA_HARSHA/${index + 1}.webp`
  );
  const AN = Array.from(
    { length: 6 },
    (_, index) => `/WORKS1/AZIZ_NAGAR/${index + 1}.webp`
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
      case "AandH_Web":
        setModalData({ images: AandH_Web });
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
                fetchpriority="high"
                src={isMobile ? "/MOBILE/1.webp" : "/WEB/1.webp"}
                className="d-block w-100"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/2.webp" : "/WEB/2.webp"}
                className="d-block w-100"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/3.webp" : "/WEB/3.webp"}
                className="d-block w-100"
                alt="Slide 3"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/4.webp" : "/WEB/4.webp"}
                className="d-block w-100"
                alt="Slide 4"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/5.webp" : "/WEB/5.webp"}
                className="d-block w-100"
                alt="Slide 5"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/6.webp" : "/WEB/6.webp"}
                className="d-block w-100"
                alt="Slide 6"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/7.webp" : "/WEB/7.webp"}
                className="d-block w-100"
                alt="Slide 7"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/8.webp" : "/WEB/8.webp"}
                className="d-block w-100"
                alt="Slide 8"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/9.webp" : "/WEB/9.webp"}
                className="d-block w-100"
                alt="Slide 9"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/10.webp" : "/WEB/10.webp"}
                className="d-block w-100"
                alt="Slide 10"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/11.webp" : "/WEB/11.webp"}
                className="d-block w-100"
                alt="Slide 11"
              />
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                src={isMobile ? "/MOBILE/12.webp" : "/WEB/12.webp"}
                className="d-block w-100"
                alt="Slide 12"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselDemo"
            data-bs-slide="prev"
            aria-label="Previous Slide"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselDemo"
            data-bs-slide="next"
            aria-label="Next Slide"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
          <div className="carousel-indicators">
            <button
              type="button"
              className="active"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="0"
              aria-label="Slide 0"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="1"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="2"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="3"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="4"
              aria-label="Slide 4"
              style={{ display: "none" }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="5"
              style={{ display: "none" }}
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="6"
              style={{ display: "none" }}
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="7"
              style={{ display: "none" }}
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="8"
              style={{ display: "none" }}
              aria-label="Slide 8"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="9"
              style={{ display: "none" }}
              aria-label="Slide 9"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="10"
              style={{ display: "none" }}
              aria-label="Slide 10"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="11"
              style={{ display: "none" }}
              aria-label="Slide 11"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="12"
              style={{ display: "none" }}
              aria-label="Slide 12"
            ></button>
          </div>
        </div>
      </section>

      <section className="works-section">
        <div className="text-start ">
          <h2 id="work">WORKS</h2>
        </div>
        {!isMobile ? (
          <div className="row">
            <div className="col-sm-6">
              <div className="card mt-4" onClick={() => openModal("AandH_Web")}>
                <img
                  loading="lazy"
                  src="/WORKS/ANITA_HARSHA/home.webp"
                  className=""
                  alt="Anita and Harsha Bhogle's Residence"
                />
              </div>
              <div className="col clientNames text-start mt-1">
                <span className="fw-medium">
                  ANITA AND HARSHA BHOGLE'S RESIDENCE
                </span>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card mt-4" onClick={() => openModal("CandS_Web")}>
                <img
                  loading="lazy"
                  src="/WORKS/CHARU-SRINIVASAN/home.webp"
                  className=""
                  alt="Charu and Srinivasan's Residence"
                />
              </div>
              <div className="col clientNames text-start mt-1">
                <span className="fw-medium">CHARU AND SRINI'S RESIDENCE</span>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card mt-4" onClick={() => openModal("AandS_Web")}>
                <img
                  loading="lazy"
                  src="/WORKS/ANU_SASHI/27.webp"
                  className="img-fluid"
                  alt="ANU & SASHI'S Residence"
                />
              </div>
              <div className="col clientNames text-start mt-1">
                <span className="fw-medium">
                  ANU AND SASHI&apos;S RESIDENCE
                </span>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card mt-4" onClick={() => openModal("RandP_Web")}>
                <img
                  loading="lazy"
                  src="/WORKS/RAMA-PRADEEP/home.webp"
                  className=""
                  alt="Rama and Pradeep's Residence"
                />
              </div>
              <div className="col clientNames text-start mt-1">
                <span className="fw-medium">RAMA AND PRADEEP'S RESIDENCE</span>
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <div className="col-sm-6">
                <div
                  className="card mt-4"
                  onClick={() => openModal("SandS_Web")}
                >
                  <img
                    loading="lazy"
                    src="/WORKS/SHANTHI-SRINIVAS/home.webp"
                    className=""
                    alt="Shanti and Srinivas's Residence"
                  />
                </div>
                <div className="col clientNames text-start mt-1">
                  <span className="fw-medium">
                    SHANTI AND SRINIVAS'S RESIDENCE
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-sm-4" onClick={() => openModal("AandH")}>
              <div className="mt-4 card-mag">
                <img
                  loading="lazy"
                  src="/WORKS1/ANITHA_HARSHA/1.webp"
                  className="magazine-cover"
                  alt="Anita and Harsha's Residence"
                />
              </div>
              <div className="col clientNames text-start mt-1">
                <span className="fw-medium">
                  ANITA AND HARSHA BHOGLE&apos;S RESIDENCE
                </span>
              </div>
            </div>

            <div className="col-sm-4" onClick={() => openModal("AN")}>
              <div className="mt-4 card-mag">
                <img
                  loading="lazy"
                  src="/WORKS1/AZIZ_NAGAR/1.webp"
                  className="magazine-cover"
                  alt="Aziz and Nagar's Residence"
                />
              </div>
              <div className="col clientNames text-start mt-1">
                <span className="fw-medium">
                  CHARU AND SRINI&apos;S RESIDENCE
                </span>
              </div>
            </div>

            <div className="col-sm-4" onClick={() => openModal("AandS")}>
              <div className="mt-4 card-mag">
                <img
                  loading="lazy"
                  src="/WORKS1/ANU_SASHI/1.webp"
                  className="magazine-cover"
                  alt="ANU and Sashi's Residence"
                />
              </div>
              <div className="col clientNames text-start mt-1">
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
                  alt="Rama and Pradeep's Residence"
                />
              </div>
              <div className="col clientNames text-start mt-1">
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
                  alt="Shanti and Srinivas's Residence"
                />
              </div>
              <div className="col clientNames text-start mt-1">
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
        <div className="text-start mt-2">
          <h2 id="publishing">PUBLICATIONS</h2>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-6">
              <a
                href="https://www.indiatoday.in/magazine/supplement/story/20240930-harsha-and-anita-bhogles-home-effortless-charm-2602503-2024-09-21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card mt-5">
                  <img
                    loading="lazy"
                    src="/PUBLICATIONS/2.webp"
                    className=""
                    alt="Anita and Harsha's Residence"
                  />
                </div>
              </a>
              <div className="col clientNames text-start mt-1">
                <span className="fw-medium">India Today</span>
              </div>
            </div>

            <div className="col-sm-6">
              <a
                href="https://www.goodhomes.co.in/home-and-design-trends/centred-around-a-courtyard-this-aziznagar-home-is-breathtaking-9107.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card mt-5">
                  <img
                    loading="lazy"
                    src="/PUBLICATIONS/1.webp"
                    className=""
                    alt="Aziz and Nagar's Residence"
                  />
                </div>
              </a>
              <div className="col clientNames text-start mt-1">
                <span className="fw-medium">Good Homes</span>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-6">
              <a
                href="https://thearchitectsdiary.com/this-hyderabad-house-harmonizes-two-distinct-units-lalith-and-jyothi-architects/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card mt-5">
                  <img
                    loading="lazy"
                    src="/PUBLICATIONS/6.webp"
                    className=""
                    alt="Rama and Pradeep's Residence"
                  />
                </div>
              </a>
              <div className="col clientNames text-start mt-1">
                <span className="fw-medium">The Architect&apos;s Dairy</span>
              </div>
            </div>

            <div className="col-sm-6">
              <a
                href="https://thearchitectsdiary.com/layout-of-the-house-was-reinvented-to-create-well-spaced-rooms-lalith-and-jyothi-architects/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card mt-5">
                  <img
                    loading="lazy"
                    src="/PUBLICATIONS/3.webp"
                    className=""
                    alt="Shanti and Srinivas's Residence"
                  />
                </div>
              </a>
              <div className="col clientNames text-start mt-1">
                <span className="fw-medium">The Architect&apos;s Dairy</span>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-6">
              <a
                href="https://architizer.com/projects/villa-18/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card mt-5">
                  <img
                    loading="lazy"
                    src="/PUBLICATIONS/5.webp"
                    className=""
                    alt="Aziz and Nagar's Residence"
                  />
                </div>
              </a>
              <div className="col clientNames text-start mt-1">
                <span className="fw-medium">Architizer</span>
              </div>
            </div>
            <div className="col-sm-6">
              <a
                href="https://www.archizy.com/magazines/archana-and-ramanas-house-by-lalith-and-jyothi-architects"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card mt-5">
                  <img
                    loading="lazy"
                    src="/PUBLICATIONS/4.webp"
                    className=""
                    alt="Rama and Pradeep's Residence"
                  />
                </div>
              </a>
              <div className="col clientNames text-start mt-1">
                <span className="fw-medium">Archizy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="magazines" className="magazine-section ">
        <div className="mag-div text-start mt-0">
          {/* <h2 id="">MAGAZINES</h2> */}
          <div className="row d-flex justify-content-center">
            <div className="col-sm-4">
              <a
                href="https://www.goodhomes.co.in/home-and-design-trends/centred-around-a-courtyard-this-aziznagar-home-is-breathtaking-9107.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className=" mt-4 card-mag">
                  <img
                    loading="lazy"
                    src="/MAGAZINES/HOME-AND-DEISGN-TRENDS/5.jpg"
                    className="magazine-cover"
                    alt="Anita and Harsha's Residence"
                  />
                </div>
              </a>
            </div>

            <div className="col-sm-4">
              <a
                href="https://www.indiatoday.in/magazine/supplement/story/20240930-harsha-and-anita-bhogles-home-effortless-charm-2602503-2024-09-21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className=" mt-4 card-mag">
                  <img
                    loading="lazy"
                    src="/MAGAZINES/INDIAN-TODAY-HOMES/4.jpg"
                    className="magazine-cover"
                    alt="Anita and Harsha's Residence"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <div className="row mt-2 p-1 d-flex justify-content-center text-center">
          {/* Correct heading order: h2 for section title */}
          <h2 id="profile" className="text-start mb-4">
            PROFILE
          </h2>

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
                  src="/MAGAZINES/HOME-AND-DEISGN-TRENDS/profile.jpg"
                  alt="Lalith and Jyothi"
                  style={{
                    height: isMobile ? "100%" : "80vh",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Text Section */}
              <div className="col-md-8">
                <div className="card-body text-start p-2 pt-3">
                  {/* Change h5 → h3 for proper hierarchy */}
                  <h3
                    className="card-title fw-medium"
                    style={{ fontSize: "1.25rem" }}
                  >
                    Lalith and Jyothi
                  </h3>
                  {/* Change p with fw-medium → h4 for hierarchy */}
                  <h4 className="fw-medium" style={{ fontSize: "1rem" }}>
                    - Architects
                  </h4>
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
        </div>
      </section>

      <section id="contact" className="Contact-section">
        <div className="contactDiv row d-flex justify-content-end m-1 mb-5">
          <div className="col-md-12 m-0 p-0">
            <div className="mt-4 mt-md-0">
              {/* Section heading stays h2 */}
              <h2>Contact</h2>

              <div className="d-flex align-items-center mt-3">
                {/* Address changed from h6 → p */}
                <p className="p-0 m-0 me-4 fw-medium contact-info">
                  Hemu, Vittal Rao Nagar, HITEC City, Hyderabad, Telangana
                  500081
                </p>
              </div>

              <div className="row align-items-center mt-2 p-0">
                <div className="col-12 col-md-auto d-flex align-items-center mb-2 mt-2 mb-md-0">
                  {/* Email changed from h6 → p */}
                  <p className="p-0 m-0 fw-medium contact-info">Lmitta70@gmail.com</p>
                </div>

                <div className="col-12 col-md-auto d-flex align-items-center mt-2">
                  {/* Phone changed from h6 → p */}
                  <p
                    className="p-0 m-0 fw-medium contact-info"
                    style={{ fontSize: "0.9rem" }}
                  >
                    +91-9704475888
                  </p>
                </div>
              </div>

              {/* Google Maps iframe stays the same */}
              <div className="map mt-4">
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30451.228423446337!2d78.3862516!3d17.4403886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c88eb0ddc3%3A0x4e9e70803a44d23f!2sLalith%20and%20Jyothi%20-%20Architects!5e0!3m2!1sen!2sin!4v1728584200552!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: "0", filter: "grayscale(100%)" }}
                    title="Location of Lalith and Jyothi Architects in Hyderabad"
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
