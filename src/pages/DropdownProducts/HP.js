import React from 'react'
import { Container,  ListGroup,ListGroupItem,Card, CardColumns, Form,Button } from 'react-bootstrap'
import logo from './img/hp.jpg'
import { FaCartPlus } from 'react-icons/fa';
import { CgDetailsMore } from 'react-icons/cg';

function HP() {
  return (
    <div>
      <Form style={{marginLeft:"120px", marginTop:"40px"}} >
        <h1 >HP</h1>
        </Form>
      
      <Container className="d-flex mt-2">
       
       <CardColumns className="mt-5">
       
       <Card className="mt-3 bg-info" style={{ width: '18rem' }}>
           <Card.Img variant="top" src={logo} />
           <Card.Body>
             <Card.Title>HP spectr x360</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
               the card's content.
             </Card.Text>
           </Card.Body>
           <ListGroup className="list-group-flush">
             <ListGroupItem className="mt-3 bg-info">Cras justo odio</ListGroupItem>
             <ListGroupItem className="mt-3 bg-info">Dapibus ac facilisis in</ListGroupItem>
             <ListGroupItem className="mt-3 bg-info">Vestibulum at eros</ListGroupItem>
           </ListGroup>
           <Card.Body>
           <Button className="mr-2" href="#"> <CgDetailsMore style={{fontSize: "20px"}}/> Details</Button>
           <Button href="#"> <FaCartPlus style={{fontSize: "20px"}}/> Add to cart</Button>
         </Card.Body>
         </Card>

         <Card className="mt-3 bg-info" style={{ width: '18rem' }}>
           <Card.Img variant="top" src={logo} />
           <Card.Body>
             <Card.Title>HP spectr x360</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
               the card's content.
             </Card.Text>
           </Card.Body>
           <ListGroup className="list-group-flush">
             <ListGroupItem className="mt-3 bg-info">Cras justo odio</ListGroupItem>
             <ListGroupItem className="mt-3 bg-info">Dapibus ac facilisis in</ListGroupItem>
             <ListGroupItem className="mt-3 bg-info">Vestibulum at eros</ListGroupItem>
           </ListGroup>
           <Card.Body>
           <Button className="mr-2" href="#"> <CgDetailsMore style={{fontSize: "20px"}}/> Details</Button>
           <Button href="#"> <FaCartPlus style={{fontSize: "20px"}}/> Add to cart</Button>
         </Card.Body>
         </Card>

         <Card className="mt-3 bg-info" style={{ width: '18rem' }}>
           <Card.Img variant="top" src={logo} />
           <Card.Body>
             <Card.Title>HP spectr x360</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
               the card's content.
             </Card.Text>
           </Card.Body>
           <ListGroup className="list-group-flush">
             <ListGroupItem className="mt-3 bg-info">Cras justo odio</ListGroupItem>
             <ListGroupItem className="mt-3 bg-info">Dapibus ac facilisis in</ListGroupItem>
             <ListGroupItem className="mt-3 bg-info">Vestibulum at eros</ListGroupItem>
           </ListGroup>
           <Card.Body>
           <Button className="mr-2" href="#"> <CgDetailsMore style={{fontSize: "20px"}}/> Details</Button>
           <Button href="#"> <FaCartPlus style={{fontSize: "20px"}}/> Add to cart</Button>
         </Card.Body>
         </Card>

         <Card className="mt-3 bg-info" style={{ width: '18rem' }}>
           <Card.Img variant="top" src={logo} />
           <Card.Body>
             <Card.Title>HP spectr x360</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
               the card's content.
             </Card.Text>
           </Card.Body>
           <ListGroup className="list-group-flush">
             <ListGroupItem className="mt-3 bg-info">Cras justo odio</ListGroupItem>
             <ListGroupItem className="mt-3 bg-info">Dapibus ac facilisis in</ListGroupItem>
             <ListGroupItem className="mt-3 bg-info">Vestibulum at eros</ListGroupItem>
           </ListGroup>
           <Card.Body>
           <Button className="mr-2" href="#"> <CgDetailsMore style={{fontSize: "20px"}}/> Details</Button>
           <Button href="#"> <FaCartPlus style={{fontSize: "20px"}}/> Add to cart</Button>
         </Card.Body>
         </Card>

         <Card className="mt-3 bg-info" style={{ width: '18rem' }}>
           <Card.Img variant="top" src={logo} />
           <Card.Body>
             <Card.Title>HP spectr x360</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
               the card's content.
             </Card.Text>
           </Card.Body>
           <ListGroup className="list-group-flush">
             <ListGroupItem className="mt-3 bg-info">Cras justo odio</ListGroupItem>
             <ListGroupItem className="mt-3 bg-info">Dapibus ac facilisis in</ListGroupItem>
             <ListGroupItem className="mt-3 bg-info">Vestibulum at eros</ListGroupItem>
           </ListGroup>
           <Card.Body>
           <Button className="mr-2" href="#"> <CgDetailsMore style={{fontSize: "20px"}}/> Details</Button>
           <Button href="#"> <FaCartPlus style={{fontSize: "20px"}}/> Add to cart</Button>
         </Card.Body>
         </Card>

         <Card className="mt-3 bg-info" style={{ width: '18rem' }}>
           <Card.Img variant="top" src={logo} />
           <Card.Body>
             <Card.Title>HP spectr x360</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
               the card's content.
             </Card.Text>
           </Card.Body>
           <ListGroup className="list-group-flush">
             <ListGroupItem className="mt-3 bg-info">Cras justo odio</ListGroupItem>
             <ListGroupItem className="mt-3 bg-info">Dapibus ac facilisis in</ListGroupItem>
             <ListGroupItem className="mt-3 bg-info">Vestibulum at eros</ListGroupItem>
           </ListGroup>
           <Card.Body>
           <Button className="mr-2" href="#"> <CgDetailsMore style={{fontSize: "20px"}}/> Details</Button>
           <Button href="#"> <FaCartPlus style={{fontSize: "20px"}}/> Add to cart</Button>
         </Card.Body>
         </Card>
       </CardColumns>
    
   </Container>
    </div>
  )
}

export default HP

