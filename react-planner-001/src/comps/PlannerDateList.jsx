import { useState, useEffect } from "react";

const PlannerDateList = (props) => {
  const [dateList, setDateList] = useState([]);
  useEffect(() => {
    const getDateList = async () => {
      // proxy 주소를 사용하여 Server 에 요청
      // CORS 오류를 방지할 수 있다.
      const res = await fetch("/dateList");
      const result = await res.json();
      setDateList([...result]);
    };
    getDateList();
    // console.log(dateList);
  });
  // const { dateList } = props;
  const printDateList = dateList.map((item) => {
    return <li>{item.pl_date}</li>;
  });
  return (
    <div className="appBodyLeft">
      <ul className="studyDateList">{printDateList}</ul>
    </div>
  );
};
export default PlannerDateList;
