import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

const config = {
  url: `https://react-task-4cd6f-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json`,
};

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformedTasks = (data) => {
      console.log("data", data);
      const loadedTasks = [];

      for (const key in data) {
        const task = { id: key, text: data[key].text };
        loadedTasks.push(task);
      }

      setTasks(loadedTasks);
    };

    fetchTasks(config, transformedTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
