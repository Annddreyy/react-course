import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: true,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState( {
            editMode: true
        } )
    };

    deactivateEditMode = () => {
        this.props.updateStatus(this.state.status);
        this.setState( {
            editMode: false
        } )
    };

    onStatusChange = (event) => {
        this.setState( {
            status: event.target.value
        } )
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.status !== this.props.status) {
            this.setState( {
                status: this.props.status
            });
        };
    }

    render() {
        return (
            <div>
                { !this.state.editMode 
                ? <span onDoubleClick={ this.activateEditMode } >{ this.props.status }</span> 
                : <input type="text" 
                    value={ this.state.status } 
                    onChange={ this.onStatusChange } 
                    onBlur={ this.deactivateEditMode } 
                /> 
                }
            </div>
        )
    }
};

export default ProfileStatus;