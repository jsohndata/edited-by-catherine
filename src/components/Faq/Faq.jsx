import { Container, Row, Col, Accordion } from "../../utilis/Bootstrap.jsx";

export default function Faq() {
  
  return (
    <section id="faq">
      <Container>
        <Row className="d-flex justify-content-center">
            <Col xs={11} lg={9} xl={8}>
              <h2 className="text-center">Frequently Asked Questions</h2>
            </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col xs={11} lg={9} xl={8} className="mt-4">
              <Accordion flush>
              <Accordion.Item eventKey="0" className="mt-3">
                <Accordion.Header>
                  <p><strong>What do I do if I haven't heard back from you after I've submitted my query?</strong></p>
                </Accordion.Header>

                <Accordion.Body>
                  <p><strong>I respond to all queries via email within ten business days. Whether I'm a good match for your project or I don't feel I'm a good fit, I will let you know. If you have not heard from me within ten business days you should re-send your query. Emails do occasionally go astray, so it's ok to follow-up with me.</strong></p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="mt-3">
                <Accordion.Header>
                  <p><strong>How long does it take you to turn around a project?</strong></p>
                </Accordion.Header>

                <Accordion.Body>
                  <p>Once I begin working on a project, it typically takes me about three weeks to deliver my notes. Sometimes it takes me less time, especially with a shorter manuscript. But I allow myself three weeks to leave plenty of time for reading, thinking, and drafting my notes.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="mt-3">
                <Accordion.Header>
                  <p><strong>What is your lead time? Can you work on my project NOW?</strong></p>
                </Accordion.Header>

                <Accordion.Body>
                  <p>My lead time varies, but I typically book projects between 6 weeks and 2 months in advance of the start date. You shouldn't expect a query to result in an immediate start date. I will do my best to accommodate your schedule whenever possible, though.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3" className="mt-3">
                <Accordion.Header>
                  <p><strong>Can you help me query agents or publishers?</strong></p>
                </Accordion.Header>

                <Accordion.Body>
                  <p>I can help you draft and edit your query letter and/or book proposal and I can help you with researching which publisher or agency might be a good fit for you. I do not guarantee that I will put you in direct contact with specific agents or editors.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4" className="mt-3">
                <Accordion.Header>
                  <p><strong>Will you write or revise my manuscript for me?</strong></p>
                </Accordion.Header>

                <Accordion.Body>
                  <p>No. I'm strictly an editor, not a book doctor or ghost writer. I will read and critique your manuscript, analyze it, and help you consider it from a new perspective as you prepare to revise, develop, and polish your story. I do ask a lot of questions, make suggestions, and help you find your way during revisions, but I leave the writing to you.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5" className="mt-3">
                <Accordion.Header>
                  <p><strong>How quickly will our work together be completed?</strong></p>
                </Accordion.Header>

                <Accordion.Body>
                  <p>The speed at which I complete a project almost always depends on how quickly an author revises and how deeply we're working on a manuscript. Revision takes time. The editorial process is time consuming and shouldn't be hurried. I do not dictate concrete deadlines (unless an author requests one!), but prefer to use target dates that are agreeable for everyone involved.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6" className="mt-3">
                <Accordion.Header>
                  <p><strong>Will you copy edit my manuscript?</strong></p>
                </Accordion.Header>

                <Accordion.Body>
                  <p>I'm a content editor, not a copy editor. Copyediting and proofreading are essential for every manuscript and that type of work is a specialized skill. I do my best to catch typos, grammatical errors, and punctuation problems when I'm polishing a manuscript, but a text I've edited is not considered copyedited.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7" className="mt-3">
                <Accordion.Header>
                  <p><strong>Do you have flexible work hours?</strong></p>
                </Accordion.Header>

                <Accordion.Body>
                  <p>Catherine Frank Editorial Services is my full-time job and I strive to keep to standard business hours (Central time) Monday through Friday. I do make exceptions on an as-needed basis, but it's my preference to stick to regular office hours.</p>
                </Accordion.Body>
              </Accordion.Item>  

              <Accordion.Item eventKey="8" className="mt-3">
                <Accordion.Header>
                  <p><strong>What is your preferred method of payment?</strong></p>
                </Accordion.Header>

                <Accordion.Body>
                  <p>Payment via Venmo to @CatherineFrankEditorial is strongly preferred. Payment by check (payable to: Catherine Frank Editorial Services, LLC) is accepted. Wire transfers, Zelle, and PayPal are available payment methods. Authors are responsible for any associated fees. Please do not send cash.</p>
                </Accordion.Body>
              </Accordion.Item>  

              <Accordion.Item eventKey="9" className="mt-3">
                <Accordion.Header>
                  <p><strong>Does your position with Peachtree Publishers affect our work together? What about conflict of interest?</strong></p>
                </Accordion.Header>

                <Accordion.Body>
                  <p>In addition to my work at Catherine Frank Editorial Services, LLC, I am Editor at Large for Peachtree Publishing, a role I currently fulfill in a part-time capacity. In my Peachtree position I acquire and edit only in the middle grade category, with a focus on fiction. If your manuscript falls outside of the middle grade category, there is no conflict. To avoid conflict of interest within the middle grade category, I do not accept unsolicited or unagented manuscripts for submission at Peachtree. In the unlikely event that an agent were to submit a manuscript to me that I have previously worked on in a freelance editorial capacity, the involved parties would mutually agree to the best path forward, including the possibility of resubmitting to a different editor of middle grade fiction at Peachtree.</p>
                </Accordion.Body>
              </Accordion.Item>  

            </Accordion>
            </Col>
        </Row>
      </Container>
    </section>
  )
}