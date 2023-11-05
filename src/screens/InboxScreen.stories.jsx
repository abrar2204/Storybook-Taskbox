import InboxScreen from "./InboxScreen";
import { rest } from "msw";
import { MockData } from "../mocks/MockTasksProvider";
import { TasksProvider } from "../state/TaskContext";
import { within, waitFor, waitForElementToBeRemoved, fireEvent } from "@storybook/testing-library";

export default {
    component: InboxScreen,
    title: "Inbox Screen",
    decorators: [(story) =>
        <TasksProvider>
            {story()}
        </TasksProvider>
    ],
    tags: ["autodocs"]
}

export const Default = {
    parameters: {
        msw: {
            handlers: [
                rest.get(
                    'https://jsonplaceholder.typicode.com/todos?userId=1',
                    (req, res, ctx) => {
                        return res(ctx.json(MockData.tasks));
                    }
                ),
            ]
        }
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await waitForElementToBeRemoved(await canvas.findByTestId("loading"));
        await waitFor(async () => {
            await fireEvent.click(canvas.getByLabelText("pinTask-1"));
            await fireEvent.click(canvas.getByLabelText("pinTask-3"));
        })
    }
}

export const OnError = {
    parameters: {
        msw: {
            handlers: [
                rest.get(
                    'https://jsonplaceholder.typicode.com/todos?userId=1',
                    (req, res, ctx) => {
                        return res(ctx.status(401));
                    }
                ),
            ]
        }
    }
}