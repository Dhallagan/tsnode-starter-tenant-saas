import Vue from 'vue'
import Router from 'vue-router'
import Register from '../pages/Register'
import Register2 from '../pages/Register.2'
import Verify from '../pages/Verify'
import Login from '../pages/Login'
import Recover from '../pages/Recover'
import Reset from '../pages/Reset'
import Settings from '../pages/Settings'
import InviteStaff from '../pages/InviteStaff'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import ComponentTester from '../pages/ComponentTester'

// import Reports from '../pages/Reports'
import Account from '../pages/Account'
import General from '../pages/General'
import Tenants from '../pages/Tenants'
// import UsersEdit from '../pages/Users.Edit'
import Tenant from '../pages/Tenant'
import UsersEdit from '../pages/Users.Edit'
import Applicants from '../remsPages/Applicants'
import Applicant from '../remsPages/Applicant'
import Buildings from '../pages/Buildings'
import Building from '../pages/Building'
import NewBuilding from '../pages/Building.Add'
import NewBuildingUnit from '../pages/Building.Unit.Add'
import BuildingUnit from '../pages/Building.Unit'
// import Components from '../pages/Components'
import Listings from '../pages/Listings'
import Listing from '../pages/Listing'
// import Tenants from '../pages/Tenants'
// import AddLease from '../pages/AddLease'
import Plans from '../pages/Plans'
import fourohfour from '../pages/404'
import Dashboard from '../pages/Dashboard'
import Apply from '@/pages/public/Apply'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/apply',
      name: 'Apply',
      meta: { layout: 'authentication' },
      component: Apply
    },
    {
      path: '/admin/',
      name: 'Dashboard',
      meta: { layout: 'application', requiresAuth: true },
      component: Dashboard
    },
    {
      path: '*',
      name: '404',
      meta: { layout: 'authentication' },
      component: fourohfour
    },
    {
      path: '/admin/component',
      name: 'component',
      meta: { layout: 'authentication' },
      component: ComponentTester
    },
    {
      path: '/register',
      name: 'Register',
      meta: { layout: 'authentication' },
      component: Register
    },
    {
      path: '/register/setup',
      name: 'Register2',
      meta: { layout: 'authentication' },
      component: Register2
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
      path: '/admin/',
      name: 'Home',
      meta: { layout: 'application', requiresAuth: true },
      component: Home
    },
    {
      path: '/admin/admin/tenants',
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
    {
      path: '/admin/Applicants',
      name: 'Applicants',
      component: Applicants,
      meta: {
        breadcrumb: 'Applicants',
        layout: 'application',
        requiresAuth: true
      }
    },
    {
      path: '/admin/applicants/:applicant_id',
      name: 'Applicant',
      component: Applicant,
      meta: {
        breadcrumb: ':applicant_id',
        layout: 'application',
        requiresAuth: true
      }
    },
    {
      path: '/admin/Buildings',
      name: 'Buildings',
      meta: { layout: 'application', requiresAuth: true },
      component: Buildings
    },
    {
      path: '/admin/Buildings/New',
      name: 'NewBuilding',
      meta: { layout: 'application', requiresAuth: true },
      component: NewBuilding
    },
    {
      path: '/admin/Buildings/:building_id',
      name: 'Building',
      meta: { layout: 'application', requiresAuth: true },
      component: Building
    },
    {
      path: '/admin/Buildings/:building_id/Unit/add',
      name: 'NewBuildingUnit',
      meta: { layout: 'application', requiresAuth: true },
      component: NewBuildingUnit
    },
    {
      path: '/admin/Buildings/:building_id/Units/:unit_id',
      name: 'BuildingUnit',
      meta: { layout: 'application', requiresAuth: true },
      component: BuildingUnit
    },
    // {
    //   path: '/Tenants',
    //   name: 'Tenants',
    //   meta: { layout: 'application', requiresAuth: true },
    //   component: Tenants
    // },
    // // add tenants/tenant_id
    {
      path: '/admin/Listings',
      name: 'Listings',
      meta: { layout: 'application', requiresAuth: true },
      component: Listings
    },
    {
      path: '/admin/Listings/:listing_id',
      name: 'Listing',
      meta: { layout: 'application', requiresAuth: true },
      component: Listing
    },
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
      path: '/admin/Settings',
      name: 'Settings',
      meta: { layout: 'application', requiresAuth: true },
      component: Settings
    },
    {
      path: '/admin/Settings/Accounts',
      name: 'Accounts',
      meta: { layout: 'application', requiresAuth: true },
      component: Account
    },
    {
      path: '/admin/Settings/General',
      name: 'General',
      meta: { layout: 'application', requiresAuth: true },
      component: General
    },
    {
      path: '/admin/Settings/Accounts/New',
      name: 'InviteStaff',
      meta: { layout: 'application', requiresAuth: true },
      component: InviteStaff
    },
    {
      path: '/admin/Settings/Accounts/Profile',
      name: 'Profile',
      meta: { layout: 'application', requiresAuth: true },
      component: Profile
    },
    {
      path: '/admin/Settings/Plans',
      name: 'Plans',
      meta: { layout: 'application', requiresAuth: true },
      component: Plans
    }
  ]
})
