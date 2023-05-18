
import { Col } from "../../utilis/Bootstrap.js";

export default function Column ( {text} ) {

  return (
    <>
      <Col xs={11} lg={6}>
        <div className="container-inner">
          {text}
        </div>
      </Col>
    </>
  )
}