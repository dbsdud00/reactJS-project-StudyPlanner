import "../css/StudyList.css";
import "../css/StudyInput.css";
import { usePLContext } from "../provider/PlannerProvider";
import { findBySEQ, deleteTodo, todoCompUp } from "../modules/FetchModule";

const PlannerContent = () => {
  const { todo, todoList, date, setTodo, insertTodoCB } = usePLContext();
  const nowDate = date.dt_date;
  const nowPerf = date.dt_perf;
  // console.log(date);
  const deleteClickHandler = async (e) => {
    const target = e.target;
    const seq = target.closest("TR").dataset.seq;
    if (target.className === "delete") {
      const result = await deleteTodo(seq);
      alert(result);
    } else if (target.tagName === "TD") {
      const result = await findBySEQ(seq);
      setTodo(result);
    }
  };
  const printTodoList = todoList.map((item) => {
    return (
      <tr key={item.td_seq} data-seq={item.td_seq}>
        <td className="seq">{item.td_seq}</td>
        <td className={item.td_complete ? "complete yes" : "complete no"}>
          {item.td_content}
        </td>
        <td className="delete">X</td>
      </tr>
    );
  });

  const inputChangHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };
  const insertButtonClickHandler = async () => {
    insertTodoCB();
    setTodo({
      td_seq: 0,
      td_dtseq: 1,
      td_subject: "",
      td_content: "",
      td_complete: false,
    });
  };
  return (
    <div className="appBodyRight">
      <div className="studyHeader">
        <h3>{nowDate}</h3>
        <h3>{nowPerf}%</h3>
      </div>
      <div className="studyInput">
        <div
          onClick={(e) =>
            setTodo({
              ...todo,
              td_seq: 0,
              td_subject: "",
              td_content: "",
            })
          }
        >
          X
        </div>
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
        {todo.td_seq > 0 ? (
          <>
            <div className="studyPlus" onClick={insertButtonClickHandler}>
              수정
            </div>
            <div
              className="studyPlus"
              onClick={(e) => {
                setTodo({ ...todo, td_complete: !todo.td_complete });
              }}
            >
              {todo.td_complete ? "완료" : "완료x"}
            </div>
          </>
        ) : (
          <div className="studyPlus" onClick={insertButtonClickHandler}>
            추가
          </div>
        )}
      </div>
      <div className="studyList">
        <table>
          <thead>
            <tr>
              <th colSpan="4">JavaScript</th>
            </tr>
          </thead>
          <tbody onClick={deleteClickHandler}>{printTodoList}</tbody>
        </table>
      </div>
    </div>
  );
};
export default PlannerContent;
