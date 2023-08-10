import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { getDateList, getTodoList, getDate } from "../modules/FetchModule";

const PLContext = createContext();
const usePLContext = () => {
  return useContext(PLContext);
};

const PLContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    td_seq: 0,
    td_dtseq: 0,
    td_subject: "",
    td_content: "",
    td_complete: false,
  });
  const [date, setDate] = useState({
    td_seq: 0,
    td_date: "",
    td_perf: 0,
  });
  const [todoList, setTodoList] = useState([]);
  const [dateList, setDateList] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const [subject, setSubject] = useState("");

  useEffect(() => {
    const fetchDateList = async () => {
      const result = await getDateList();
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
  };
  return <PLContext.Provider value={props}>{children}</PLContext.Provider>;
};
export { PLContextProvider, usePLContext };
