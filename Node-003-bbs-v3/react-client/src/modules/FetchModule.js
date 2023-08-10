const URL = {
  HELLO: "/bbs",
  BBS_INSERT: "/bbs/insert",
  BBS_LIST: "/bbs/list",
};

export const getBbsList = async () => {
  try {
    const response = await fetch(URL.BBS_LIST);
    const bbsList = await response.json();
    console.table(bbsList);
    return bbsList;
  } catch (error) {
    return [];
  }
};
export const hello = async () => {
  // proxy 설정된 URL 과 합성하여 http://localhost:3000/bbs 로 요청
  const res = await fetch(URL.HELLO);
  const json = await res.json();
  return json.title;
};

export const bbsInsert = async (formData) => {
  const fetchData = {
    method: "POST",
    body: formData,
  };
  for (let value of formData.values()) {
    console.log(value);
  }
  const response = await fetch(URL.BBS_INSERT, fetchData);
};
