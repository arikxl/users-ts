import React, {useState} from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    address: any;
}

export interface UserProps {
    user : User;
}

const UserPreview : React.FC<UserProps> = ( {user}: UserProps) => {

    const [show, setShow] = useState<boolean>(false);
    // const handleToggleModal = () => setShowModal(!showModal);
    const handleCloseModal = () => setShow(false);
    const handleOpenModal = () => setShow(true);

    return (
        <>
            <Card onClick={handleOpenModal}>
                <Card.Title>Username: {user.username}</Card.Title>
                <Card.Body>
                    <p>Email: {user.email}</p>
                    <p>Name: {user.name}</p>
                </Card.Body>
                <Button size="sm">Go to Profile</Button>
            </Card>
            <br />

                <Modal show={show} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Username: {user.username}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Email: {user.email}</p>
                    <p>Name: {user.name}</p>
                    <h3>Address</h3>
                    <p>Street: {user.address.street}</p>
                    <p>City: {user.address.city}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
        </>
    );
};

export default UserPreview;
