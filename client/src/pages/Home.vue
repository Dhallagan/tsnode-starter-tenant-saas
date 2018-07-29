<template>
<page>

  <willow-layout>

  <willow-layout-section primary >
    <h1>Good Morning, Dylan</h1>
    <h3>Here's what is going on today</h3>
    <br>
  </willow-layout-section>
    <!-- Primary -->
    <willow-layout-section>

       <b-card class="mb-2">
          <!-- <pdf src="./app.pdf"></pdf> -->
          <p class="float-left"><icon name="circle" scale="0.4"></icon>  4 Applications have been received</p>
        <willow-button class="float-right" url="/applicants">View Applicants</willow-button>
       </b-card>

       <b-card class="mb-2">
          <!-- <pdf src="./app.pdf"></pdf> -->
          <p class="float-left"><icon name="circle" scale="0.4"></icon> 15  Tenants are late on rent.</p>
        <willow-button class="float-right" url="/tenants">View Collections</willow-button>
       </b-card>
    </willow-layout-section>

  </willow-layout>

</page>
</template>

<script>
export default {}
</script>

<style>

</style>
