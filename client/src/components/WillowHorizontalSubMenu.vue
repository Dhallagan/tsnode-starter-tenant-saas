<template>
<li class="nav-item dropdown">
  <a @click="show = !show" class="nav-link text-nowrap dark " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
    Dropdown
  </a>
  <div class="dropdown-menu" :class="{'show': show}" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</li>

</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>

<style>

</style>
