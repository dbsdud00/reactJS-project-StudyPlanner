import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

const PLContext = createContext();
const usePLContext = () => {
  return useContext(PLContext);
};

const PLContextProvider = ({ children }) => {
  const [dateList, setDateList] = useState([]);

  useEffect(() => {
    const getDateList = async () => {
      try {
        const response = await fetch("/date/list");
        const dateList = await response.json();
        console.table(dateList);
        setDateList(dateList);
      } catch (error) {
        return [];
      }
    };
    getDateList();
  }, []);
  const props = {
    dateList,
    setDateList,
  };
  return <PLContext.Provider value={props}>{children}</PLContext.Provider>;
};
export { PLContextProvider, usePLContext };
