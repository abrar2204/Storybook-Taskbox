import { useState } from "react";
import TaskContext from "../state/TaskContext";
import TaskList from "./TaskList";

export default {
    component: TaskList,
    title: "TaskList",
    decorators: [(story) =>
        <div style={{ padding: "3rem" }}>
            {story()}
        </div>],
    tags: ["autodocs"]
}

const MockTasksProvider = ({ initialState, children }) => {
    const [tasks, setTasks] = useState(initialState.tasks);
    const [isLoading, setIsLoading] = useState(initialState.isLoading);

    const onPinTask = (taskId) => {
        setTasks(prev => prev.map(t => t.id == taskId ? { ...t, state: "TASK_PINNED" } : t));
    }

    const onArchiveTask = (taskId) => {
        setTasks(prev => prev.map(t => t.id == taskId ? { ...t, state: "TASK_ARCHIVED" } : t));
    }

    return (<TaskContext.Provider value={{ tasks, isLoading, onPinTask, onArchiveTask }}>{children}</TaskContext.Provider>)
}

export const Default = {
    decorators: [(story) =>
        <MockTasksProvider initialState={{
            tasks: [
                { id: "1", title: "Task 1", state: "TASK_INBOX" },
                { id: "2", title: "Task 2", state: "TASK_INBOX" },
                { id: "3", title: "Task 3", state: "TASK_INBOX" },
                { id: "4", title: "Task 4", state: "TASK_INBOX" },
                { id: "5", title: "Task 5", state: "TASK_INBOX" },
                { id: "6", title: "Task 6", state: "TASK_INBOX" },
            ],
            isLoading: false
        }}>
            {story()}
        </MockTasksProvider>
    ],
}

export const WithPinnedTasks = {
    decorators: [(story) =>
        <MockTasksProvider initialState={{
            tasks: [
                { id: "1", title: "Task 1", state: "TASK_PINNED" },
                { id: "2", title: "Task 2", state: "TASK_PINNED" },
                { id: "3", title: "Task 3", state: "TASK_PINNED" },
                { id: "4", title: "Task 4", state: "TASK_INBOX" },
                { id: "5", title: "Task 5", state: "TASK_INBOX" },
                { id: "6", title: "Task 6", state: "TASK_INBOX" },
            ],
            isLoading: false
        }}>
            {story()}
        </MockTasksProvider>
    ],
}

export const WithArchivedTask = {
    decorators: [(story) =>
        <MockTasksProvider initialState={{
            tasks: [
                { id: "1", title: "Task 1", state: "TASK_ARCHIVED" },
                { id: "2", title: "Task 2", state: "TASK_ARCHIVED" },
                { id: "3", title: "Task 3", state: "TASK_ARCHIVED" },
                { id: "4", title: "Task 4", state: "TASK_INBOX" },
                { id: "5", title: "Task 5", state: "TASK_INBOX" },
                { id: "6", title: "Task 6", state: "TASK_INBOX" },
            ],
            isLoading: false
        }}>
            {story()}
        </MockTasksProvider>
    ],
}

export const Empty = {
    decorators: [(story) =>
        <MockTasksProvider initialState={{
            tasks: [],
            isLoading: false
        }}>
            {story()}
        </MockTasksProvider>
    ],
}

export const Loading = {
    decorators: [(story) =>
        <MockTasksProvider initialState={{
            tasks: [],
            isLoading: true
        }}>
            {story()}
        </MockTasksProvider>
    ],
}