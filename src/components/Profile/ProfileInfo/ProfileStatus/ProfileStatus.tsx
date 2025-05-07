import React, { ChangeEvent } from "react";

type PropsType = {
    status: string,
    updateStatus: (newStatus: string) => void
}

type StateType = {
    editMode: boolean,
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
    state = {
        editMode: true,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({ editMode: true })
    };

    deactivateEditMode = () => {
        this.props.updateStatus(this.state.status);
        this.setState({ editMode: false })
    };

    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ status: event.target.value })
    };

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (this.state.status !== this.props.status) {
            this.setState({ status: this.props.status });
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