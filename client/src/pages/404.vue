<template>
<div>

   <nav class="navbar navbar-dark navbar-expand-sm bg-primary sticky-top p-0" >

      <a class="navbar-brand col-md-5 col-lg-3 mr-0" href="/">
        TS NODE STARTER
      </a>

    <!-- Links -->
    <ul class="navbar-nav">
<li class="nav-item active">
        <a class="nav-link" href="#"><willow-button>Create a store</willow-button></a>
      </li>
    </ul>

    <!-- <div class="w-100"></div> -->

  </nav>
  <page>

  <b-card class="mb-2 mt-4">
    <div class="text-center">

        <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72">

        <h1 class="h3 mb-3 font-weight-normal">Store Not Found.</h1>
          <h2><router-link to="/register"><i>Register</i></router-link> your store to get started</h2><br><br>
      </div>

  </b-card>
  </page>
</div>
</template>

<script>
export default {}
</script>

<style>
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
</style>
