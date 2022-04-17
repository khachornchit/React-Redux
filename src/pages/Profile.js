import {Container} from "react-bootstrap";

const Profile = () => {
    return (
        <Container className={'profile'}>
            <h1>Github</h1>
            <a href={'https://github.com/khachornchit'} target={'_blank'} rel={"noopener noreferrer"}>
                github.com/khachornchit
            </a>
        </Container>
    )
}

export default Profile
