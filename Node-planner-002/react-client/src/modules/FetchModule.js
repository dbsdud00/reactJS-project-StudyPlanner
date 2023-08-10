const URL = {
  DateList: "/date/list",
  BBS_INSERT: "/bbs/insert",
  BBS_LIST: "/bbs/list",
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
export const getTodoList = async (seq) => {
  const response = await fetch(`/todo?seq=${seq}`);
  const todoList = await response.json();
  console.table(todoList);
  return todoList;
};
