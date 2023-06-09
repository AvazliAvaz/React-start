import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import ProgressBar from 'react-bootstrap/ProgressBar';
function Bootstrap() {
return (
  <div>
<Button variant='warning'>Button</Button>
<>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</>
<ProgressBar now={60} />
</div>
)

}
export default Bootstrap;
