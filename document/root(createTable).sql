CREATE DATABASE plannerDB;
CREATE DATABASE imagedb;
use imageDB;
use plannerDB;
DROP TABLE tbl_todo;
DROP TABLE tbl_date;
truncate tbl_todo;
truncate tbl_date;
CREATE TABLE tbl_todo (
td_seq	BIGINT	AUTO_INCREMENT	PRIMARY KEY,
td_dtseq	BIGINT	NOT NULL	,
td_subject	VARCHAR(20)	NOT NULL	,
td_content	VARCHAR(300)	NOT NULL	,
td_complete	BOOLEAN	NOT NULL	
) AUTO_INCREMENT=1;

CREATE TABLE tbl_date (
dt_seq	BIGINT	AUTO_INCREMENT	PRIMARY KEY,
dt_date	VARCHAR(10)	NOT NULL	,
dt_perf	INT	NOT NULL	
) AUTO_INCREMENT=1;

ALTER TABLE tbl_todo -- tbl_files TABLE 변경
ADD CONSTRAINT F_PLANNER -- F_BBS 이름으로 제약조건 추가
FOREIGN KEY (td_dtseq) -- 제약조건은 참조 무결성(FK) 이다.
REFERENCES tbl_date(dt_seq); -- 연결은 Table 은 tbl_bbs 이다.

INSERT INTO tbl_date (dt_date,dt_perf)
VALUES ("2023-09-10"	,0);


INSERT INTO tbl_todo (td_dtseq,td_subject,td_content,td_complete)
VALUES (4,"JS","ggg",false);

desc tbl_date;
desc tbl_todo;

SELECT td_subject, COUNT(td_content) FROM tbl_todo
GROUP BY td_subject;

SELECT count(td_complete) FROM tbl_todo
WHERE td_complete = true && td_dtseq=1;

SELECT count(td_seq) FROM tbl_todo
WHERE td_dtseq=1;

SELECT * FROM tbl_todo
WHERE td_subject = "JS";

SELECT * FROM tbl_date;
SELECT * FROM tbl_todo;

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



