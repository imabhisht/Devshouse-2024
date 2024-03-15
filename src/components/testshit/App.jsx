import React, { useEffect } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import gs_tailwind from 'grapesjs-tailwind';
import gs_ga from 'grapesjs-ga';
import gs_ct from 'grapesjs-component-twitch';
import gs_pf from 'grapesjs-plugin-forms';
import "./App.css"
// import "grapesjs/dist/css/"

const escapeName = (name) =>
  `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, "-");

const GrapesJSComponent = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      height: "100vh", // Increase height for better visibility
      container: "#gjs",
      showOffsets: true,
      fromElement: true,
      noticeOnUnload: false,
      storageManager: false,
      selectorManager: { escapeName },
      plugins: [
        gs_ga,
        gs_ct,
        gs_pf,
        gs_tailwind
      ],
      pluginsOpts: {
        "grapesjs-ga": {
          /* Test here your options  */
        },
        "grapesjs-component-twitch": {
          /* Test here your options  */
        }
      }
    });

    editor.Panels.addButton("options", {
      id: "update-theme",
      className: "fa fa-adjust",
      command: "open-update-theme",
      attributes: {
        title: "Update Theme",
        "data-tooltip-pos": "bottom"
      }
    });

    return () => {
      editor.destroy(); // Destroy the editor on component unmount
    };
  }, []);

  return (
    <body>
    <div id="gjs" style={{ height: '100vh' }}>
      <div className="panel">
        <h1 className="welcome">Welcome to</h1>
        <div className="big-title">
          <svg className="logo" viewBox="0 0 100 100">
            <path
              d="M40 5l-12.9 7.4 -12.9 7.4c-1.4 0.8-2.7 2.3-3.7 3.9 -0.9 1.6-1.5 3.5-1.5 5.1v14.9 14.9c0 1.7 0.6 3.5 1.5 5.1 0.9 1.6 2.2 3.1 3.7 3.9l12.9 7.4 12.9 7.4c1.4 0.8 3.3 1.2 5.2 1.2 1.9 0 3.8-0.4 5.2-1.2l12.9-7.4 12.9-7.4c1.4-0.8 2.7-2.2 3.7-3.9 0.9-1.6 1.5-3.5 1.5-5.1v-14.9 -12.7c0-4.6-3.8-6-6.8-4.2l-28 16.2" />
          </svg>
          <span>GrapesJS</span>
        </div>
        <div className="description">
          This is a demo content from index.html. For the development, you shouldn't edit this file, instead you can copy and rename it to _index.html, on next server start the new file will be served, and it will be ignored by git.
        </div>
      </div>
      <style>
        {`
          .panel {
            width: 90%;
            max-width: 700px;
            border-radius: 3px;
            padding: 30px 20px;
            margin: 150px auto 0px;
            background-color: #d983a6;
            box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
            color: rgba(255, 255, 255, 0.75);
            font: caption;
            font-weight: 100;
          }
          .welcome {
            text-align: center;
            font-weight: 100;
            margin: 0px;
          }
          .logo {
            width: 70px;
            height: 70px;
            vertical-align: middle;
          }
          .logo path {
            pointer-events: none;
            fill: none;
            stroke-linecap: round;
            stroke-width: 7;
            stroke: #fff
          }
          .big-title {
            text-align: center;
            font-size: 3.5rem;
            margin: 15px 0;
          }
          .description {
            text-align: justify;
            font-size: 1rem;
            line-height: 1.5rem;
          }
        `}
      </style>
    </div>
    </body>
    
  );
};

export default GrapesJSComponent;