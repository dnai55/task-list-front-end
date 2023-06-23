import React, { useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_FORM_DATA = {
    title: '',
    description: '',
    is_complete: false
}

const NewTaskForm = ({postTask}) => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const handleChange = (event) => {
        const newFormData = {
            ...formData, [event.target.name]: event.target.value
        };
        setFormData(newFormData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postTask(formData);
        setFormData(INITIAL_FORM_DATA);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Task Name</label>
            <input
                required
                type="text"
                id="title"
                name="title"
                value={formData.name}
                onChange={handleChange}/>
            <label htmlFor="description">Description</label>
            <input
                type="text"
                id="description"
                name="description"
                value={formData.rating}
                onChange={handleChange}/>
            <input type='submit' value = 'submit' />
        </form>
    );
};

NewTaskForm.propTypes = {
    postTask: PropTypes.func.isRequired,
};

export default NewTaskForm;