import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export default TaskContext;

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        { id: "1", title: "Task 1", state: "TASK_INBOX" },
        { id: "2", title: "Task 2", state: "TASK_INBOX" },
        { id: "3", title: "Task 3", state: "TASK_INBOX" },
        { id: "4", title: "Task 4", state: "TASK_INBOX" },
        { id: "5", title: "Task 5", state: "TASK_INBOX" },
        { id: "6", title: "Task 6", state: "TASK_INBOX" },
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const onPinTask = (taskId) => {
        setTasks(prev => prev.map(t => t.id == taskId ? { ...t, state: "TASK_PINNED" } : t));
    }

    const onArchiveTask = (taskId) => {
        setTasks(prev => prev.map(t => t.id == taskId ? { ...t, state: "TASK_ARCHIVED" } : t));
    }

    return (<TaskContext.Provider value={{ tasks, isLoading, onPinTask, onArchiveTask }}>{children}</TaskContext.Provider>)
}

export const useTasks = () => {
    return useContext(TaskContext);
}