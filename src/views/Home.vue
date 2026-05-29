<template>
  <div>
    <!-- Masthead -->
    <header class="masthead">
      <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div class="text-center">
          <h1 class="mx-auto my-0 text-uppercase">Grayscale</h1>
          <h2 class="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme.</h2>
          <a class="btn btn-primary" href="#about">Get Started</a>
        </div>
      </div>
    </header>

    <!-- About -->
    <section class="about-section text-center" id="about">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8">
            <h2 class="text-white mb-4">Built with Bootstrap 5</h2>
            <p class="text-white-50">Grayscale is a free Bootstrap theme created by Start Bootstrap.</p>
          </div>
        </div>
        <img class="img-fluid" src="/assets/img/ipad.png" alt="..." />
      </div>
    </section>

    <!-- Projects -->
    <section class="projects-section bg-light" id="projects">
      <div class="container px-4 px-lg-5">
        <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
          <div class="col-xl-8 col-lg-7">
            <img class="img-fluid mb-3 mb-lg-0" src="/assets/img/bg-masthead.jpg" alt="..." />
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="featured-text text-center text-lg-left">
              <h4>Shoreline</h4>
              <p class="text-black-50 mb-0">Grayscale is open source and MIT licensed.</p>
            </div>
          </div>
        </div>
        <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
          <div class="col-lg-6">
            <img class="img-fluid" src="/assets/img/demo-image-01.jpg" alt="..." />
          </div>
          <div class="col-lg-6">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center">
                  <h4 class="text-white">Misty</h4>
                  <p class="mb-0 text-white-50">An example of a project description.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Signup -->
    <section class="signup-section" id="signup">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5">
          <div class="col-md-10 col-lg-8 mx-auto text-center">
            <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 class="text-white mb-5">Subscribe to receive updates!</h2>
            <form class="form-signup">
              <div class="row input-group-newsletter">
                <div class="col">
                  <input class="form-control" type="email" placeholder="Enter email address..." />
                </div>
                <div class="col-auto">
                  <button class="btn btn-primary" type="submit">Notify Me!</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="contact-section bg-black">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5">
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Address</h4>
                <hr class="my-4 mx-auto" />
                <div class="small text-black-50">4923 Market Street, Orlando FL</div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-envelope text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Email</h4>
                <hr class="my-4 mx-auto" />
                <div class="small text-black-50">hello@yourdomain.com</div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Phone</h4>
                <hr class="my-4 mx-auto" />
                <div class="small text-black-50">+1 (555) 902-8832</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="social d-flex justify-content-center">
        <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
        <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
        <a class="mx-2" href="#!"><i class="fab fa-github"></i></a>
      </div>
    </section>
  </div>
</template>