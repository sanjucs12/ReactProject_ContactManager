import React from "react";
import image from "../images/user.png";
import { Card, Button, Row, Col } from "react-bootstrap";

const ContactCard = (props) => {
//   const { id, name, email } = props.contact;
  const name = props.name;
  const email=props.email;

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs={2} md={1} className="d-flex align-items-center">
            <img
              src={image}
              alt="user image"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "50px" }}
            />
          </Col>
          <Col>
            <div>{name}</div>
            <div>{email}</div>
          </Col>
          <Col className="text-right">
            <Button variant="danger" onClick={()=>{props.clickHandler(props.id)}}>
              <i className="trash alternate outline icon" />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;

// import React from "react";

// const ContactCard = (props) => {
//   const { id, name, email } = props.contact;
//   return (
//     <div className="item">
//       <div className="content">
//         <div className="header">{name}</div>
//         <div>{email}</div>
//       </div>
//   <i className="trash alternate outline icon"></i>
//     </div>
//   );
// };
// export default ContactCard;
