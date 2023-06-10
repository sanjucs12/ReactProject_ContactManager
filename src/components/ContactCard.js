import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>{name}</Col>
          <Col>{email}</Col>
          <Col className="text-right">
            <Button variant="danger">
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
