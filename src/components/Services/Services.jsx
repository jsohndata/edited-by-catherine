import { Container, Row, Col, Accordion, Image } from "../../utils/Bootstrap.jsx";
import { Link } from "react-router-dom";

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
                  <Image src={`${imgUri}/images/site/services-authors.webp`}
                      height="200"
                      alt=""
                      className="me-3 d-none d-md-block" />                  
                  
                  <div className="service-content">
                    <h3>Authors</h3>
                  
                    <ul>
                      <li><em>Free initial manuscript review</em></li>
                      <li><em>Query/proposal/synopsis critiques and editing</em></li>
                      <li><em>Coaching and consulting</em></li>
                      <li><em>Manuscript critiques</em></li>
                      <li><em>In-depth, multi-round developmental editing</em></li>                      
                    </ul>
                  </div>
                </Accordion.Header>

                <Accordion.Body>
                  <h4>Rates:</h4>
                  <p>I will conduct a <strong>free initial review</strong> of up to ten double-spaced pages of your manuscript and respond with a suggested action plan for your project should I determine I'm the right editor for it. If your work is not a good fit with Catherine Frank Editorial Services, LLC for any reason, written declination will be sent via email within 10 business days of receipt.</p>
                  
                  <h4>Query, proposal, and synopsis critiques and/or editing</h4>
                  <p>Available at an hourly rate of $150. Deliverables generally include a line-edited Word document, brief additional written notes as needed, and the option for follow-up questions via email or by phone. Please allow up to three hours for this service. Query editing may be included with multi-round developmental manuscript editing upon request and may also be added to other services. Payment is due upon completion of the work and receipt of an invoice.</p>

                  <h4>Coaching and consulting services</h4>
                  <p>For writers seeking either one-time general career/craft advice or ongoing, dedicated personal support, consulting services are available at an hourly rate of $195. A minimum of one hour is required. Flat fees or retainers also are available for ongoing coaching work. All rates and fees will be mutually agreed upon in writing prior to any work and may be renegotiated as needed over the course of work.</p>

                  <h4>Short-term or smaller editorial projects</h4>
                  <p>An hourly rate of $150 is available on a limited basis. A minimum of one hour is required, and an estimate will be provided prior to any work. Please note that this rate is reserved for single-round editing of short texts and other small projects only and is applied at Catherine Frank Editorial Services, LLC's discretion. Deliverables may include written notes, margin notes in a Word document, and/or a follow-up phone call. Payment is due upon completion of the work and receipt of an invoice.</p>

                  <h4>Large scale or in-depth projects</h4>
                  <p>A flat fee will be charged. This might include single-round feedback for manuscripts longer than 4,000 words or deeper, multi-round developmental editing, which typically involves three rounds of deliverables such as a detailed editorial letter, manuscript line-editing in a Word document, and a final batch of notes and manuscript polishing. Follow-up phone calls are included with each round of work and communication between rounds of work via email is strongly encouraged. Single-round flat fees begin at $750 for picture book texts and $1,700 for longer fiction and nonfiction. Deeper, multi-round developmental editing (as described above) rates begin at $1,000 for picture book texts and $2,800 for longer fiction and nonfiction. All flat fee rates are subject to adjustment based on the size and scope of the project and will be mutually agreed upon in writing prior to any work. Payment terms will be set prior to any work. Payment is generally divided into segments and due at specified points during the course of work and upon completion.</p>

                  
                  
                
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
                  <Image src={`${imgUri}/images/site/services-illustrators.webp`}
                      height="200"
                      alt=""
                      className="me-3 d-none d-md-block" />                 
                  
                  <div className="service-content">
                    <h3>Illustrators</h3>
                    <ul>
                      <li><em>Portfolio critique and review</em></li>
                      <li><em>Proposal/query evaluation and critique</em></li>
                      <li><em>Coaching and consulting services</em></li>
                    </ul>
                  </div>
                </Accordion.Header>

                <Accordion.Body>
                  <h4>Portfolio Critique and Review</h4>
                  <p>Available at $250/session. By appointment only. Deliverables may include written notes and a meeting to discuss portfolio strengths and weaknesses in the current illustration market. Payment is due upon completion of the work and receipt of an invoice.</p>  
              
                  <h4>Proposal/query Evaluation</h4>
                  <p>Available at an hourly rate of $150. Deliverables generally include a line-edited Word document, brief additional written notes as needed, and the option for follow-up questions via email or by phone. Please allow up to three hours for this service. Query editing may also be added to other services. Payment is due upon completion of the work and receipt of an invoice.</p>

                  <h4>Coaching and Consulting Services</h4>
                  <p>For illustrators seeking either one-time general career/craft advice or on-going, dedicated personal support. These services are available at an hourly rate of $195. A minimum of one hour is required. Flat fees or retainers also are available for on-going coaching work. All rates and fees will be mutually agreed upon in writing prior to any work and may be renegotiated as needed over the course of work.</p>
                  <p>Please <a href='mailto:catherine@editedbycatherine.com'>email me</a> for details.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>


          <Col xs={11} lg={10} className="mt-4">
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <Image src={`${imgUri}/images/site/services-publishers.webp`}
                      height="200"
                      alt=""
                      className="me-3 d-none d-md-block" />
                  
                  <div className="service-content">
                    <h3>Publishers</h3>
                    <ul>
                      <li><em>Full-service project editing</em></li>
                      <li><em>Manuscript consultation and troubleshooting</em></li>
                      <li><em>Adaptation of published adult books into young readers' editions</em></li>
                    </ul>
                  </div>
                </Accordion.Header>

                <Accordion.Body>
                  <h4>Full-service Project Editing</h4>
                  <p>I have extensive experience collaborating with in-house editorial teams, serving as lead editor for individual titles, and successfully meeting tight schedules. Please visit my <Link to="/#portfolio">Portfolio</Link> to review a selection of recent books I've edited.</p>

                  <h4>Manuscript Consultation and Troubleshooting</h4>
                  <p>I'm experienced in guiding challenging projects and orphaned projects through the complete production process, and in serving as a temporary or substitute editor on an as-needed basis.</p>

                  <h4>Adaptation Services</h4>
                  <p>I have significant experience adapting award-winning and best-selling adult books into successful young readers' editions for major trade publishers. Please visit my <Link to="/#portfolio">Portfolio</Link> to review a selection of books I've adapted.</p>

                  <p>Please <a href="mailto:catherine@editedbycatherine.com">email me</a> to talk about how I may help your editorial team.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>


          <Col xs={11} lg={10} className="mt-4">
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                <Image src={`${imgUri}/images/site/services-agents.webp`}
                      height="200"
                      alt=""
                      className="me-3 d-none d-md-block" />

                  <div className="service-content">
                    <h3>Agents</h3>
                    <ul>
                      <li><em>Manuscript consultation</em></li>
                      <li><em>Manuscript evaluation</em></li>
                    </ul>
                  </div>
                </Accordion.Header>

                <Accordion.Body>
                  <h4>Manuscript Consultation</h4>
                  <p>I'm available to provide feedback about manuscripts to agents and directly to authors, to serve as a sounding board or provide a second editorial opinion, and to offer other editorial support as needed.</p>

                  <h4>Manuscript Evaluation</h4>
                  <p>I have extensive experience working with authors, illustrators, and agents to guide projects toward acquisition. I'm available to evaluate manuscripts and offer editorial feedback.</p>

                  <p>Please <a href="mailto:catherine@editedbycatherine.com"><em>email me</em></a> to talk about how I may help your team and your clients.</p>                  
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

        </Row>
      </Container>
    </section>    
  )
}

