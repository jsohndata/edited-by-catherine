import { useState } from "react";
import {Col, Card, Modal, Image} from "../../utilis/Bootstrap.js";


export default function GalleryCard({ data: {id, title, author, cover, content, website} }) {
  const[showModal, setShowModal] = useState(false);

  const toggleShowModal = () => setShowModal(!showModal);

  return (
    <Col sm={6} lg={4} xl={3} 
      className="button-effect"
      onClick={toggleShowModal}>
      <Card>        
        <figure>
          <Card.Img 
            src={cover} alt={title} className="rounded-0" />
        </figure>
        
        <Card.Body>
          <h3>{title}</h3>
          <p>By {author}</p>

          <Modal
            size="lg"
            show={showModal}
            onHide={toggleShowModal}
            className="backdrop-effect portfolio-modal">
            
            <div className="              
              d-flex
              flex-column
              flex-lg-row
              portfolio-modal-content">
              <Image 
                src={cover}
                alt=""
                className="modal-image d-block" />

              <div>
                <h3>{title}</h3>                
                <p dangerouslySetInnerHTML={{ __html: content }}></p>
                <p>{website}</p>
              </div>  
            </div>
          </Modal>                     
        </Card.Body>
      </Card>
    </Col>
  )
}
