import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderReadingTime = () => {
    if (minutes < 30) {
      return "☕️".repeat(Math.ceil(minutes / 5));
    } else {
      return "🍱".repeat(Math.ceil(minutes / 10));
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>
        {renderReadingTime()} {minutes} min read
      </p>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
