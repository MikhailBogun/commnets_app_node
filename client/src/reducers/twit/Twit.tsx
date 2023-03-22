import React from "react";
import './twit.less'

const Twit = (props: any) => {
  const twit = props.twit;
  return (
      <div className="repo">
          <div className="repo-header">
              <div className="repo-header-name">{twit.username}</div>
              <div className="repo-header-stars">{twit.createdAt}</div>
          </div>
          <div className="repo-list-comit">{twit.text}</div>
          {/* <a href={twit.html_url} className="repo-link">Link to repositorii</a> */}
      </div>
  );
};

export default Twit; 