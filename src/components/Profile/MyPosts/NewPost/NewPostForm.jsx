import React from 'react';
import classes from './NewPostForm.module.css';
import { Field, reduxForm } from 'redux-form';

const NewPostForm = (props) => {
    let onPostChange = () => {
        const text = newPostELement.current.value;
        props.updatePost(text);
    };

    const newPostELement = React.createRef();
    
    return (
        <form className={classes['new-post-form']} onSubmit={ props.handleSubmit }>
            <Field component={ 'textarea' }
                name="new_post" 
                id="new_post" 
                ref={ newPostELement } 
                onChange={ onPostChange } 
                value={ props.postText } 
                className={ classes.input }
            />
            <button onClick={ props.addPost }>Опубликовать пост</button>
        </form>
    )
}

const ReduxNewPostForm = reduxForm({ form: 'new-post' })(NewPostForm);

export default ReduxNewPostForm;
