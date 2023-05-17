import { Container, Row, Col, Accordion, Image } from "../../utilis/Bootstrap.js";

export default function Services() {

  const imgUri = process.env.PUBLIC_URL;

  return (
    <section id="services">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={11} lg={9} xl={8}>
            <h2>Services</h2>
            <p>Here are the details about my available editorial services. Please get in touch with questions, or if you're looking for something specific that might not be mentioned below. I'm happy to tailor my work to suit your needs, whether you're an author, illustrator, publisher, or agent.</p>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mt-4">
          <Col xs={11} lg={10} className="mt-4">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <Image src={`${imgUri}/images/site/services-author.webp`}
                      height="200"
                      alt=""
                      className="me-3 d-none d-md-block" />                  
                  
                  <div className="service-content">
                    <h3>Authors</h3>
                  
                    <ul>
                      <li><em>Free initial manuscript review</em></li>
                      <li><em>Query/proposal/synopsis critiques and editing</em></li>
                      <li><em>Manuscript critiques</em></li>
                      <li><em>In-depth, multi-round developmental editing</em></li>
                      <li><em>Coaching and consulting</em></li>
                    </ul>
                  </div>
                </Accordion.Header>

                <Accordion.Body>
                  <h4>Rates:</h4>
                  <p>I will conduct a <strong>free initial review</strong> of up to ten double-spaced pages of your manuscript and respond with a suggested action plan for your project should I determine I'm the right editor for it. If your work is not a good fit with Catherine Frank Editorial Services, LLC for any reason, written declination will be sent via email within 10 business days of receipt.</p>
                  
                  <h4>Query, proposal, and synopsis critiques and/or editing</h4>
                  <p>Available at an hourly rate of $150. Deliverables generally include a line-edited Word document, brief additional written notes as needed, and the option for follow-up questions via email or by phone. Please allow up to three hours for this service. Query editing may be included with multi-round developmental manuscript editing upon request and may also be added to other services. Payment is due upon completion of the work and receipt of an invoice.</p>

                  <h4>Short-term or smaller editorial projects</h4>
                  <p>An hourly rate of $125 is available on a limited basis. A minimum of one hour is required, and an estimate will be provided prior to any work. Please note that this rate is reserved for single-round editing of short texts and other small projects only and is applied at Catherine Frank Editorial Services, LLC's discretion. An example of a smaller project might be a single round of editing for a picture book text. Deliverables may include written notes, margin notes in a Word document, and/or a follow-up phone call. Payment is due upon completion of the work and receipt of an invoice.</p>

                  <h4>Large scale or in-depth projects</h4>
                  <p>A flat fee will be charged. This might include single-round feedback for manuscripts longer than 4,000 words or deeper, multi-round developmental editing, which typically involves three rounds of deliverables such as a detailed editorial letter, manuscript line-editing in a Word document, and a final batch of notes and manuscript polishing. Follow-up phone calls are included with each round of work and communication between rounds of work via email is strongly encouraged. Single-round flat fees begin at $750 for picture book texts and $1,700 for longer fiction and nonfiction. Deeper, multi-round developmental editing (as described above) rates begin at $1,000 for picture book texts and $2,800 for longer fiction and nonfiction. All flat fee rates are subject to adjustment based on the size and scope of the project and will be mutually agreed upon in writing prior to any work. Payment terms will be set prior to any work. Payment is generally divided into segments and due at specified points during the course of work and upon completion.</p>

                  <h4>Coaching and consulting services</h4>
                  <p>For writers seeking either one-time general career/craft advice or on-going, dedicated personal support are available at an hourly rate of $195. A minimum of one hour is required. Flat fees or retainers also are available for on-going coaching work. All rates and fees will be mutually agreed upon in writing prior to any work and may be renegotiated as needed over the course of work.</p>
                  
                
                  <h3 className="mt-5">Submission Policy for Authors:</h3>
                  <h4>Picture book texts</h4>
                  <p>Please <a href='mailto:catherine@editedbycatherine.com?subject=Author query about editorial work'>email me</a> the complete text as a Word or pdf attachment. Please <strong>do not</strong> include a synopsis longer than three sentences, either in the attachment or in your email.</p>
                  
                  <h4>Longer fiction and nonfiction</h4>
                  <p>Please <a href='mailto:catherine@editedbycatherine.com?subject=Author query about editorial work'>email me</a> an one-page synopsis and the first 10 pages of the text as a Word or pdf attachment. Please <strong>do not</strong> include a synopsis or outline longer than one page.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          <Col xs={11} lg={10} className="mt-4">
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <Image src={`${imgUri}/images/site/services-illustrator.webp`}
                      height="200"
                      alt=""
                      className="me-3 d-none d-md-block" />                 
                  
                  <div className="service-content">
                    <h3>Illustrators</h3>
                    <ul>
                      <li><em>Portfolio critiques and reviews</em></li>
                      <li><em>Proposal/query evaluations and critiques</em></li>
                      <li><em>General career consultation</em></li>
                    </ul>
                  </div>
                </Accordion.Header>

                <Accordion.Body>
                  <h4>Artist portfolio review</h4>
                  <p>By appointment only. Please <a href='mailto:catherine@editedbycatherine.com?subject=Artist query about editorial consultation'><em>email me</em></a> for details.</p>  
              
                  <h4>Rates:</h4>
                  <p>Artist portfolio reviews are available at $250/session.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>


          <Col xs={11} lg={10} className="mt-4">
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <Image src={`${imgUri}/images/site/services-publisher.webp`}
                      height="200"
                      alt=""
                      className="me-3 d-none d-md-block" />
                  
                  <div className="service-content">
                    <h3>Publishers</h3>
                    <ul>
                      <li><em>Full-service project editing</em></li>
                      <li><em>Manuscript consultation and troubleshooting</em></li>
                      <li><em>Adaptation of published adult books into young readers’ editions</em></li>
                    </ul>
                  </div>
                </Accordion.Header>

                <Accordion.Body>
                  <p>Please visit my <a href="https://www.editedbycatherine.com/index.php?page=portfolio">Portfolio page</a> to review a selection of titles I've recently worked on with a range of trade publishers. I have extensive experience collaborating with in-house editorial teams, serving as lead editor for individual titles, troubleshooting and revising challenging or orphaned projects, and successfully meeting tight schedules.</p>
                  <p>I also have significant experience adapting award-winning and best-selling adult books into successful young readers' editions. Please visit my <a href="https://www.editedbycatherine.com/index.php?page=portfolio">Portfolio page</a> to review a selection of adaptations I've either edited or adapted.</p>
                  <p>Please <a href="mailto:catherine@editedbycatherine.com?subject=Query about freelance editorial work"><em>email me</em></a> to talk about how I may help your editorial team.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>


          <Col xs={11} lg={10} className="mt-4">
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                <Image src={`${imgUri}/images/site/services-agent.webp`}
                      height="200"
                      alt=""
                      className="me-3 d-none d-md-block" />

                  <div className="service-content">
                    <h3>Agents</h3>
                    <ul>
                      <li><em>Manuscript evaluations</em></li>
                      <li><em>Manuscript consultation</em></li>
                      <li><em>Author and illustrator career strategy consultation</em></li>
                    </ul>
                  </div>
                </Accordion.Header>

                <Accordion.Body>
                  <p>I have extensive experience working with authors, illustrators, and agents to guide projects toward acquisition. I’m available to provide feedback about manuscripts, to serve as a sounding board for authors and agents, and to offer other editorial support as needed.</p>
                  <p>Please <a href="mailto:catherine@editedbycatherine.com?subject=Query about freelance editorial work"><em>email me</em></a> to talk about how I may help your team and your clients.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

        </Row>
      </Container>
    </section>    
  )
}

