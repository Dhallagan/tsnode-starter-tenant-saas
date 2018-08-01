import Vue from 'vue'
import Router from 'vue-router'
import Register from '../pages/Register'
import Verify from '../pages/Verify'
import Login from '../pages/Login'
import Recover from '../pages/Recover'
import Reset from '../pages/Reset'

import Home from '../pages/Home'
import Reports from '../pages/Reports'
import Accounts from '../pages/Accounts'
import Applicants from '../pages/Applicants'
import Applicant from '../pages/Applicant'
import Buildings from '../pages/Buildings'
import Building from '../pages/Building'
import Components from '../pages/Components'
import Listings from '../pages/Listings'
import Listing from '../pages/Listing'
import Profile from '../pages/Profile'
import Tenants from '../pages/Tenants'
import Settings from '../pages/Settings'
import InviteStaff from '../pages/InviteStaff'
import AddLease from '../pages/AddLease'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'Register',
      meta: { layout: 'authentication' },
      component: Register
    },
    {
      path: '/verify/:token',
      name: 'verify',
      meta: { layout: 'authentication' },
      component: Verify
    },
    {
      path: '/login',
      name: 'Login',
      meta: { layout: 'authentication' },
      component: Login
    },
    {
      path: '/recover',
      name: 'Recover',
      meta: { layout: 'authentication' },
      component: Recover
    },
    {
      path: '/reset/:token',
      name: 'Reset',
      meta: { layout: 'authentication' },
      component: Reset
    },
    {
      path: '/',
      name: 'Home',
      meta: { layout: 'application' },
      component: Home
    },
    {
      path: '/Reports',
      name: 'Reports',
      meta: { layout: 'application' },
      component: Reports
    },
    {
      path: '/Applicants',
      name: 'Applicants',
      component: Applicants,
      meta: {
        breadcrumb: 'Applicants',
        layout: 'application'
      }
    },
    {
      path: '/applicants/:applicant_id',
      name: 'Applicant',
      component: Applicant,
      meta: {
        breadcrumb: ':applicant_id',
        layout: 'application'
      }
    },
    {
      path: '/Buildings',
      name: 'Buildings',
      meta: { layout: 'application' },
      component: Buildings
    },
    {
      path: '/Buildings/:building_id',
      name: 'Building',
      meta: { layout: 'application' },
      component: Building
    },
    {
      path: '/Tenants',
      name: 'Tenants',
      meta: { layout: 'application' },
      component: Tenants
    },
    // add tenants/tenant_id
    {
      path: '/Listings',
      name: 'Listings',
      meta: { layout: 'application' },
      component: Listings
    },
    {
      path: '/Listings/:listing_id',
      name: 'Listing',
      meta: { layout: 'application' },
      component: Listing
    },
    {
      path: '/Lease',
      name: 'Lease',
      meta: { layout: 'application' },
      component: AddLease
    },
    {
      path: '/Components',
      name: 'Components',
      meta: { layout: 'authentication' },
      component: Components
    },
    {
      path: '/Settings',
      name: 'Settings',
      meta: { layout: 'application' },
      component: Settings
    },

    {
      path: '/Settings/Accounts',
      name: 'Accounts',
      meta: { layout: 'application' },
      component: Accounts
    },
    {
      path: '/Settings/Accounts/New',
      name: 'InviteStaff',
      meta: { layout: 'application' },
      component: InviteStaff
    },
    {
      path: '/Settings/Accounts/Profile',
      name: 'Profile',
      meta: { layout: 'application' },
      component: Profile
    }
  ]
})
