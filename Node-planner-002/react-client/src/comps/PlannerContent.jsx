import "../css/StudyList.css";
import "../css/StudyInput.css";
import plusIcon from "../img/plus.png";
import { usePLContext } from "../provider/PlannerProvider";

const PlannerContent = () => {
  const { todo, todoList, date } = usePLContext();

  const printTodoList = todoList.map((item) => {
    return (
      <tr key={item.td_seq} data-seq={item.td_seq}>
        <td>{item.td_seq}</td>
        <td>{item.td_content}</td>
        <td>{item.td_complete ? "o" : "x"}</td>
      </tr>
    );
  });
  return (
    <div className="appBodyRight">
      <div className="studyHeader">
        <h3>{!date[0].td_date ? "2023-01-01" : date[0].td_date}</h3>
        <h3>{date[0].td_perf ? date[0].td_perf : 0}%</h3>
      </div>
      <div className="studyInput">
        <div className="subjectMenu">
          <ul>
            <li>과목1</li>
            <li>과목2</li>
            <li>과목3</li>
            <li>과목4</li>
            <li>과목5</li>
          </ul>
        </div>
        <div className="studyInputBox">
          <input type="text" placeholder="content" />
        </div>
        <div className="studyPlus">
          <img src={plusIcon} alt="추가" width="20px" height="20px" />
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
