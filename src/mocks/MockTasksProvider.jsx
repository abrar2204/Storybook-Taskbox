import { useState } from "react";
import TaskContext from "../state/TaskContext";

export const MockData = {
    tasks: [
        { id: "1", title: "Task 1", state: "TASK_PINNED" },
        { id: "2", title: "Task 2", state: "TASK_PINNED" },
        { id: "3", title: "Task 3", state: "TASK_PINNED" },
        { id: "4", title: "Task 4", state: "TASK_INBOX" },
        { id: "5", title: "Task 5", state: "TASK_INBOX" },
        { id: "6", title: "Task 6", state: "TASK_INBOX" },
    ],
    isLoading: false,
    error: false
};

const MockTasksProvider = ({ initialState = MockData, children }) => {
    const [tasks, setTasks] = useState(initialState?.tasks ?? []);
    const [isLoading, setIsLoading] = useState(initialState?.isLoading ?? false);
    const [error, setError] = useState(initialState?.error ?? false);

    const onPinTask = (taskId) => {
        setTasks(prev => prev.map(t => t.id == taskId ? { ...t, state: "TASK_PINNED" } : t));
    }

    const onArchiveTask = (taskId) => {
        setTasks(prev => prev.map(t => t.id == taskId ? { ...t, state: "TASK_ARCHIVED" } : t));
    }

    const fetchTasks = () => {

    }

    return (<TaskContext.Provider value={{ tasks, isLoading, error, onPinTask, onArchiveTask, fetchTasks }}>{children}</TaskContext.Provider>)
}

export default MockTasksProvider;