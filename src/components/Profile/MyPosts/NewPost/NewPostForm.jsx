import React from 'react';
import classes from './NewPostForm.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLenghtCreator, requiredField }  from '../../../../utils/validators/validators'
import { Textarea } from '../../../common/FormsControls/FormsControls';

const maxLenght10 = maxLenghtCreator(10);

const NewPostForm = (props) => {
    return (
        <form className={classes['new-post-form']} onSubmit={ props.handleSubmit }>
            <Field component={ Textarea }
                name="new_post" 
                id="new_post" 
                value={ props.postText } 
                className={ classes.input }
                validate={[requiredField, maxLenght10 ]}
            />
            <button>Опубликовать пост</button>
        </form>
    )
}

const ReduxNewPostForm = reduxForm({ form: 'new-post' })(NewPostForm);

export default ReduxNewPostForm;
