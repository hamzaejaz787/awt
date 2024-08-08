import LoadingSpinner from "../Components/LoadingSpinner";
import ImagesSlider from "../Components/ImagesSlider";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { GetGalleryItems } from "../data/GetData";
import { getStrapiURL } from "../lib/utils";
import { Link } from "react-router-dom";
import pdfURL from "../assets/AWT-Corporate-Profile.pdf";

const Media = () => {
  const baseurl = getStrapiURL();

  const { data, error, isPending } = GetGalleryItems();

  if (isPending) return <LoadingSpinner />;
  if (error) return "An error occured!!";

  return (
    <>
      <section className="commonbg">
        <Container>
          <Row>
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  Our <span>Gallery</span>
                </h1>

                <Breadcrumb>
                  <Breadcrumb.Item href="/" className="">
                    Home
                  </Breadcrumb.Item>

                  <Breadcrumb.Item active>Gallery</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section className="aboutusbox">
        <Container>
          <Row>
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading">AWT</span>
                <h2>Inspiring Lives with Dignified Service</h2>
                <p>
                  Discover the scenic stories of manpowers’ struggle,
                  resilience, and diligence by exploring the gallery of Army
                  Welfare Trust. Witness the success our subsidiaries have
                  achieved so far!
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <Container>
        <div className="my-5 mx-auto">
          <Row>
            {data.map((card) => (
              <Col
                key={card.id}
                lg={4}
                md={6}
                xs={12}
                className="mb-4 service-card"
              >
                <Link to={`/media/${card.slug}`}>
                  <div className="card service-card p-0 overflow-hidden border-0 gallery-card overflow-hidden rounded-3">
                    <img
                      src={`${baseurl}${card.cover.url}`}
                      alt={card.cover.alternativeText || ""}
                      className="w-100 h-100"
                      loading="lazy"
                      width={card.cover.width}
                      height={card.cover.height}
                    />

                    <div className="p-3 text-center">
                      <h3>{card?.title}</h3>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      <section className="aboutusbox">
        <Container>
          <Row>
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading">AWT</span>
                <h2>Corporate Profile 2022</h2>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <Container>
        <Row>
          <div className="col-lg-12 text-center">
            <object
              data={pdfURL}
              type="application/pdf"
              width="100%"
              height="600px"
            >
              <p>
                Your browser does not support PDFs. You can download the PDF
                file <a href={pdfURL}>here</a>.
              </p>
            </object>
          </div>
        </Row>
      </Container>

      <section className="spaceupdowngray">
        <ImagesSlider />
      </section>
    </>
  );
};

export default Media;
