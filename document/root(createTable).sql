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
VALUES ("2023-08-11",	"reactJS"	,"프로젝트2",	TRUE);

desc tbl_planner;

SELECT * FROM tbl_planner;

-- 중복제거 날짜
SELECT DISTINCT(pl_date) FROM tbl_planner;

