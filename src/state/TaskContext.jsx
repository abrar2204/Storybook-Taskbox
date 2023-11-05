import { createContext, useCallback, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export default TaskContext;

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchTasks = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/todos?userId=1'
            );
            const data = await response.json();
            setTasks(data.map((task) => ({
                id: `${task.id}`,
                title: task.title,
                state: task.completed ? 'TASK_ARCHIVED' : 'TASK_INBOX',
            })))
            setIsLoading(false);
        } catch (err) {
            setError(true);
        }
    }, []);

    const onPinTask = (taskId) => {
        setTasks(prev => prev.map(t => t.id == taskId ? { ...t, state: "TASK_PINNED" } : t));
    }

    const onArchiveTask = (taskId) => {
        setTasks(prev => prev.map(t => t.id == taskId ? { ...t, state: "TASK_ARCHIVED" } : t));
    }

    return (<TaskContext.Provider value={{ tasks, isLoading, error, onPinTask, onArchiveTask, fetchTasks }}>{children}</TaskContext.Provider>)
}

export const useTasks = () => {
    return useContext(TaskContext);
}