<template>
<nav class="navbar navbar-default top-navbar" role="navigation">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">
        <img src="" alt="Logo"
             class="img-logo"/>
      </a>
      <a class="navbar-brand" href="/">
        Authentication
      </a>
    </div>
    <ul class="nav navbar-top-links navbar-right">

      <li><span><a class="nav-link" href=""><i class="fas fa-chart-bar"></i>Reports</a></span></li>
      <li><span><a class="nav-link" href=""><i class="fas fa-database"></i>DB Manager</a></span></li>
      <li><span><a class='dropdown-trigger nav-link' href='#' data-target='dropdown-user' id="user_dropdown"><i
              class="fas fa-caret-down"></i>
                Login/Register
            </a></span></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBarComponent",
  methods: {

  }
};
</script>

