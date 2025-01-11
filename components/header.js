class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <header>
      <div class="row container">
    <div class="col-xl-3 col-xl-offset-2">
        <img id='profile' src='media/profile-dec2017-small.jpg' alt='Kenzipic'>
        <h1><a href='/'>The Nerdy Feline</a></h1>
        <h2>Jackie Wellons</h2>
        <h2>jmw5050@gmail.com</h2>
    </div>
    <div class="col-xl-offset-10 col-xl-2">
        <nav class="navbar-fixed navbar-right" id='links'>
      <div class="container-fluid">
          <div class="navbar-header">
          </div>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
        <li><a href='https://www.github.com/thenerdyfeline' title='thenerdyfeline' class="navlink">Github<span class="sr-only"></span></a></li>
        <br>
        <li><a href="https://www.linkedin.com/in/jackiewellons/" title="linkedin" class="navlink">Linkedin</a></li>
        <br>
        <li><a href="aboutme.html" title="aboutme" class="navlink">About Me</a></li>
        <br>
        <li><a href="recent-adventures.html" title="recent-adventures" class="navlink">Recent Accomplishments</a></li>

          </ul>
      </div>
        </nav>
    </div>
      </div>
  </header>
  `;
  }
}

customElements.define('header-component', Header);