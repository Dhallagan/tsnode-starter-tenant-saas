import {format} from 'date-fns'

// var Helpers = {
//   MMDDYYYY (date) {
//     format(date, 'MM/DD/YYYY')
//   }
// }

// export default Helpers

export const Helpers = {
  methods: {
    MMDDYYYY (date) {
      return format(date, 'MM/DD/YYYY')
    }
  }
}
