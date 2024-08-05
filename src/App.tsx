import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Unity, useUnityContext} from "react-unity-webgl";

function App() {

  const { unityProvider, isLoaded, loadingProgression} = useUnityContext({
    loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data.unityweb",
    frameworkUrl: "Build/Build.framework.js.unityweb",
    codeUrl: "Build/Build.wasm.unityweb",
  });

  // We'll round the loading progression to a whole number to represent the
  // percentage of the Unity Application that has loaded.
  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <img src={logo} className="App-logo-2" alt="logo"/>

        {!isLoaded && (
            // We'll conditionally render the loading overlay if the Unity
            // Application is not loaded.
            <div className="loading-overlay">
              <p>Loading... ({loadingPercentage}%)</p>
            </div>
        )}
        <Unity className="unity" unityProvider={unityProvider} style={{width: 500, height: 500}}/>
      </header>
    </div>
  );
}

export default App;
