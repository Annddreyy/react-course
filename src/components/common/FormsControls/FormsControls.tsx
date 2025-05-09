import React from 'react';
import classes from './FormsControls.module.css';

type OwnProps = {
    [key: string]: any; // можно уточнить по необходимости
};

export const Textarea: React.FC<OwnProps> = ({input, meta, ...props}) => {
    const showError = meta.error && meta.touched;
    return (
        <div className={ classes.formControl + " " + (showError ? classes.error : '') }>
            <textarea {...input} {...props}></textarea>
            { showError && <span>Ошибка</span> }
        </div>
    )
}

export const Input: React.FC<OwnProps> = ({input, meta, ...props}) => {
    const showError = meta.error && meta.touched;
    return (
        <div className={ classes.formControl + " " + (showError ? classes.error : '') }>
            <input type="text" {...input} {...props} />
        </div>
    )
}