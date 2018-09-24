<template>
  <div>
    <authentication-layout v-if="layoutVariation === 'authentication'">

    </authentication-layout>

    <application-layout v-if="layoutVariation === 'application'"
      :vertical="!layout.vertical"
      :white="layout.background"
      >

      <!-- BRAND NAME TEXT  -->
      <template slot='brand'>
        <strong><i>TS Node Starter</i></strong>
      </template>

      <!-- RIGHT SIDE NAV ITEMS -->
      <template slot='utility'>
          <willow-menu-item class='text-light' @click.native='drawer.hidden = !drawer.hidden'
            icon='bell'
          ></willow-menu-item>
          <!-- <willow-menu-item class='text-light' @click.native='drawer.hidden = !drawer.hidden'
            icon='database'
          ></willow-menu-item> -->
      </template>

      <template slot='horizontal-menu-primary'>
        <!-- MENU ITEMS-->
          <willow-menu-item
            icon='home'
            title='Home'
            href='/'
          ></willow-menu-item>

          <willow-menu-item
            icon='buildings'
            title='Buildings'
            href='/buildings'
          ></willow-menu-item>

          <willow-menu-item v-if="hasRole('Admin')"
            icon='users'
            title='Tenants'
            href='/admin/tenants'
          ></willow-menu-item>

          <willow-menu-item
            icon='cog'
            title='Settings'
            href='/Settings'
          ></willow-menu-item>

      </template>

      <!-- VERTICAL SIDEBAR MENU  -->
      <template slot='vertical-menu-primary'>
        <willow-menu-item
          icon='home'
          title='Home'
          href='/'
        ></willow-menu-item>

          <willow-menu-item
            icon='building'
            title='Buildings'
            href='/buildings'
          ></willow-menu-item>

        <!-- MENU ITEMS-->
        <!-- <willow-vertical-submenu
          icon='newspaper'
          title='Leasing'
        >
          <willow-menu-item
            title='Listings'
            href='/listings'
          ></willow-menu-item>

          <willow-menu-item
            title='Applicants'
            href='/applicants'
            badge='14'
          ></willow-menu-item>

        </willow-vertical-submenu>

        <willow-menu-item
          title='Tenants'
          href='/Tenants'
          icon='address-book'
        ></willow-menu-item>

        <willow-vertical-submenu
          title='Properties'
          icon='building'
        >
          <willow-menu-item
            title='All Buildings'
            href='/buildings'
          ></willow-menu-item>

          <willow-menu-item
            title='All Units'
          ></willow-menu-item>
        </willow-vertical-submenu> -->

        <willow-menu-item v-if="hasRole('Admin')"
          icon='users'
          title='Tenants'
          href='/admin/tenants'
        ></willow-menu-item>

        <willow-menu-item
          icon='cog'
          title='Settings'
          href='/Settings'
        ></willow-menu-item>

      </template>

      <!-- SAVED REPORTS MENU  -->
      <!-- <template slot='vertical-menu-saved-reports'>

        <willow-menu-item
          icon='file-excel'
          title='Current month'
          href=''
        ></willow-menu-item>

        <willow-menu-item
          icon='file-alt'
          title='Last quarter'
          href=''
        ></willow-menu-item>

        <willow-menu-item
          icon='file-word'
          title='Social engagement'
          href=''
        ></willow-menu-item>

        <willow-menu-item
          icon='file-pdf'
          title='Year-end sale'
          href=''
        ></willow-menu-item>

      </template> -->

      <willow-drawer slot='drawer'
        :hidden='drawer.hidden'
        :title='drawer.title'
      ></willow-drawer>

      <willow-notifications ref='notifications' slot='notifications'></willow-notifications>

      <willow-theme-config slot='theme-config'>
        <willow-theme-config-section
          title='Theme Configuration'
          description=''
        >
          <willow-theme-config-item>
            <b-form-checkbox v-model='layout.vertical'>
              Vertical Nav
            </b-form-checkbox><br/><br/>
            <b-form-checkbox v-model='layout.background'>
              White Background
            </b-form-checkbox><br/><br/>
            <willow-button variant='outline-primary' size='sm' @click.native='notify()'>
            Test Alert
            </willow-button>
          </willow-theme-config-item>

        </willow-theme-config-section>

      </willow-theme-config>

    </application-layout>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('LOAD_PROPERTY_TYPES')
  },

  name: 'App',

  data () {
    return {
      layout: {
        vertical: false,
        background: false
      },
      drawer: {
        hidden: true,
        title: 'Notifications'
      },
      notifications: {
        message: '<strong>Test</strong> notification',
        type: 'info'
      }
    }
  },

  computed: {
    layoutVariation () {
      console.log(this.$route.meta.layout)
      return (this.$route.meta.layout)
    }
  },

  methods: {
    notify () {
      this.$refs.notifications.add(
        this.notifications.message,
        this.notifications.type
      )
    }
  }
}
</script>
