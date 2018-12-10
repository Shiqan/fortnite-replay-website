<template>
    <footer class="footer has-cards">
        <div class="container">
            <card gradient="warning"
                no-body
                shadow-size="lg"
                class="border-0">
                <div class="p-5">
                    <div class="row align-items-center">
                        <div class="col-lg-9">
                            <h3 class="text-white">We made Fortnite stats tracking easier for you.</h3>
                            <p class="lead text-white mt-3">Download the windows service to automatically upload all your replays.</p>
                        </div>
                        <div class="col-lg-3 ml-lg-auto">
                            <base-button tag="a" href="https://www.creative-tim.com/product/vue-argon-design-system"
                                        type="white" block size="lg">
                                Download tracker
                            </base-button>
                        </div>
                    </div>
                </div>
            </card>
        </div>
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
                    <h4 class="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <a target="_blank" href="https://twitter.com/"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" href="https://github.com/Shiqan/fortnite-replay-website"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Star on Github">
                        <i class="fa fa-github"></i>
                    </a>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; 2018
                        <a href="https://github.com/Shiqan" target="_blank">Shiqan</a>.
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <router-link to="/about-us" class="nav-link">
                                About Us
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a href="https://github.com/Shiqan/fortnite-replay-website#license"
                               class="nav-link" target="_blank">MIT License</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {};
</script>
<style>
</style>
