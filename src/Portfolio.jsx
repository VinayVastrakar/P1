import React, { useEffect, useState } from "react";
import "./css/styles.css";
import data from "./Data/data.json";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    setPortfolioData(data);
  }, []);


  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!portfolioData) return <p>Loading...</p>;

  return (
    <div>
      <header>
        <h1>{portfolioData.name}</h1>
        <p>{portfolioData.title}</p>
        <nav>
          <ul>
            {portfolioData.sections.map((section) => (
              <li key={section.id}>
                {/* <a href={`#${section.id}`}>{section.title}</a> */}
                <button onClick={() => handleScroll(section.id)} className="nav-button">{section.title}</button>
                </li>
            ))}
          </ul>
        </nav>
      </header>
      {portfolioData.sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          {section.content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </section>
      ))}

      <footer>
        <p>&copy; 2025 {portfolioData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;