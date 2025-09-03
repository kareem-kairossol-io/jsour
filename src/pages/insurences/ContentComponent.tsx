import React from "react";
import "./ContentComponent.css"; // import the CSS file

interface ContentComponentProps {
  img: string;
  content: string; // HTML string
}

const ContentComponent: React.FC<ContentComponentProps> = ({ img, content }) => {
  return (
    <div className="content-component">
      <img src={img} alt="content" className="content-image" />
      <div
        className="content-text"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default ContentComponent;
