
import { Col } from "../../utilis/Bootstrap.js";

export default function Column ( {text} ) {

  return (
    <>
      <Col xs={10} lg={6}>
        {text}
      </Col>
    </>
  )
}