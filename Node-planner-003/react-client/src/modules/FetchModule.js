const URL = {
  DateList: "/date/list",
  BBS_INSERT: "/bbs/insert",
  TODO_INSERT: "/todo/insert",
};

export const getDateList = async () => {
  try {
    const response = await fetch(URL.DateList);
    const dateList = await response.json();
    console.table(dateList);
    return dateList;
  } catch (error) {
    return [];
  }
};
export const getDate = async (url) => {
  try {
    const response = await fetch(url);
    const dateList = await response.json();
    console.table(dateList);
    return dateList;
  } catch (error) {
    return [];
  }
};
export const getTodoList = async (seq) => {
  const response = await fetch(`/todo?seq=${seq}`);
  const todoList = await response.json();
  console.table(todoList);
  return todoList;
};
export const setNowDate = async (date) => {
  const response = await fetch(`/dateOK?date=${date}`);
  const nowDate = await response.json();
  return nowDate;
};
export const todoInsert = async (todoStr) => {
  const td_dtseq = todoStr.td_dtseq;
  const td_subject = todoStr.td_subject;
  const td_content = todoStr.td_content;
  const td_complete = todoStr.td_complete;
  console.log(todoStr);
  const response = await fetch(
    `/todo/insert?td_dtseq=${td_dtseq}&td_subject=${td_subject}&td_content=${td_content}&td_complete=${td_complete}`
  );
  // const response = await fetch(URL.TODO_INSERT, fetchData);
};
