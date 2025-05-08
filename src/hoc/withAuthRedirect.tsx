import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

type MapPropsType = {
    isAuth: boolean
};

export const withAuthRedirect = <WCP>(Component: React.ComponentType<WCP>) => {
    return (props: WCP & MapPropsType) => {
        let { isAuth, ...restProps } = props;
        if (!isAuth) {
            return <Navigate to="/login" />;
        }
        return <Component { ...restProps } />;
    }
};

