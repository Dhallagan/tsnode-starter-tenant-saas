import Vue from 'vue'
import Router from 'vue-router'
import Register from '../pages/Register'
import Verify from '../pages/Verify'
import Login from '../pages/Login'
import Recover from '../pages/Recover'
import Reset from '../pages/Reset'
import Settings from '../pages/Settings'
import InviteStaff from '../pages/InviteStaff'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

// import Reports from '../pages/Reports'
import Account from '../pages/Account'
import General from '../pages/General'
import Tenants from '../pages/Tenants'
// import UsersEdit from '../pages/Users.Edit'
import Tenant from '../pages/Tenant'
import UsersEdit from '../pages/Users.Edit'
// import Applicants from '../pages/Applicants'
// import Applicant from '../pages/Applicant'
import Buildings from '../pages/Buildings'
import Building from '../pages/Building'
// import Components from '../pages/Components'
// import Listings from '../pages/Listings'
// import Listing from '../pages/Listing'
// import Tenants from '../pages/Tenants'
// import AddLease from '../pages/AddLease'
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
      meta: { layout: 'application', requiresAuth: true },
      component: Home
    },
    {
      path: '/admin/tenants',
      name: 'Accounts',
      meta: { layout: 'application', requiresAuth: true },
      component: Tenants
    },
    {
      path: '/admin/tenants/:tenantId',
      name: 'Accounts',
      meta: { layout: 'application', requiresAuth: true },
      component: Tenant
    },
    {
      path: '/admin/tenants/:tenantId/users/:userId',
      name: 'Accounts',
      meta: { layout: 'application', requiresAuth: true },
      component: UsersEdit
    },
    // {
    //   path: '/Reports',
    //   name: 'Reports',
    //   meta: { layout: 'application', requiresAuth: true },
    //   component: Reports
    // },
    // {
    //   path: '/Applicants',
    //   name: 'Applicants',
    //   component: Applicants,
    //   meta: {
    //     breadcrumb: 'Applicants',
    //     layout: 'application',
    //     requiresAuth: true
    //   }
    // },
    // {
    //   path: '/applicants/:applicant_id',
    //   name: 'Applicant',
    //   component: Applicant,
    //   meta: {
    //     breadcrumb: ':applicant_id',
    //     layout: 'application',
    //     requiresAuth: true
    //   }
    // },
    {
      path: '/Buildings',
      name: 'Buildings',
      meta: { layout: 'application', requiresAuth: true },
      component: Buildings
    },
    {
      path: '/Buildings/:building_id',
      name: 'Building',
      meta: { layout: 'application', requiresAuth: true },
      component: Building
    },
    // {
    //   path: '/Tenants',
    //   name: 'Tenants',
    //   meta: { layout: 'application', requiresAuth: true },
    //   component: Tenants
    // },
    // // add tenants/tenant_id
    // {
    //   path: '/Listings',
    //   name: 'Listings',
    //   meta: { layout: 'application', requiresAuth: true },
    //   component: Listings
    // },
    // {
    //   path: '/Listings/:listing_id',
    //   name: 'Listing',
    //   meta: { layout: 'application', requiresAuth: true },
    //   component: Listing
    // },
    // {
    //   path: '/Lease',
    //   name: 'Lease',
    //   meta: { layout: 'application', requiresAuth: true },
    //   component: AddLease
    // },
    // {
    //   path: '/Components',
    //   name: 'Components',
    //   meta: { layout: 'authentication' },
    //   component: Components
    // },
    {
      path: '/Settings',
      name: 'Settings',
      meta: { layout: 'application', requiresAuth: true },
      component: Settings
    },
    {
      path: '/Settings/Accounts',
      name: 'Accounts',
      meta: { layout: 'application', requiresAuth: true },
      component: Account
    },
    {
      path: '/Settings/General',
      name: 'General',
      meta: { layout: 'application', requiresAuth: true },
      component: General
    },
    {
      path: '/Settings/Accounts/New',
      name: 'InviteStaff',
      meta: { layout: 'application', requiresAuth: true },
      component: InviteStaff
    },
    {
      path: '/Settings/Accounts/Profile',
      name: 'Profile',
      meta: { layout: 'application', requiresAuth: true },
      component: Profile
    }
  ]
})
