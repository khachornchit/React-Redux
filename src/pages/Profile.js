import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function github() {
    window.open('https://github.com/khachornchit');
}

const Profile = () => {

    return (
        <Container className={'profile'}>
            <h1>Github</h1>
            <Link onClick={github} to={''}>
                github.com/khachornchit
            </Link>
        </Container>
    )
}

export default Profile
