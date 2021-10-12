
import './App.css';
import discordlogo from './assets/img/icon_clyde_white_RGB.png'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import githublogo from './assets/img/GitHub-Mark-Light-64px.png'
import arrow from './assets/img/dropdown.png'

function App() {
  return (
    <div className="App">
      <div id = "wrapper">
      <div class = 'leftpanel'>
       <div class='leftbanner' id='leftbanner'>
            <div class='leftbannertext'>
                <h1>Jayleaf</h1>
                <p>Web Development, Unreal Engine Development, and Discord Bots.</p>
            </div>
        </div>
        <div class = 'icons'>
                <ul>
                    <li class = 'clydeLI'><Tippy content={"Jayleaf#1234 (don't be afraid to contact me!)"} placement={'bottom'} interactive={true}><button class="btn btn01"><img src={discordlogo} id="clyde" alt=""></img></button></Tippy></li>
                    <li class = 'githubLI'><Tippy content={<a href="https://github.com/Jayleaf">https://github.com/Jayleaf</a>} placement={'bottom'} interactive={true}><button class="btn btn02"><img src={githublogo} id="github" alt=""></img></button></Tippy></li>
                </ul>
        </div>
        <div class = 'dropdown' id='dropdown'>
          <Tippy content={"hey there"} placement={'bottom'}><button class = 'dropdownbtn'><img src={arrow} id="darrow" alt=""></img></button></Tippy>
        </div>
        <script src="https://unpkg.com/popper.js/dist/umd/popper.min.js"></script>
        <script src="https://unpkg.com/tippy.js/dist/tippy.standalone.min.js"></script>
    </div>
    </div>
    </div>
  );
}

export default App;
