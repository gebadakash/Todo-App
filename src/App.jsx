import { AppName } from "./component/AppName";
import { AddTodo } from "./component/AddTodo";
import { Todoitem1 } from "./component/Todoitem1";
import { Todoitem2 } from "./component/Todoitem2";
import "./Application.css";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>

      <AddTodo></AddTodo>

      <div className="items-container">
        <Todoitem1></Todoitem1>

        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
