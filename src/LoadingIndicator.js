import LinearProgress from "@material-ui/core/LinearProgress";
import React from "react";

export default function LoadingIndicator(props) {

    const loading = props.isLoading;

    return (
        <div className="loading-indicator">
            {!loading ? '' :
            <LinearProgress />}
        </div>
        )
}

