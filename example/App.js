import React from 'react';
// Kaynak kodundan import ediyoruz.
import Tooltip from '../src/Tooltip.tsx';

// Test için kullanılacak ikonlar (basit SVG'ler)
const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319a1.873 1.873 0 0 1-1.25.99l-.34.07a1.873 1.873 0 0 1-1.11-1.558l-.12-.34a1.873 1.873 0 0 0-1.616-1.23l-.34-.07a1.873 1.873 0 0 0-1.558 1.11l-.34.12a1.873 1.873 0 0 0-1.23 1.616l-.07.34a1.873 1.873 0 0 0 1.11 1.558l.12.34a1.873 1.873 0 0 0 1.616 1.23l.34.07a1.873 1.873 0 0 0 1.558-1.11l.34-.12a1.873 1.873 0 0 1 1.23-1.616l.07-.34a1.873 1.873 0 0 1 1.558-1.11l.34-.12a1.873 1.873 0 0 1 1.616 1.23l.12.34a1.873 1.873 0 0 1-1.11 1.558l-.34.07a1.873 1.873 0 0 1-1.25-.99l-.094-.319zM6.715 3.65c.16-.538.9-1.03 1.485-1.03.584 0 1.325.492 1.485 1.03l.094.319a.873.873 0 0 0 1.05.734l.318-.08a.873.873 0 0 1 .95.406l.19.33a.873.873 0 0 1-.225 1.07l-.28.205a.873.873 0 0 0 0 1.21l.28.205a.873.873 0 0 1 .225 1.07l-.19.33a.873.873 0 0 1-.95.406l-.318-.08a.873.873 0 0 0-1.05.734l-.094.319c-.16.538-.9 1.03-1.485 1.03s-1.325-.492-1.485-1.03l-.094-.319a.873.873 0 0 0-1.05-.734l-.318.08a.873.873 0 0 1-.95-.406l-.19-.33a.873.873 0 0 1 .225-1.07l.28-.205a.873.873 0 0 0 0-1.21l-.28-.205a.873.873 0 0 1-.225-1.07l.19-.33a.873.873 0 0 1 .95-.406l.318.08a.873.873 0 0 0 1.05-.734l.094-.319zM8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>
  </svg>
);

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1><code>react-simple-tooltip-fc</code></h1>
        <p>A lightweight, accessible, and customizable tooltip component for React.</p>
      </header>
      
      <main>
        <section className="card">
          <h2>Positioning</h2>
          <p>Control where the tooltip appears relative to its child.</p>
          <div className="showcase">
            <Tooltip content="Position: top (default)">
              <button>Top</button>
            </Tooltip>
            <Tooltip content="Position: bottom" position="bottom">
              <button>Bottom</button>
            </Tooltip>
            <Tooltip content="Position: left" position="left">
              <button>Left</button>
            </Tooltip>
            <Tooltip content="Position: right" position="right">
              <button>Right</button>
            </Tooltip>
          </div>
        </section>

        <section className="card">
          <h2>Triggers & Styling</h2>
          <p>Activate on click, and customize colors, borders, and more.</p>
          <div className="showcase">
            <Tooltip content="You need to click me!" trigger="click">
              <button>Click Me</button>
            </Tooltip>
            <Tooltip
              content="I'm a custom-styled tooltip!"
              backgroundColor="hsl(220, 90%, 55%)"
              textColor="#fff"
              borderRadius={8}
            >
              <button>Custom Style</button>
            </Tooltip>
            <Tooltip 
              content={
                <div style={{ textAlign: 'left' }}>
                  <h4>Rich Content</h4>
                  <p>You can pass <strong>any JSX</strong> as content.</p>
                </div>
              }
              position="bottom"
            >
              <button>JSX Content</button>
            </Tooltip>
          </div>
        </section>

        <section className="card">
          <h2>Real-World Scenarios</h2>
          <p>Tooltips are perfect for icons and providing extra context.</p>
          <div className="showcase">
            <label>Username</label>
            <div className="input-group">
              <input type="text" placeholder="Enter your username" />
              <Tooltip content="Your username must be unique and at least 3 characters long." position="right">
                <span className="icon-button"><InfoIcon /></span>
              </Tooltip>
            </div>
            <Tooltip content="Open Settings" position="top">
              <button className="icon-button"><SettingsIcon /></button>
            </Tooltip>
          </div>
        </section>

        <section className="card">
          <h2>Portal Test: Escaping Overflow</h2>
          <p>This tooltip is rendered inside a container with <code>overflow: hidden</code>. Thanks to React Portals, it "escapes" and is not clipped.</p>
          <div className="overflow-box">
            <Tooltip content="I am not clipped!" position="right">
              <button>Hover Me</button>
            </Tooltip>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;