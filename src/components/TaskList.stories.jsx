import * as TaskStories from "./Task.stories";
import TaskList from "./TaskList";

export default {
    component: TaskList,
    title: "TaskList",
    decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
    tags: ["autodocs"]
}

export const Default = {
    args: {
        tasks: [
            TaskStories.Default.args.task,
            {
                ...TaskStories.Default.args.task,
                id: "2",
            },
            {
                ...TaskStories.Default.args.task,
                id: "3",
            }
        ],
        isLoading: false,
    }
}

export const WithPinnedTasks = {
    args: {
        tasks: [
            TaskStories.Default.args.task,
            {
                ...TaskStories.Pinned.args.task,
                id: "2",
            },
            {
                ...TaskStories.Pinned.args.task,
                id: "3",
            }
        ],
        isLoading: false,
    }
}

export const WithArchivedTask = {
    args: {
        tasks: [
            TaskStories.Default.args.task,
            {
                ...TaskStories.Archived.args.task,
                id: "2",
            },
            {
                ...TaskStories.Archived.args.task,
                id: "3",
            }
        ],
        isLoading: false,
    }
}

export const Empty = {
    args: {
        tasks: [],
        isLoading: false,
    }
}

export const Loading = {
    args: {
        ...Empty.args,
        isLoading: true
    }
}