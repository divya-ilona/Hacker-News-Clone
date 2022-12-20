import './CommentCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import time from '../../utils/timehelper';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
 
const CommentCard=({comment})=>{
  console.log(comment);
    return(
      <div className='comment-card'>
        <Card >
          <Card.Body>
              <Card.Title><h4><i>On:</i> {comment.story_title}</h4></Card.Title>
              <Card.Text>Author: {comment.author} &nbsp;|&nbsp; {comment.points===null? 0:comment.points}  points&nbsp;|&nbsp; {time(comment.created_at)} </Card.Text>
          </Card.Body>
          <Card.Footer> {comment.comment_text}&nbsp;&nbsp;
              <Button variant='success' size='sm' href={comment.story_url}>Read news</Button>
          </Card.Footer>
        </Card>
    </div>
    );
};
export default CommentCard;
 

