import React from 'react';
import { useForm } from 'react-hook-form';
import Container from '../../componets/Container';
import { Form, Input } from '../../componets/Forn';

const AddVideoScreen = () => {
    return (
        <Container>
            <Form>
                <h1>Add Video Page</h1>
                <Input
                    name="name"
                    name="color"
                    type="text"
                />
            </Form>
        </Container>
    );
}

export default AddVideoScreen;