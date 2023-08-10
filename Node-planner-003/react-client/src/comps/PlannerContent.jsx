import "../css/StudyList.css";
import "../css/StudyInput.css";
import { usePLContext } from "../provider/PlannerProvider";

const PlannerContent = () => {
  const { todo, todoList, date, setTodo, insertTodoCB } = usePLContext();
  const nowDate = date.dt_date;
  const nowPerf = date.dt_perf;
  // console.log(date);

  const printTodoList = todoList.map((item) => {
    return (
      <tr key={item.td_seq} data-seq={item.td_seq}>
        <td>{item.td_seq}</td>
        <td>{item.td_content}</td>
        <td>X</td>
      </tr>
    );
  });
  const inputChangHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };
  const insertButtonClickHandler = async () => {
    insertTodoCB();
    setTodo({ ...todo, td_subject: "", td_content: "" });
  };
  return (
    <div className="appBodyRight">
      <div className="studyHeader">
        <h3>{nowDate}</h3>
        <h3>{nowPerf}%</h3>
      </div>
      <div className="studyInput">
        <div className="subjectMenu">
          <input
            name="td_subject"
            type="text"
            placeholder="과목"
            value={todo.td_subject}
            onChange={inputChangHandler}
          />
        </div>
        <div className="studyInputBox">
          <input
            name="td_content"
            type="text"
            placeholder="content"
            value={todo.td_content}
            onChange={inputChangHandler}
          />
        </div>
        <div className="studyPlus" onClick={insertButtonClickHandler}>
          추가
        </div>
      </div>
      <div className="studyList">
        <table>
          <thead>
            <tr>
              <th colSpan="4">JavaScript</th>
            </tr>
          </thead>
          <tbody>{printTodoList}</tbody>
        </table>
      </div>
    </div>
  );
};
export default PlannerContent;
