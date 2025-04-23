import React, { useEffect, useState } from "react"

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (event) => {
        setStatus(event.target.value);
    }

    return (
        <div>
            {/* { true //!state.editMode 
            ? <span onDoubleClick={ activateEditMode } >{ props.status }</span> 
            : <input type="text" 
                value={ state.status } 
                onChange={ onStatusChange } 
                onBlur={ deactivateEditMode } 
            /> 
            } */}
            { !editMode //!state.editMode 
            ? <span onDoubleClick={ activateEditMode }>{ props.status }</span> 
            : <input type="text" 
                value={ status } 
                onBlur={ deactivateEditMode }
                onChange={ onStatusChange }
            /> 
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
