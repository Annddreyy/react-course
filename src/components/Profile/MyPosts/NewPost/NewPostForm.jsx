import React from 'react';
import classes from './NewPostForm.module.css';
import { Field, reduxForm } from 'redux-form';

const NewPostForm = (props) => {
    return (
        <form className={classes['new-post-form']} onSubmit={ props.handleSubmit }>
            <Field component={ 'textarea' }
                name="new_post" 
                id="new_post" 
                value={ props.postText } 
                className={ classes.input }
            />
            <button>Опубликовать пост</button>
        </form>
    )
}

const ReduxNewPostForm = reduxForm({ form: 'new-post' })(NewPostForm);

export default ReduxNewPostForm;
