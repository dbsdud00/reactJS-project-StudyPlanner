import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { getDateList, getTodoList } from "../modules/FetchModule";

const PLContext = createContext();
const usePLContext = () => {
  return useContext(PLContext);
};

const PLContextProvider = ({ children }) => {
  const [dateList, setDateList] = useState([]);

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
      console.table(todoList);
    }
  });

  const props = {
    dateList,
    setDateList,
    callTodoList,
  };
  return <PLContext.Provider value={props}>{children}</PLContext.Provider>;
};
export { PLContextProvider, usePLContext };
