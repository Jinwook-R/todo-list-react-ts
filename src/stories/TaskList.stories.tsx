import TaskList from "../components/TaskList";
import TaskProvider from "../contexts/TaskProvider";

export default {
    title: 'Component/TaskList',
    component: TaskList
}

export const Default = () => {
    const tasks = [
        {
            id: "123",
            content: 'Todo',
            complete: false
        },
        {
            id: "1234567",
            content: 'Todo',
            complete: false
        },
        {
            id: "12",
            content: 'Todo',
            complete: false
        },
    ];

    return (
        <TaskProvider initialTasks={tasks}>
            <TaskList />
        </TaskProvider>
    );
}