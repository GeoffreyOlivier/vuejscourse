<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand  href="#">Wood box</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">MyAccount</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style>
.navbar.navbar-inverse .navbar-header .navbar-brand {
  display: block;
  text-align:center;
  float: none;
  vertical-align: top;
}

.navbar.navbar-inverse .navbar-header{
  float: none;
}
</style>
