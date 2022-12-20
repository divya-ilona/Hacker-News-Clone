import './NewsCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import time from '../../utils/timehelper';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
 
const NewsCard=({story})=>{
    return(
        <div className='news-card'>
          <Card >
            <Card.Body>
              <Card.Title><h3>{story.title}</h3></Card.Title>
              <Card.Text>Author: {story.author} &nbsp;|&nbsp;    {story.num_comments} comments &nbsp;|&nbsp; {story.points===null? 0:story.points}  points &nbsp;|&nbsp; {time(story.created_at)}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant='success' size='sm' href={story.url}>Read this news</Button>
            </Card.Footer>
          </Card>
      </div>
    );
};
export default NewsCard;
 
