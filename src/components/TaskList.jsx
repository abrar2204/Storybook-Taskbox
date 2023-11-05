import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";

const TaskList = ({ tasks, isLoading, onPinTask, onArchiveTask }) => {
    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    );
    if (isLoading) {
        return (
            <div className="list-items" data-testid="loading" key={"loading"}>
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
    }

    if (tasks.length === 0) {
        return (
            <div className="list-items" key={"empty"} data-testid="empty">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <p className="title-message">You have no tasks</p>
                    <p className="subtitle-message">Sit back and relax</p>
                </div>
            </div>
        );
    }

    return (<div className="list-items">
        {
            [...tasks.filter((t) => t.state === 'TASK_PINNED'),
            ...tasks.filter((t) => t.state !== 'TASK_PINNED'),]
                .map(task => <Task key={task.id} task={task} onPinTask={onPinTask} onArchiveTask={onArchiveTask} />)
        }
    </div>);
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
    isLoading: PropTypes.bool.isRequired,
    onPinTask: PropTypes.func,
    onArchiveTask: PropTypes.func
}

TaskList.defaultProps = {
    isLoading: false
}

export default TaskList;