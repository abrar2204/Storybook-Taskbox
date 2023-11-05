import React from "react";
import { useTasks } from "../state/TaskContext";
import TaskList from "../components/TaskList";

const InboxScreen = () => {
    const { error } = useTasks();

    if (error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad" />
                    <p className="title-message">Oh no!</p>
                    <p className="subtitle-message">Something went wrong</p>
                </div>
            </div>
        );
    }

    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">Taskbox</h1>
            </nav>
            <TaskList />
        </div>
    );
}

export default InboxScreen;