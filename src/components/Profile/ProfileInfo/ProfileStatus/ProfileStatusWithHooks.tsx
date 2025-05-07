import React, { ChangeEvent, useEffect, useState } from "react"

type ProfileStatusType = {
    status: string | null,
    updateStatus: (status: string | null) => void
};

const ProfileStatusWithHooks = (props: ProfileStatusType) => {
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

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value);
    }

    return (
        <div>
            { 
            !editMode
            ? <span onDoubleClick={ activateEditMode }>{ props.status }</span> 
            : <input type="text" 
                value={ status || '' } 
                onBlur={ deactivateEditMode }
                onChange={ onStatusChange }
                /> 
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
