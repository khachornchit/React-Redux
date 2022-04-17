import {getUsersFetch} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {Button, ListGroup} from "react-bootstrap";
// import {getUsersRequest} from "./thunks";

export const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.myFirstReducer.users)

    return (
        <div className="App">
            <Button variant={'success'}
                    onClick={() => dispatch(getUsersFetch())}
                    className={'saga-button'}
            >Fetch Users</Button>
            <div className={'saga-description'}>
                Click the fetch users to fetch users by using Redux-Saga in next 2 seconds
            </div>
            <ListGroup>
                {users.map(user => (
                    <ListGroup.Item key={user.name}>{user.name}</ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}
