 var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content />
        <meta name="keywords" content />
        <title>Nuur - Business</title>
        {/* Favicon */}
        <link href="assets/images/favicon.png" rel="shortcut icon" />
        {/* CSS */}
        <link href="assets/plugins/bootstrap/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/plugins/glightbox/glightbox.min.css" rel="stylesheet" />
        <link href="assets/plugins/scrollcue/scrollcue.css" rel="stylesheet" />
        <link href="assets/plugins/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link href="assets/css/theme.css" rel="stylesheet" />
        {/* Fonts/Icons */}
        <link href="assets/plugins/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/plugins/fontawesome/css/all.css" rel="stylesheet" />
        <link href="assets/plugins/themify/themify-icons.css" rel="stylesheet" />
        {/* Header */}
        <div className="header header-lg transparent-light">
          <div className="container-fluid px-xxl-5">
            {/* Logo */}
            <div className="header-logo">
              <h5 className="uppercase">
                <a href="https://immersivex.in">Nuur</a>
              </h5>
            </div>
            {/* Menu */}
            <div className="header-menu nav-link-hover-line">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Clients</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
            {/* Extras */}
            <div className="header-extra ms-4">
              <ul className="list-inline-lg">
                <li>
                  <a href="#"><i className="bi bi-facebook" /></a>
                </li>
                <li>
                  <a href="#"><i className="bi bi-twitter-x" /></a>
                </li>
                <li>
                  <a href="#"><i className="bi bi-instagram" /></a>
                </li>
              </ul>
            </div>
            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-toggle">
              <span />
            </button>
          </div>
          {/* end container-fluid */}
        </div>
        {/* end Header */}
        <main>
          {/* Hero section */}
          <div className="bg-image parallax" data-bg-src="assets/images/bg-business.jpg">
            <div className="section-spacing-xl bg-black-50">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-xl-10 offset-xl-1">
                    <h1 className="display-1 fw-semi-bold uppercase display-xl">
                      <span className="d-block">Balanced,</span>
                      <span className="d-block font-family-poppins fw-bold stroke-text text-center">Creative</span>
                      <span className="d-block text-end">Solutions</span>
                    </h1>
                  </div>
                </div>
                {/* end row */}
              </div>
              {/* end container */}
            </div>
          </div>
          {/* end Hero section */}
          {/* Clients section */}
          <div className="container">
            <div className="bg-black-70 backdrop-filter-blur p-4 p-lg-5 border-radius-1 box-shadow n-margin-4">
              <div className="row g-3 g-lg-4 align-items-center">
                <div className="col-12 col-lg-3 text-center text-lg-start">
                  <p>We've over 4,000 satisfied clients around the world</p>
                </div>
                <div className="col-12 col-lg-9">
                  <div className="swiper clients-slider-5">
                    <div className="swiper-wrapper">
                      {/* Slider Item 1 */}
                      <div className="swiper-slide">
                        <div className="client-box">
                          <a href="#">
                            <img src="assets/images/client-1-light.png" alt="" />
                          </a>
                        </div>
                      </div>
                      {/* Slider Item 2 */}
                      <div className="swiper-slide">
                        <div className="client-box">
                          <a href="#">
                            <img src="assets/images/client-2-light.png" alt="" />
                          </a>
                        </div>
                      </div>
                      {/* Slider Item 3 */}
                      <div className="swiper-slide">
                        <div className="client-box">
                          <a href="#">
                            <img src="assets/images/client-3-light.png" alt="" />
                          </a>
                        </div>
                      </div>
                      {/* Slider Item 4 */}
                      <div className="swiper-slide">
                        <div className="client-box">
                          <a href="#">
                            <img src="assets/images/client-4-light.png" alt="" />
                          </a>
                        </div>
                      </div>
                      {/* Slider Item 5 */}
                      <div className="swiper-slide">
                        <div className="client-box">
                          <a href="#">
                            <img src="assets/images/client-5-light.png" alt="" />
                          </a>
                        </div>
                      </div>
                      {/* Slider Item 6 */}
                      <div className="swiper-slide">
                        <div className="client-box">
                          <a href="#">
                            <img src="assets/images/client-6-light.png" alt="" />
                          </a>
                        </div>
                      </div>
                      {/* end Slider Item 6 */}
                    </div>
                    {/* end swiper-wrapper */}
                  </div>
                  {/* end clients-slider */}
                </div>
              </div>
              {/* end row */}
            </div>
          </div>
          {/* end container */}
          {/* end Clients section */}
          {/* About section */}
          <div className="section-spacing-lg pb-0">
            <div className="container">
              <div className="row custom-row align-items-center">
                <div className="col-12 col-lg-5 custom-col">
                  <div className="img-overlap">
                    <div className="img-1">
                      <img src="assets/images/business-about-1.jpg" alt="" data-bottom-top="transform: translateY(10px)" data-top-bottom="transform: translateY(-50px)" />
                    </div>
                    <div className="img-2">
                      <img src="assets/images/business-about-2.jpg" alt="" data-bottom-top="transform: translateY(-10px)" data-top-bottom="transform: translateY(60px)" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-7 custom-col">
                  <h2 className="display-5 fw-medium mb-3">A satisfied customer is <span className="text-highlight-gradient-1">the best</span> business strategy of all</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                  <a className="button button-lg button-rounded button-gradient-1 button-hover-slide mt-4 mt-lg-5" href="#"><span data-text="More About Us">More About Us</span></a>
                </div>
              </div>
              {/* end row */}
            </div>
            {/* end container */}
          </div>
          {/* end About section */}
          {/* Facts */}
          <div className="section-spacing">
            <div className="container">
              <div className="row g-4 align-items-center">
                <div className="col-12 col-md-6 col-xl-3" data-cue="slideInUp">
                  <div className="pe-xl-2">
                    <div className="progress-box progress-gradient-1">
                      <h5>Accounting</h5>
                      <div className="animated-progress">
                        <div data-progress={98} />
                      </div>
                    </div>
                    <div className="progress-box progress-gradient-1 mt-4">
                      <h5>HR Management</h5>
                      <div className="animated-progress">
                        <div data-progress={88} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3" data-cue="slideInUp">
                  <div className="bg-gradient-2 bg-opacity-10 border-radius-1 p-4">
                    <div className="h2 display-4 font-family-tertiary fw-normal fst-italic text-dark-30"><span className="counter">500</span>+</div>
                    <div className="text-end">
                      <div className="sm-heading h6 text-dark mb-0">Satisfied Clients</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3" data-cue="slideInUp">
                  <div className="bg-gradient-1 bg-opacity-10 border-radius-1 p-4">
                    <div className="h2 display-4 font-family-tertiary fw-normal fst-italic text-dark-30"><span className="counter">223</span></div>
                    <div className="text-end">
                      <div className="sm-heading h6 text-dark mb-0">Projects Done</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3" data-cue="slideInUp">
                  <div className="bg-gradient-2 bg-opacity-10 border-radius-1 p-4">
                    <div className="h2 display-4 font-family-tertiary fw-normal fst-italic text-dark-30"><span className="counter">100</span>%</div>
                    <div className="text-end">
                      <div className="sm-heading h6 text-dark mb-0">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
            {/* end container */}
          </div>
          {/* end Facts */}
          <div className="container">
            <hr className="hr-diagonal" />
          </div>
          {/* Testimonial section */}
          <div className="section-spacing-sm">
            <div className="container">
              <div className="row g-4 g-lg-5">
                <div className="col-12 col-lg-4">
                  <div className="d-inline-block px-3 py-2 rounded-pill sm-heading title-fade-gradient-1 text-gradient-1 mb-3">Testimonial</div>
                  <h2 className="font-family-tertiary">What people say about us?</h2>
                  <ul className="list-inline mt-3">
                    <li>
                      <a className="button-circle button-circle-dark button-circle-hover-slide testimonial-slider-prev" href="#">
                        <i className="bi bi-arrow-left" />
                        <i className="bi bi-arrow-left" />
                      </a>
                    </li>
                    <li>
                      <a className="button-circle button-circle-dark button-circle-hover-slide testimonial-slider-next" href="#">
                        <i className="bi bi-arrow-right" />
                        <i className="bi bi-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="swiper testimonial-slider">
                    <div className="swiper-wrapper">
                      {/* Slider Item 1 */}
                      <div className="swiper-slide">
                        <div className="d-flex align-items-center mb-3">
                          <img className="img-avatar-70" src="profile-pic.png" alt="" data-rjs={2} />
                          <div className="ps-3">
                            <h5 className="mb-1">Yash Rathore</h5>
                            <span>Founder &amp; CEO @IMMERSIVE X</span>
                          </div>
                        </div>
                        <p className="font-family-tertiary fs-4 fst-italic text-dark-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                      </div>
                      {/* Slider Item 2 */}
                      <div className="swiper-slide">
                        <div className="d-flex align-items-center mb-3">
                          <img className="img-avatar-70" src="assets/images/testimonial-1.jpg" alt="" data-rjs={2} />
                          <div className="ps-3">
                            <h5 className="mb-1">Christina Gray</h5>
                            <span>CMO @IMMERSIVE X</span>
                          </div>
                        </div>
                        <p className="font-family-tertiary fs-4 fst-italic text-dark-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                      </div>
                    </div>
                    {/* end swiper-wrapper */}
                  </div>
                  {/* end swiper */}
                </div>
              </div>
              {/* end row */}
            </div>
            {/* end container */}
          </div>
          {/* end Testimonial section */}
          {/* Sliding Text */}
          <div className="swiper sliding-text bg-dark py-3">
            <div className="swiper-wrapper">
              {/* Item 1 */}
              <div className="swiper-slide">
                <h2 className="display-1 font-family-poppins fw-semi-bold uppercase mb-0">Made By</h2>
              </div>
              {/* Item 2 */}
              <div className="swiper-slide">
                <h2 className="display-1 font-family-poppins fw-bold stroke-text uppercase mb-0">Yash Rathore</h2>
              </div>
              {/* Item 3 */}
              <div className="swiper-slide">
                <h2 className="display-1 font-family-poppins fw-semi-bold uppercase mb-0">XZECT TASK [6 &amp; 7]</h2>
              </div>
              {/* Item 4 */}
              <div className="swiper-slide">
                <h2 className="display-1 font-family-poppins fw-bold stroke-text uppercase mb-0" />
              </div>
            </div>
          </div>
          {/* Sliding Text */}
          {/* Process section */}
          <div className="section-spacing">
            <div className="container">
              <div className="row g-4 g-xl-5 align-items-center">
                <div className="col-12 col-lg-6 col-xl-7 order-lg-2">
                  <img src="assets/images/vector-1.png" alt="" data-bottom-top="transform: translateY(10px)" data-top-bottom="transform: translateY(-50px)" />
                </div>
                <div className="col-12 col-lg-6 col-xl-5 order-lg-1">
                  <h2 className="display-5 fw-medium">The <span className="text-highlight-gradient-1">processes</span> of our services</h2>
                  <div className="process-box active mt-4 mt-xl-5" data-cue="slideInRight">
                    <div className="process-order">
                      <span>1</span>
                    </div>
                    <h4>Strategy &amp; Planning</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                  </div>
                  <div className="process-box mt-4" data-cue="slideInRight">
                    <div className="process-order">
                      <span>2</span>
                    </div>
                    <h4>Provide Services</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                  </div>
                  <div className="process-box mt-4" data-cue="slideInRight">
                    <div className="process-order">
                      <span>3</span>
                    </div>
                    <h4>Deliver Solutions</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
            {/* end container */}
          </div>
          {/* end Process section */}
          {/* Call to Action */}
          <div className="section-spacing pt-0">
            <div className="container-fluid">
              <div className="bg-image parallax border-radius-2" data-bg-src="assets/images/bg-business-2.jpg">
                <div className="section-spacing-lg bg-black-50 px-4 px-md-5 text-center">
                  <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                      <div className="h1 display-4 text-white">Let's work together</div>
                      <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                      <ul className="list-inline-2xl mt-4" data-cues="slideInUp">
                        <li>
                          <a className="button button-rounded button-lg button-gradient-1" href="#">About us</a>
                        </li>
                        <li>
                          <a className="link-hover-line" href="#">Get In Touch</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* end row */}
                </div>
              </div>
              {/* end bg-image */}
            </div>
            {/* end container */}
          </div>
          {/* end Call to Action */}
          {/* Services section */}
          <div className="section-spacing pt-0">
            <div className="container icon-2xl">
              {/* Services Item 1 */}
              <hr className="hr-diagonal" />
              <div className="py-4">
                <div className="row align-items-center g-1">
                  <div className="col-12 col-lg-2">
                    <h2 className="display-4 font-family-poppins font-family-poppins fw-bold stroke-text">01</h2>
                  </div>
                  <div className="col-12 col-lg-8">
                    <h2 className="fw-medium">Financial Accounting and Reporting</h2>
                    <ul className="list-inline-dot">
                      <li>Designated Funds</li>
                      <li>Auxiliary Funds</li>
                      <li>Agency Funds</li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-2 text-lg-end">
                    <a className="d-inline-block mt-3 mt-lg-0" href="#">
                      <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Services Item 2 */}
              <hr className="hr-diagonal" />
              <div className="py-4">
                <div className="row align-items-center g-1">
                  <div className="col-12 col-lg-2">
                    <h2 className="display-4 font-family-poppins font-family-poppins fw-bold stroke-text">02</h2>
                  </div>
                  <div className="col-12 col-lg-8">
                    <h2 className="fw-medium">Statutory Bookkeeping and Accounting</h2>
                    <ul className="list-inline-dot">
                      <li>Financial Data</li>
                      <li>Invoicing</li>
                      <li>Payroll</li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-2 text-lg-end">
                    <a className="d-inline-block mt-3 mt-lg-0" href="#">
                      <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Services Item 3 */}
              <hr className="hr-diagonal" />
              <div className="py-4">
                <div className="row align-items-center g-1">
                  <div className="col-12 col-lg-2">
                    <h2 className="display-4 font-family-poppins font-family-poppins fw-bold stroke-text">03</h2>
                  </div>
                  <div className="col-12 col-lg-8">
                    <h2 className="fw-medium">Periodic Management Reporting</h2>
                    <ul className="list-inline-dot">
                      <li>Marketing Reports</li>
                      <li>Project Progress Reports</li>
                      <li>Social Media Reports</li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-2 text-lg-end">
                    <a className="d-inline-block mt-3 mt-lg-0" href="#">
                      <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Services Item 4 */}
              <hr className="hr-diagonal" />
              <div className="py-4">
                <div className="row align-items-center g-1">
                  <div className="col-12 col-lg-2">
                    <h2 className="display-4 font-family-poppins font-family-poppins fw-bold stroke-text">04</h2>
                  </div>
                  <div className="col-12 col-lg-8">
                    <h2 className="fw-medium">Company formation and structuring</h2>
                    <ul className="list-inline-dot">
                      <li>Sole Proprietorship</li>
                      <li>Partnership</li>
                      <li>Limited Liability Company</li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-2 text-lg-end">
                    <a className="d-inline-block mt-3 mt-lg-0" href="#">
                      <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <hr className="hr-diagonal" />
            </div>
            {/* end container */}
          </div>
          {/* end Services section */}
          {/* Blog section */}
          <div className="section-spacing-sm bg-gray">
            <div className="container">
              <div className="row g-4 g-lg-5 align-items-center">
                <div className="col-12 col-lg-5 col-xl-4">
                  <div className="d-inline-block px-3 py-2 rounded-pill sm-heading title-fade-gradient-1 text-gradient-1 mb-3">Journal</div>
                  <h2 className="font-family-tertiary">Recent Blog Posts</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                  <ul className="list-inline mt-3">
                    <li>
                      <a className="button-circle button-circle-dark button-circle-hover-slide blog-slider-2sm-prev" href="#">
                        <i className="bi bi-arrow-left" />
                        <i className="bi bi-arrow-left" />
                      </a>
                    </li>
                    <li>
                      <a className="button-circle button-circle-dark button-circle-hover-slide blog-slider-2sm-next" href="#">
                        <i className="bi bi-arrow-right" />
                        <i className="bi bi-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-7 col-xl-8">
                  <div className="swiper blog-slider-2sm">
                    <div className="swiper-wrapper">
                      {/* Slider Item 1 */}
                      <div className="swiper-slide">
                        <div className="float-card">
                          <div className="img-link-box">
                            <a href="#">
                              <img src="#" alt="" />
                            </a>
                          </div>
                          <div className="float-card-text bg-white border-radius">
                            <ul className="list-inline-dash mb-2 font-small">
                              <li>Mar 4, 2024</li>
                              <li>Work</li>
                            </ul>
                            <h4 className="mb-0">
                              <a className="link-hover-line" href="#">Best work environment</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      {/* Slider Item 2 */}
                      <div className="swiper-slide">
                        <div className="float-card">
                          <div className="img-link-box">
                            <a href="#">
                              <img src="assets/images/blog-slide-2.jpg" alt="" />
                            </a>
                          </div>
                          <div className="float-card-text bg-white border-radius">
                            <ul className="list-inline-dash mb-2 font-small">
                              <li>Mar 4, 2024</li>
                              <li>Lifestyle</li>
                            </ul>
                            <h4 className="mb-0">
                              <a className="link-hover-line" href="#">Keeping things simple</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      {/* Slider Item 3 */}
                      <div className="swiper-slide">
                        <div className="float-card">
                          <div className="img-link-box">
                            <a href="#">
                              <img src="assets/images/blog-slide-3.jpg" alt="" />
                            </a>
                          </div>
                          <div className="float-card-text bg-white border-radius">
                            <ul className="list-inline-dash mb-2 font-small">
                              <li>Mar 4, 2024</li>
                              <li>Tips</li>
                            </ul>
                            <h4 className="mb-0">
                              <a className="link-hover-line" href="#">Tips for healthy lifestyle</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end swiper */}
                </div>
              </div>
              {/* end row */}
            </div>
            {/* end container */}
          </div>
          {/* end Blog section */}
          {/* Footer */}
          <div className="bg-black">
            <div className="section-spacing-xs">
              <div className="container">
                <div className="row g-4 g-lg-5">
                  <div className="col-12 col-lg-3">
                    <h2 className="uppercase letter-spacing-1">Nuur</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing</p>
                    <ul className="list-inline-lg mt-2 mt-lg-3">
                      <li>
                        <a href="#"><i className="bi bi-facebook" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="bi bi-twitter-x" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="bi bi-instagram" /></a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-lg-2 offset-lg-1">
                    <h6 className="sm-heading">Explore</h6>
                    <ul className="list-unstyled mt-3">
                      <li>
                        <a className="link-hover-line" href="#">About us</a>
                      </li>
                      <li>
                        <a className="link-hover-line" href="#">Services</a>
                      </li>
                      <li>
                        <a className="link-hover-line" href="#">Clients</a>
                      </li>
                      <li>
                        <a className="link-hover-line" href="#">Pricing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-lg-2">
                    <h6 className="sm-heading">Useful</h6>
                    <ul className="list-unstyled mt-3">
                      <li>
                        <a className="link-hover-line" href="#">Contact</a>
                      </li>
                      <li>
                        <a className="link-hover-line" href="#">FAQs</a>
                      </li>
                      <li>
                        <a className="link-hover-line" href="#">Careers</a>
                      </li>
                      <li>
                        <a className="link-hover-line" href="#">Policy</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div>
                      <h3 className="mb-1">contact@example.com</h3>
                      <p>Mon-Fri 9am-5pm</p>
                    </div>
                    <div className="mt-3 mt-lg-4">
                      <h3 className="mb-1">+123 456 7890</h3>
                      <p>Call or WhatsApp</p>
                    </div>
                  </div>
                </div>
                {/* end row */}
              </div>
              {/* end container */}
            </div>
            <div className="container">
              <hr className="hr-diagonal" />
              <div className="py-4">
                <div className="row g-2">
                  <div className="col-12 col-md-6 text-center text-md-start">
                    <p>© 2024 FlaTheme, All Rights Reserved.</p>
                  </div>
                  <div className="col-12 col-md-6 text-center text-md-end">
                    <ul className="list-inline-dot">
                      <li><a className="link-hover-line" href="#">Help Center</a></li>
                      <li><a className="link-hover-line" href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
                {/* end row */}
              </div>
            </div>
            {/* end container */}
          </div>
          {/* end Footer */}
        </main>
        {/* Cursors */}
        <div className="cursors">
          <div className="cursor-inner" />
        </div>
        {/* end Cursors */}
        {/* Scroll to Top */}
        <div className="scrolltotop icon-lg">
          <i className="bi bi-arrow-up-short" />
        </div>
        {/* end Scroll to Top */}
        {/* JavaScripts */}
      </div>
    );
  }
});