import React from "react";

export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718323200&semt=sph"
          alt=""
        />
      </div>
      <div className="text">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          ea!
        </h2>
        <p className="info">
          <a className="author">Shehzor Memon</a>
          <time>2024-06-19 16:45</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          laborum quod fugit neque quas maiores.
        </p>
      </div>
    </div>
  );
}
