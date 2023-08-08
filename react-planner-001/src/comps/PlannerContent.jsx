import "../css/StudyList.css";
import "../css/StudyInput.css";
import plusIcon from "../img/plus.png";

const PlannerContent = (props) => {
  // const { todo, setTodo } = props;

  return (
    <div className="appBodyRight">
      <div className="studyHeader">
        <h3>2023-08-05</h3>
        <h3>80%</h3>
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
          <tr>
            <th colSpan="4">JavaScript</th>
          </tr>
          <tr>
            <td>1</td>
            <td>프로젝트 하기</td>
            <td>&#x2714;</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default PlannerContent;
