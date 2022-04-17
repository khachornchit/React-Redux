import {Container, ListGroup, ListGroupItem} from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            <div className={'home'}>
                Demonstrate a simple react application development using the following.

                <ListGroup className={'home-ul'}>
                    <ListGroup.Item>React-Bootstrap</ListGroup.Item>
                    <ListGroup.Item>React-Redux</ListGroup.Item>
                    <ListGroup.Item>Redux-Thunk</ListGroup.Item>
                    <ListGroup.Item>Redux-Saga</ListGroup.Item>
                    <ListGroup.Item>React-Router</ListGroup.Item>
                    <ListGroup.Item>SASS</ListGroup.Item>
                </ListGroup>
            </div>
        </Container>
    )
}

export default Home
