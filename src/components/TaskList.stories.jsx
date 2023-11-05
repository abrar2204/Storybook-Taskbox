import MockTasksProvider from "../mocks/MockTasksProvider";
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

export const Default = {
    decorators: [(story) =>
        <MockTasksProvider>
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
            isLoading: false,
            error: false
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
            isLoading: false,
            error: false
        }}>
            {story()}
        </MockTasksProvider>
    ],
}

export const Empty = {
    decorators: [(story) =>
        <MockTasksProvider initialState={{
            tasks: [],
            isLoading: false,
            error: false
        }}>
            {story()}
        </MockTasksProvider>
    ],
}

export const Loading = {
    decorators: [(story) =>
        <MockTasksProvider initialState={{
            tasks: [],
            isLoading: true,
            error: false
        }}>
            {story()}
        </MockTasksProvider>
    ],
}