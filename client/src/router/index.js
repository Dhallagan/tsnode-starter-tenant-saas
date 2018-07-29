import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Utilization from '../pages/utilization/Utilization'
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
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Utilization',
      name: 'Utilization',
      component: Utilization
    },
    {
      path: '/Reports',
      name: 'Reports',
      component: Reports
    },
    {
      path: '/Applicants',
      name: 'Applicants',
      component: Applicants,
      meta: {
        breadcrumb: 'Applicants'
      }
    },
    {
      path: '/applicants/:applicant_id',
      name: 'Applicant',
      component: Applicant,
      meta: {
        breadcrumb: ':applicant_id'
      }
    },
    {
      path: '/Buildings',
      name: 'Buildings',
      component: Buildings
    },
    {
      path: '/Buildings/:building_id',
      name: 'Building',
      component: Building
    },
    {
      path: '/Tenants',
      name: 'Tenants',
      component: Tenants
    },
    // add tenants/tenant_id
    {
      path: '/Listings',
      name: 'Listings',
      component: Listings
    },
    {
      path: '/Listings/:listing_id',
      name: 'Listing',
      component: Listing
    },
    {
      path: '/Lease',
      name: 'Lease',
      component: AddLease
    },
    {
      path: '/Components',
      name: 'Components',
      component: Components
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings
    },

    {
      path: '/Settings/Accounts',
      name: 'Accounts',
      component: Accounts
    },
    {
      path: '/Settings/Accounts/New',
      name: 'InviteStaff',
      component: InviteStaff
    },
    {
      path: '/Settings/Accounts/Profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
