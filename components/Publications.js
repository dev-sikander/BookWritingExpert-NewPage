import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "@/styles/Publication.module.css"

// images
import PublicImage from "public/images/amazonbookpublishing/publication_image.png"
import Image from "next/image";

const Publications = () => {
  return (
    <>
      <section className={styles.Publicsec}>
        <Container>
          <Row>
            <Col lg={12}>
              <h2 class="font50 fw700 text-black text-center mb-4">
                Many Got Featured In Major Publications Just By Working With Us.
              </h2>
              <p className="text-center f20 fw400 mb-5 pb-3">
                Oftentimes, we find ourselves indulging in thoughts that others
                might fascinating. Most of them remain limited to the abyss
                inside our heads. However, some ideas/stories and visions are
                meant for the world to read and study. The ideas develop once
                you write, but the important aspect is to let the world to see
                your work and change mindsets!
              </p>
              <div className="Image">
                <Image src={PublicImage} alt="publicImage" width={1316} height={262}/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Publications;
