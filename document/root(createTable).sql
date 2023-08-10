CREATE DATABASE plannerDB;
use plannerDB;
DROP TABLE tbl_date;
CREATE TABLE tbl_todo (
td_seq	BIGINT	AUTO_INCREMENT	PRIMARY KEY,
td_dtseq	BIGINT	NOT NULL	,
td_subject	VARCHAR(10)	NOT NULL	,
td_content	VARCHAR(30)	NOT NULL	,
td_complete	BOOLEAN	NOT NULL	
) AUTO_INCREMENT=1;

CREATE TABLE tbl_date (
td_seq	BIGINT	AUTO_INCREMENT	PRIMARY KEY,
td_date	VARCHAR(10)	NOT NULL	,
td_perf	INT	NOT NULL	
) AUTO_INCREMENT=1;

ALTER TABLE tbl_todo -- tbl_files TABLE 변경
ADD CONSTRAINT F_PLANNER -- F_BBS 이름으로 제약조건 추가
FOREIGN KEY (td_dtseq) -- 제약조건은 참조 무결성(FK) 이다.
REFERENCES tbl_date(td_seq); -- 연결은 Table 은 tbl_bbs 이다.

INSERT INTO tbl_date (td_dtseq,td_perf)
VALUES ("2023-08-11"	,0);


INSERT INTO tbl_todo (td_dtseq,td_subject,td_content,td_complete)
VALUES (1,"JS","ㄴㄴㄴ",false);


desc tbl_todo;

SELECT * FROM tbl_date;


-- 중복제거 날짜
SELECT DISTINCT(pl_date) FROM tbl_planner;

-- 날짜로 검색
SELECT * FROM tbl_planner
WHERE pl_date = "2023-08-08";

-- 날짜 안 과목 검색
SELECT DISTINCT(pl_subject) FROM tbl_planner
WHERE pl_date = "2023-08-08";

-- 과목으로 검색
SELECT * FROM tbl_planner
WHERE pl_subject = "nodeJS";



