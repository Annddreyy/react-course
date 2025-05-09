import React from 'react';
import classes from './NewPostForm.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLenghtCreator, requiredField }  from '../../../../utils/validators/validators'
import { Textarea } from '../../../common/FormsControls/FormsControls';
import { NewPostFormDataType } from '../MyPostsContainer';

const maxLenght10 = maxLenghtCreator(10);

type OwnPropsType = {};

const NewPostForm: React.FC<InjectedFormProps<NewPostFormDataType, OwnPropsType> & OwnPropsType> = ({ handleSubmit }) => {
    return (
        <form className={classes['new-post-form']} onSubmit={ handleSubmit }>
            <Field component={ Textarea }
                name="new-post" 
                id="new-post" 
                className={ classes.input }
                validate={[requiredField, maxLenght10 ]}
            />
            <button>Опубликовать пост</button>
        </form>
    )
}

const ReduxNewPostForm = reduxForm<NewPostFormDataType, OwnPropsType>({ form: 'new-post' })(NewPostForm);

export default ReduxNewPostForm;
