import { useState } from 'react';
import './styles.css';

function PageSimulator({ 
    personalData = {},
    study = [],
    experience = [],
    cert = [],
    language = [],
    abilities = []
}) {
    return (
        <div class="container">
    <h1>{personalData.imie} {personalData.nazwisko}</h1>
    <p>{personalData.opis}</p>

    <h2>Kontakt</h2>
    <ul>
      <li>Email: <code>{personalData.email}</code></li>
      <li>Numer: <code>{personalData.numer}</code></li>
    </ul>

    <h2>Doświadczenie</h2>
    <ul>
      <li><code>Senior Fullstack Developer</code> @ TechCorp (2022–2025)
        <br />Technologie: <code>React</code>, <code>Node.js</code>, <code>Docker</code>
      </li>
      <li><code>Frontend Developer</code> @ Webify (2020–2022)
        <br />Technologie: <code>Vue.js</code>, <code>TypeScript</code>
      </li>
    </ul>

    <h2>Wykształcenie</h2>
    <ul>
      <li>Inżynieria Oprogramowania, Politechnika Warszawska (2016–2020)</li>
    </ul>

    <h2>Umiejętności</h2>
    <ul>
      <li><code>JavaScript</code>, <code>TypeScript</code>, <code>Python</code></li>
      <li><code>React</code>, <code>Next.js</code>, <code>Express</code></li>
      <li><code>MongoDB</code>, <code>PostgreSQL</code>, <code>Docker</code>, <code>Git</code></li>
    </ul>

    <hr />

    <footer>
      © 2025 Jan Kowalski — CV w stylu README.md
    </footer>
  </div>
    );
}

export default PageSimulator;
