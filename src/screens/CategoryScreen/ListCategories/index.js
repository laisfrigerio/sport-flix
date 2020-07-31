import React from 'react';
import PropTypes from 'prop-types';
import { FormTitle } from '../../../componets/Form';
import { Item, List, Wrapper } from './styles';

export const ListCategories = ({categories}) => {
    if (categories.length === 0) return null;
    return (
        <Wrapper>
            <FormTitle>
                Categorias
            </FormTitle>
            {categories.length > 0 && (
                <List>
                    {categories.map(category => (
                        <Item key={category.id}>{category.name}</Item>
                    ))}
                </List>
            )}
        </Wrapper>
    );
}

ListCategories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}