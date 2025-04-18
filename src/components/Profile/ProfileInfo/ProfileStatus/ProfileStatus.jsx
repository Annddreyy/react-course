import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: true
    };

    activateEditMode = () => {
        this.setState( {
            editMode: true
        } )
    };

    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        } )
    };

    render() {
        return (
            <div>
                { !this.state.editMode 
                ? <span onDoubleClick={ this.activateEditMode } >{ this.props.status }</span> 
                : <input type="text" value={ this.props.status } onBlur={ this.deactivateEditMode } /> 
                }
            </div>
        )
    }
};

export default ProfileStatus;