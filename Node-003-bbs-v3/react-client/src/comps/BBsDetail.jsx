import { useParams } from "react-router-dom";
const BBsDetail = () => {
  const { seq } = useParams();
  return (
    <>
      <h1>여기는 자세히 보기</h1>
      <p>선택한 게시판 SEQ : {seq}</p>
    </>
  );
};
export default BBsDetail;
