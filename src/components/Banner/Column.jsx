
import { Col } from "../../utils/Bootstrap.jsx";

export default function Column ( {text} ) {

  return (
    <>
      <Col xs={11} lg={9}>
        <div className="container-inner">
          {text}
        </div>
      </Col>
    </>
  )
}