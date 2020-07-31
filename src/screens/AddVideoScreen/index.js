import React from 'react';
import Container from '../../componets/Container';
import { Form, Input } from '../../componets/Form';

const AddVideoScreen = () => {
    return (
        <Container>
            <Form>
                <h1>Add Video Page</h1>
                <Input
                    name="name"
                    type="text"
                />
            </Form>
        </Container>
    );
}

export default AddVideoScreen;