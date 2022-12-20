import './CommentCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
 
const CommentCard=({story})=>{
    return(
      <div className='comment-card'>
        <Card >
          <Card.Body>
              <Card.Title><h2><i>ON:</i> {story.story_title}</h2></Card.Title>
              <Card.Text>Author: {story.author} &nbsp;|&nbsp;  &nbsp; {story.points}  points </Card.Text>
          </Card.Body>
          <Card.Footer> {story.comment_text}
              <Button variant='success' size='sm' href={story.story_url}>Read news</Button>
          </Card.Footer>
        </Card>
    </div>
    );
};
export default CommentCard;
 

