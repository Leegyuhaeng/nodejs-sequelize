express 란 node 의 frame work 이다 

sequelize 란 node 의 JAVA 의 JPA 와 비슷한역활을 수행하는 nodejs 의 library이다

sequelize.sync() = 자동으로 서버 실행시 MySQL 과 연동을 해준다

sequelize 는 알아서 id를 기본키로 연결하므로 id column 은 적을 필요가없다

sequelize.define 메서드로 테이블명과 각 컬럼의 스펙을 입력을 한다 (MySQL 의 column 의 내용이 일치해야 한다)

sequelize 는 MySQL 의 자료형과는 조금다르다

(VARCHAR = STRING , INT = INTEGER , TINYINT = BOOLEAN , DATETIME = DATE) 로적는다
: (INTEGER.UNSIGNED = UNSIGNED 옵션이 적용된 INT 를 의미한다)
: (여기에 ZEROFILL 옵션도 추가하고 싶다면 INTEGER.UNSIGNED.ZEROFILL 을 사용한다)

allowNull 은 NOT NULL 옵션과 동일하다 , unique = UNIQUE 옵션과 동일하다 defaultValue 는 기본값을 의미한다 DataTypes.NOW 는
현재 시간을 기본값으로 사용한다 SQL 의 now() 와 동일 

define 메서드의 세번째 인자는 table 옵션 
timestamps 속성의 값이 false 로 되어있다 
timestamps 속성이 true 면 sequelize 는 createdAt 와 updateAt column을 추가한다 
row 가 생성과 수정이 될때 시간이 자동으로 입력된다
(예제에서는 직접 created_at column 을 직접 만들었으므로 timestamps 속성이 필요하지 않다 따라서 속성 값 false 로 하여 자동으로
날짜 column 을 추가하는 기능을 해제함)