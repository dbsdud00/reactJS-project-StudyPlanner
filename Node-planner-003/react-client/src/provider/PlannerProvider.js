import moment from "moment";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  getDateList,
  getTodoList,
  getDate,
  setNowDate,
  todoInsert,
} from "../modules/FetchModule";

const PLContext = createContext();
const usePLContext = () => {
  return useContext(PLContext);
};

const PLContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    td_seq: 1,
    td_dtseq: 1,
    td_subject: "",
    td_content: "",
    td_complete: false,
  });
  const [date, setDate] = useState({
    dt_seq: 0,
    dt_date: "",
    dt_perf: 0,
  });
  const [todoList, setTodoList] = useState([]);
  const [dateList, setDateList] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const [subject, setSubject] = useState("");

  useEffect(() => {
    const fetchDateList = async () => {
      const nowDate = moment().format("YYYY[-]MM[-]DD");
      // const nowDate = "2023-02-03";
      const makeDate = await setNowDate(nowDate);
      const result = await getDateList();
      setDate(makeDate);
      setDateList(result);
    };
    fetchDateList();
  }, []);

  const callTodoList = useCallback(async (e) => {
    const target = e.target;
    if (target.tagName === "LI") {
      const date_seq = target.dataset.seq;
      const todoList = await getTodoList(date_seq);
      const date = await getDate(`/date?seq=${date_seq}`);
      console.table(todoList);
      setTodoList(todoList);
      setDate(date);
      console.log("날짜", date);
    }
  });
  const insertTodoCB = useCallback(async () => {
    // const todoStr = JSON.stringify(todo);
    setTodo({ ...todo, td_dtseq: date.dt_seq });
    console.log(todo);
    await todoInsert(todo);
    const result = await getTodoList(date.dt_seq);
    setTodoList(result);
  });
  const props = {
    dateList,
    setDateList,
    callTodoList,
    todo,
    setTodo,
    todoList,
    setTodoList,
    date,
    setDate,
    insertTodoCB,
  };
  return <PLContext.Provider value={props}>{children}</PLContext.Provider>;
};
export { PLContextProvider, usePLContext };
