class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="../css/all.min.css">
      <style>
        header {
          background-color: #fff;
          position: relative;
          box-shadow: 0 0 10px #ddd;
          -webkit-box-shadow: 0 0 10px #ddd;
          -moz-box-shadow: 0 0 10px #ddd;
          -o-box-shadow: 0 0 10px #ddd;
          -ms-box-shadow: 0 0 10px #ddd;
          /* variables */
          --h-height: 60px;
        }
        
        header .container {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }
        
        header .logo {
          color: var(--main-color);
          font-size: 26px;
          font-weight: bold;
          height: var(--h-height);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 767px) {
          header .logo {
            width: 100%;
            height: 50px;
          }
        }
        
        header nav > ul {
          display: flex;
        }
        @media (max-width: 767px) {
          header nav {
            margin: auto;
          }
        }
        
        header nav > ul > li:hover .mega-menu {
          opacity: 1;
          z-index: 100;
          top: calc(100% + 1px);
        }
        
        header nav > ul > li > a {
          display: flex;
          justify-content: center;
          align-items: center;
          height: var(--h-height);
          position: relative;
          color: #000;
          padding: 0 30px;
          overflow: hidden;
          transition: var(--main-duration);
          -webkit-transition: var(--main-duration);
          -moz-transition: var(--main-duration);
          -ms-transition: var(--main-duration);
          -o-transition: var(--main-duration);
        }
        @media (max-width: 767px) {
          header nav > ul > li > a {
            padding: 10px;
            font-size: 14px;
            height: 40px;
          }
        }
        
        header nav > ul > li > a::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 4px;
          background-color: var(--main-color);
          top: 0;
          left: -100%;
          transition: var(--main-duration);
          -webkit-transition: var(--main-duration);
          -moz-transition: var(--main-duration);
          -ms-transition: var(--main-duration);
          -o-transition: var(--main-duration);
        }
        
        header nav > ul > li > a:hover {
          color: var(--main-color);
          background-color: #ebebeb;
        }
        
        header nav > ul > li > a:hover::before {
          left: 0;
        }
        
        /* Mega Menu */
        header .mega-menu {
          position: absolute;
          top: calc(100% + 50px);
          left: 0;
          background: white;
          width: 100%;
          display: flex;
          gap: 40px;
          z-index: -1;
          opacity: 0;
          padding: 30px;
          border-bottom: 3px solid var(--main-color);
          transition: top var(--main-duration), opacity var(--main-duration);
          -webkit-transition: top var(--main-duration), opacity var(--main-duration);
          -moz-transition: top var(--main-duration), opacity var(--main-duration);
          -ms-transition: top var(--main-duration), opacity var(--main-duration);
          -o-transition: top var(--main-duration), opacity var(--main-duration);
        }
        @media (max-width: 767px) {
          header .mega-menu {
            flex-direction: column;
            gap: 0;
            padding: 5px;
          }
        }
        
        header .mega-menu .image img {
          max-width: 100%;
        }
        @media (max-width: 991px) {
          header .mega-menu .image {
            display: none;
          }
        }
        
        header .mega-menu .links {
          min-width: 230px;
          flex: 1;
        }
        
        header .mega-menu .links li {
          position: relative;
        }
        
        header .mega-menu .links li:not(:last-child) {
          border-bottom: 1px solid #e9e6e6;
        }
        @media (max-width: 767px) {
          header .mega-menu .links:nth-of-type(1) li:last-of-type {
            border-bottom: 1px solid #e9e6e6;
          }
        }
        
        header .mega-menu .links li::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: #fafafa;
          z-index: -1;
          transition: width var(--main-duration);
          -webkit-transition: width var(--main-duration);
          -moz-transition: width var(--main-duration);
          -ms-transition: width var(--main-duration);
          -o-transition: width var(--main-duration);
        }
        
        header .mega-menu .links li:hover::before {
          width: 100%;
        }
        
        header .mega-menu .links a {
          display: block;
          padding: 15px;
          font-size: 18px;
          font-weight: bold;
          color: var(--main-color);
        }
        
        header .mega-menu .links a i {
          margin-right: 10px;
        }
      </style>
      <header id="header">
        <div class="container">
          <a href="#" class="logo">El-Ghoz</a>
          <nav>
            <ul>
              <li><a href="#articles">Articles</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#features">Features</a></li>
              <li>
                <a href="#">Other Links</a>
                <!-- Start Megamenu -->
                <div class="mega-menu">
                  <div class="image">
                    <img src="media/megamenu.png" alt="mega-menu image">
                  </div>
                  <ul class="links">
                    <li><a href="#testimonials"><i class="far fa-comments fa-fw"></i>Testimonials</a></li>
                    <li><a href="#team"><i class="far fa-user fa-fw"></i>Team Members</a></li>
                    <li><a href="#services"><i class="far fa-building fa-fw"></i>Services</a></li>
                    <li><a href="#our-skills"><i class="far fa-check-circle fa-fw"></i>Our Skills</a></li>
                    <li><a href="#work-steps"><i class="far fa-clipboard fa-fw"></i>How It Works</a></li>
                  </ul>
                  <ul class="links">
                    <li><a href="#events"><i class="far fa-calendar-alt fa-fw"></i>Events</a></li>
                    <li><a href="#pricing"><i class="fas fa-server fa-fw"></i>Pricing Plans</a></li>
                    <li><a href="#videos"><i class="far fa-play-circle fa-fw"></i>Top Videos</a></li>
                    <li><a href="#stats"><i class="far fa-chart-bar fa-fw"></i>Stats</a></li>
                    <li><a href="#discount"><i class="fas fa-percent fa-fw"></i>Request A Discount</a></li>
                  </ul>
                </div>
                <!-- End Megamenu -->
              </li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
