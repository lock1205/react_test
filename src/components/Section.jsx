import React from 'react';

const Section = ({ title, color, contents, article }) => {
  //console.log(section);

  const num = 9;
  return (
    <div className="section">
      <h2>{title}</h2>
      <p>{contents}</p>
      <ul>
        {article.map((article, idx) => (
          <li key={idx}>{article}</li>
        ))}
      </ul>
      <p>
        {num}은 {num % 2 === 0 ? '짝수' : '홀수'}입니다.
      </p>
    </div>
  );
};
// props(파라미터)는 속성을 가져온다.

export default Section;
