import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '../../componets/Container';
import { Button, DangerMessage, Form, FormGroup, FormTitle, Input, Label, TextArea } from '../../componets/Form';
import { ListCategories } from './ListCategories';
import { Flex } from '../../componets/Flex';

const CategoryScreen = () => {
    const { register, handleSubmit, errors, reset } = useForm({ mode: 'onBlur' });
    const { name, description } = errors;
    const [ categories, setCategories ] = useState([]);

    const onSubmit = data => {
        setCategories([...categories, { ...data, id: categories.length + 1}]);
        reset({});
    };

    return (
        <Container>
            <Flex>
                <ListCategories categories={categories}/>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormTitle>
                        Nova categoria
                    </FormTitle>
                    <FormGroup>
                        <Label htmlFor="name">Nome</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Nome da categoria"
                            type="text"
                            className={`${name ? 'error' : ''}`}
                            ref={register({ required: 'O campo nome é obrigatório' })}
                        />
                        {name && <DangerMessage>{name.message}</DangerMessage>}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="color">Cor</Label>
                        <Input
                            id="color"
                            name="color"
                            type="color"
                            className="color"
                            ref={register}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Descrição</Label>
                        <TextArea
                            id="description"
                            name="description"
                            rows={10}
                            className={`${description ? 'error' : ''}`}
                            ref={register({ required: 'O campo descrição é obrigatório' })}
                        />
                        {description && <DangerMessage>{description.message}</DangerMessage>}
                    </FormGroup>
                    <FormGroup className="end">
                        <Button type="submit" className="fit">Cadastrar</Button>
                    </FormGroup>
                </Form>
            </Flex>
        </Container>
    );
}

export default CategoryScreen;