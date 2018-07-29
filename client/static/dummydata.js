const Applications = [
  {
    id: 1,
    applicant: "Fram Doe",
    property: "3 Industrial Road",
    phone: "(555) 555-5555",
    status: "In Review",
    last_updated: "08/17/2018"
  },
  {
    id: 2,
    applicant: "Greg Ramoe",
    property: "74 Grove Street",
    phone: "(555) 555-5555",
    status: "In Review",
    last_updated: "08/17/2018"
  },
  {
    id: 3,
    applicant: "Joey Griff",
    property: "100 Main Ave",
    phone: "(555) 555-5555",
    status: "Accepted",
    last_updated: "08/17/2018"
  },
  {
    id: 4,
    applicant: "Betty Naizth",
    property: "100 Main Ave (duplex)",
    phone: "(555) 555-5555",
    status: "Rejected",
    last_updated: "08/17/2018"
  }
];

const Buildings = [
  {
    id: 1,
    property: "74 Grove Street",
    location: "Boston, MA",
    owner: "Larsen",
    type: "Residential, Single-Family",
    units: [
      { unit: "1A", beds: "Studio" },
      { unit: "1B", beds: "1" },
      { unit: "2A", beds: "2" },
      { unit: "2B", beds: "3" }
    ]
  },
  {
    id: 2,
    property: "100 Main Ave",
    location: "Boston, MA",
    owner: "Geneva",
    type: "Residential, Single-Family",
    units: [
      { unit: "1A", beds: "1" },
      { unit: "1B", beds: "2" },
      { unit: "2A", beds: "2" },
      { unit: "2B", beds: "1" }
    ]
  },
  {
    id: 3,
    property: "100 Main Ave (duplex)",
    location: "Boston, MA",
    owner: "Jami",
    type: "Residential, Multi-Family",
    units: [
      { unit: "1A", beds: "1" },
      { unit: "1B", beds: "1" },
      { unit: "2A", beds: "2" },
      { unit: "2B", beds: "2" }
    ]
  }
];

export { Applications, Buildings };
