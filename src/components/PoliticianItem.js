import '/Users/noahatanda/Desktop/uiux/Development-Anonymous/src/App.css';
import Card from 'react-bootstrap/Card';
import ListGroup  from 'react-bootstrap/ListGroup';

export function PoliticianItem({item, index, setVotes, votes, updateVotes, removeVotes}){
    return (
        <Card class="card" border="dark" style={{width: '18rem'}}>
            <Card.Body>
                <Card.Header>{item.name}</Card.Header>
                <ListGroup className= "list-group-flush">
                    <ListGroup.Item>{"Age: " + item.age}</ListGroup.Item>
                    <ListGroup.Item>{"Branch: " + item.branch}</ListGroup.Item>
                    <ListGroup.Item>{"Section: " + item.part}</ListGroup.Item>
                    <ListGroup.Item>{"Party: " + item.party}</ListGroup.Item>
                    <ListGroup.Item>{"State: " + item.state}</ListGroup.Item>
                    <ListGroup.Item>{item.votes}</ListGroup.Item>
                </ListGroup>
                <button onClick={()=>{updateVotes(index); setVotes(votes+item.votes)}}>Vote</button>
                <button onClick={()=>{removeVotes(index); setVotes(votes-item.votes)}}>Remove Vote</button>
            </Card.Body>
        </Card>
    );
}