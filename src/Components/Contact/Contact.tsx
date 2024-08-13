import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <div className="container contact-section">
      <Form>
        <h3 className="title">Contact</h3>
        <p className="mb-3 mt-5">
          Feel free to connect with me on social media or write me a message
          below
        </p>

        <p className="mb-5">
          Email: chirangashalitha24@gmail.com | Phone: +94 74 205 7694
        </p>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" placeholder="" rows={3} />
        </Form.Group>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </Form>
    </div>
  );
};

export default Contact;
