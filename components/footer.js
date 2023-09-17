class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        footer {
          background-color: #191919;
          padding: 70px 0 0;
        }
        @media (max-width: 767px) {
          footer {
            text-align: center;
          }
        }
        
        footer .container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 40px;
        }
        
        footer .box h3 {
          color: #fff;
          font-size: 50px;
          margin: 0 0 20px;
        }
        
        footer .box .social {
          display: flex;
        }
        @media (max-width: 767px) {
          footer .box .social {
            justify-content: center;
          }
        }
        
        footer .box .social li {
          margin-right: 10px;
        }
        
        footer .box .social a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          color: #898989;
          background-color: #313131;
          width: 50px;
          height: 50px;
          font-size: 20px;
          transition: var(--main-duration);
          -webkit-transition: var(--main-duration);
          -moz-transition: var(--main-duration);
          -ms-transition: var(--main-duration);
          -o-transition: var(--main-duration);
        }
        
        footer .box .social .facebook:hover {
          background-color: #1877f2;
        }
        
        footer .box .social .twitter:hover {
          background-color: #1da1f2;
        }
        
        footer .box .social .youtube:hover {
          background-color: #ff0000;
        }
        
        footer .box .text {
          color: #b9b9b9;
          line-height: 2;
        }
        
        footer .box .links li {
          padding: 15px 0;
          transition: var(--main-duration);
          -webkit-transition: var(--main-duration);
          -moz-transition: var(--main-duration);
          -ms-transition: var(--main-duration);
          -o-transition: var(--main-duration);
        }
        
        footer .box .links li:not(:last-child) {
          border-bottom: 1px solid #444;
        }
        
        footer .box .links li:hover {
          padding-left: 10px;
        }
        
        footer .box .links li a::before {
          font-family: "Font Awesome 5 Free";
          content: "\F101";
          font-weight: 900;
          color: var(--main-color);
          margin-right: 10px;
          font-size: 18px;
        }
        
        footer .box .links li a {
          color: #b9b9b9;
          transition: var(--main-duration);
          -webkit-transition: var(--main-duration);
          -moz-transition: var(--main-duration);
          -ms-transition: var(--main-duration);
          -o-transition: var(--main-duration);
        }
        
        footer .box .links li:hover a {
          color: #fff;
        }
        
        footer .box .line {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #b9b9b9;
          margin-bottom: 30px;
        }
        @media (max-width: 767px) {
          footer .box .line {
            flex-direction: column;
          }
        }
        
        footer .box .line i {
          font-size: 25px;
          color: var(--main-color);
          margin-right: 10px;
        }
        @media (max-width: 767px) {
          footer .box .line i {
            margin-bottom: 10px;
          }
        }
        
        footer .box .line .info {
          line-height: 1.7;
          flex: 1;
        }
        
        footer .box .line .info span {
          display: block;
        }
        
        footer .footer-gallery img {
          width: 78px;
          border: 3px solid #fff;
          margin: 2px;
        }
        
        footer .copyright {
          margin: 50px 0 0;
          padding: 25px 0;
          text-align: center;
          color: #fff;
          text-transform: uppercase;
          border-top: 1px solid #444;
        }
      </style>
      <footer>
        <div class="container">
          <div class="box">
            <h3>EL-Ghoz</h3>
            <ul class="social">
              <li>
                <a href="#" class="facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" class="twitter">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" class="youtube">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
            <p class="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste
              aspernatur
            </p>
          </div>
          <div class="box">
            <ul class="links">
              <li><a href="#">Important Link 1</a></li>
              <li><a href="#">Important Link 2</a></li>
              <li><a href="#">Important Link 3</a></li>
              <li><a href="#">Important Link 4</a></li>
              <li><a href="#">Important Link 5</a></li>
            </ul>
          </div>
          <div class="box">
            <div class="line">
              <i class="fas fa-map-marker-alt fa-fw"></i>
              <div class="info">Egypt, Giza, Inside The Sphinx, Room Number 220</div>
            </div>
            <div class="line">
              <i class="far fa-clock fa-fw"></i>
              <div class="info">Business Hours: From 10:00 To 18:00</div>
            </div>
            <div class="line">
              <i class="fas fa-phone-volume fa-fw"></i>
              <div class="info">
                <span>+20123456789</span>
                <span>+20198765432</span>
              </div>
            </div>
          </div>
          <div class="box footer-gallery">
            <img src="media/gallery-01.png" alt="">
            <img src="media/gallery-02.png" alt="">
            <img src="media/gallery-03.jpg" alt="">
            <img src="media/gallery-04.png" alt="">
            <img src="media/gallery-05.jpg" alt="">
            <img src="media/gallery-06.png" alt="">
          </div>
        </div>
        <p class="copyright">Made With 	<span style="color: var(--main-color);">&#10084;</span> by EL-Ghoz</p>
      </footer>
    `
  }
}

customElements.define(`footer-component`, Footer);