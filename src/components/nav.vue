<template>
  <div>
    <b-navbar toggleable="lg"  class="navbar navbar-custom">
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">MyAccount</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand class="brand-custom"  href="#">Wood box</b-navbar-brand>

      <svg @click="test()" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           width="45" height="45"
           viewBox="0 0 172 172"
           style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none"  font-size="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M67.1875,1.34375c-5.24063,0 -9.675,3.35938 -11.42187,8.0625h-23.51562c-1.74687,0 -3.3599,1.20833 -3.8974,2.9552l-12.4953,42.7323h-10.4823c-1.20937,0 -2.28333,0.5375 -2.9552,1.34375c-0.67187,0.80625 -1.21042,2.01615 -1.07605,3.22553l11.9599,95.67395c1.075,8.73438 8.60052,15.31927 17.3349,15.31927h110.58905c8.73438,0 16.2599,-6.5849 17.3349,-15.31927l11.9599,-95.67395c0.26875,-1.20938 -0.13595,-2.2849 -0.9422,-3.22553c-0.80625,-0.80625 -1.8802,-1.34375 -2.9552,-1.34375h-10.4823l-12.62915,-42.7323c-0.40312,-1.74687 -2.01667,-2.9552 -3.76355,-2.9552h-23.51562c-1.6125,-4.70312 -6.18125,-8.0625 -11.42187,-8.0625zM67.1875,9.40625h37.625c2.28437,0 4.03125,1.74688 4.03125,4.03125c0,2.28437 -1.74688,4.03125 -4.03125,4.03125h-37.625c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125zM35.2052,17.46875h20.56042c1.6125,4.70313 6.18125,8.0625 11.42188,8.0625h37.625c5.24063,0 9.675,-3.35937 11.42188,-8.0625h20.56042l11.0177,37.625h-123.625zM9.94427,63.15625h152.11145l-11.42187,91.24115c-0.5375,4.70313 -4.56927,8.19635 -9.2724,8.19635h-110.7229c-4.70312,0 -8.7349,-3.49323 -9.2724,-8.19635zM72.5625,81.96875c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125v53.75c0,2.28438 1.74688,4.03125 4.03125,4.03125c2.28437,0 4.03125,-1.74687 4.03125,-4.03125v-53.75c0,-2.28437 -1.74688,-4.03125 -4.03125,-4.03125zM99.4375,81.96875c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125v53.75c0,2.28438 1.74688,4.03125 4.03125,4.03125c2.28437,0 4.03125,-1.74687 4.03125,-4.03125v-53.75c0,-2.28437 -1.74688,-4.03125 -4.03125,-4.03125zM39.36243,82.08685c-0.2614,-0.02257 -0.5291,-0.01785 -0.79785,0.01575c-2.15,0.26875 -3.76198,2.28543 -3.49323,4.43543l6.5849,53.75c0.26875,2.01563 2.01563,3.49323 4.03125,3.49323h0.53803c2.15,-0.26875 3.76197,-2.28542 3.49322,-4.43542l-6.71875,-53.75c-0.23516,-1.88125 -1.80776,-3.35098 -3.63757,-3.50897zM132.77142,82.08685c-1.82981,0.158 -3.40242,1.62772 -3.63757,3.50897l-6.71875,53.75c-0.40312,2.15 1.20938,4.16667 3.35938,4.43542h0.53803c2.01563,0 3.7625,-1.4776 4.03125,-3.49323l6.71875,-53.75c0.26875,-2.15 -1.34323,-4.16668 -3.49322,-4.43543c-0.26875,-0.03359 -0.53645,-0.03832 -0.79785,-0.01575z"></path></g></g></svg>



    </b-navbar>
  </div>
</template>
<script>
export default {
  methods: {
    test(){
      alert("modal était en cours mais pas terminé")
    }
  }
}
</script>
<style>
.navbar.navbar-inverse .navbar-header .navbar-brand {
  display: block;
  text-align:center;
  float: none;
  vertical-align: top;
}
svg{
  transform: translateX(-30px);
}
.navbar.navbar-inverse .navbar-header{
  float: none;
}
.navbar-brand{
  color: white;
}
.brand-custom{
  font-size: x-large !important;
  text-align: center;
  color: white !important;
  font-family: system-ui;
}
.navbar-custom {
  background-color: #e06810;
}
</style>
