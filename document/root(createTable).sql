CREATE DATABASE plannerDB;
use plannerDB;
DROP TABLE tbl_planner;
CREATE TABLE tbl_planner (
pl_seq	BIGINT	AUTO_INCREMENT	PRIMARY KEY,
pl_date	VARCHAR(10)	NOT NULL	,
pl_subject	VARCHAR(10)	NOT NULL,	
pl_content	VARCHAR(30)	NOT NULL,	
pl_complete	BOOLEAN	NOT NULL	
) AUTO_INCREMENT=1;
INSERT INTO tbl_planner (pl_date,pl_subject,pl_content, pl_complete )
VALUES ("2023-08-12",	"nodeJS"	,"프로젝트3",	TRUE);

desc tbl_planner;

SELECT * FROM tbl_planner;

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



