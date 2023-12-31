const products = [
  {
    productId: 1,
    productName: "Service Design",
    productOwner: "Lisa",
    developers: ["Alice", "Bob", "Charlie", "David", "Eva"],
    scrumMaster: "James Rodriguez",
    startDate: "2023-01-15",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp1",
  },
  {
    productId: 2,
    productName: "Scrum Master Resources",
    productOwner: "Lisa",
    developers: ["Frank", "Grace", "Hannah", "Isaac", "Julia"],
    scrumMaster: "James Rodriguez",
    startDate: "2023-02-20",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp2",
  },
  {
    productId: 3,
    productName: "WebApp 3",
    productOwner: "Alice Johnson",
    developers: ["Alan", "Brian", "Catherine", "Daniel", "Emma"],
    scrumMaster: "Olivia White",
    startDate: "2023-03-25",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp3",
  },
  {
    productId: 4,
    productName: "WebApp 4",
    productOwner: "Bob Wilson",
    developers: ["Fiona", "George", "Holly", "Ian", "Jasmine"],
    scrumMaster: "Olivia White",
    startDate: "2023-04-10",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp4",
  },
  {
    productId: 5,
    productName: "WebApp 5",
    productOwner: "Eva Brown",
    developers: ["Kevin", "Linda", "Megan", "Nathan", "Olivia"],
    scrumMaster: "Olivia White",
    startDate: "2023-05-05",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp5",
  },
  {
    productId: 6,
    productName: "WebApp 6",
    productOwner: "David Lee",
    developers: ["Peter", "Quinn", "Rachel", "Sam", "Tom"],
    scrumMaster: "Olivia White",
    startDate: "2023-06-15",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp6",
  },
  {
    productId: 7,
    productName: "WebApp 7",
    productOwner: "Olivia White",
    developers: ["Ursula", "Vera", "Walter", "Xander", "Megan"],
    scrumMaster: "Olivia White",
    startDate: "2023-07-20",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp7",
  },
  {
    productId: 8,
    productName: "WebApp 8",
    productOwner: "William Davis",
    developers: ["Zara", "Aaron", "Bella", "Carlos", "Daisy"],
    scrumMaster: "William Davis",
    startDate: "2023-08-25",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp8",
  },
  {
    productId: 9,
    productName: "WebApp 9",
    productOwner: "Sophia Evans",
    developers: ["Ethan", "Felicity", "George", "Holly", "Isaac"],
    scrumMaster: "William Davis",
    startDate: "2023-09-30",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp9",
  },
  {
    productId: 10,
    productName: "WebApp 10",
    productOwner: "James Rodriguez",
    developers: ["Jack", "Kelly", "Liam", "Mia", "Noah"],
    scrumMaster: "William Davis",
    startDate: "2023-10-10",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp10",
  },
  {
    productId: 11,
    productName: "WebApp 11",
    productOwner: "Linda Martinez",
    developers: ["Oliver", "Penelope", "Quinn", "Rachel", "Sam"],
    scrumMaster: "James Rodriguez",
    startDate: "2023-11-15",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp11",
  },
  {
    productId: 12,
    productName: "WebApp 12",
    productOwner: "Michael Brown",
    developers: ["Theodore", "Ursula", "Vera", "Walter", "Xander"],
    scrumMaster: "William Davis",
    startDate: "2023-12-20",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp12",
  },
  {
    productId: 13,
    productName: "WebApp 13",
    productOwner: "Sophia Evans",
    developers: ["Yara", "Zara", "Aaron", "Bella", "Carlos"],
    scrumMaster: "William Davis",
    startDate: "2024-01-25",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp13",
  },
  {
    productId: 14,
    productName: "WebApp 14",
    productOwner: "William Davis",
    developers: ["Daisy", "Ethan", "Felicity", "George", "Holly"],
    scrumMaster: "William Davis",
    startDate: "2024-02-15",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp14",
  },
  {
    productId: 15,
    productName: "WebApp 15",
    productOwner: "Eva Brown",
    developers: ["Isaac", "Jack", "Kelly", "Liam", "Mia"],
    scrumMaster: "William Davis",
    startDate: "2024-03-20",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp15",
  },
  {
    productId: 16,
    productName: "WebApp 16",
    productOwner: "David Lee",
    developers: ["Nathan", "Olivia", "Peter", "Quinn", "Rachel"],
    scrumMaster: "James Rodriguez",
    startDate: "2024-04-10",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp16",
  },
  {
    productId: 17,
    productName: "WebApp 17",
    productOwner: "Olivia White",
    developers: ["Sam", "Tom", "Ursula", "Vera", "Walter"],
    scrumMaster: "Olivia White",
    startDate: "2024-05-05",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp17",
  },
  {
    productId: 18,
    productName: "WebApp 18",
    productOwner: "John Doe",
    developers: ["Xander", "Yara", "Zara", "Aaron", "Bella"],
    scrumMaster: "William Davis",
    startDate: "2024-06-15",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp18",
  },
  {
    productId: 19,
    productName: "WebApp 19",
    productOwner: "Jane Smith",
    developers: ["Carlos", "Daisy", "Ethan", "Felicity", "George"],
    scrumMaster: "John Doe",
    startDate: "2024-07-20",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp19",
  },
  {
    productId: 20,
    productName: "WebApp 20",
    productOwner: "Alice Johnson",
    developers: ["Holly", "Isaac", "Jack", "Kelly", "Liam"],
    scrumMaster: "John Doe",
    startDate: "2024-08-25",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp20",
  },
  {
    productId: 21,
    productName: "WebApp 21",
    productOwner: "Bob Wilson",
    developers: ["Mia", "Noah", "Oliver", "Penelope", "Quinn"],
    scrumMaster: "John Doe",
    startDate: "2024-09-30",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp21",
  },
  {
    productId: 22,
    productName: "WebApp 22",
    productOwner: "Eva Brown",
    developers: ["Rachel", "Sam", "Tom", "Ursula", "Vera"],
    scrumMaster: "John Doe",
    startDate: "2024-10-10",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp22",
  },
  {
    productId: 23,
    productName: "WebApp 23",
    productOwner: "David Lee",
    developers: ["Walter", "Xander", "Yara", "Zara", "Aaron"],
    scrumMaster: "John Doe",
    startDate: "2024-11-15",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp23",
  },
  {
    productId: 24,
    productName: "WebApp 24",
    productOwner: "Olivia White",
    developers: ["Bella", "Carlos", "Daisy", "Ethan", "Felicity"],
    scrumMaster: "John Doe",
    startDate: "2024-12-20",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp24",
  },
  {
    productId: 25,
    productName: "WebApp 25",
    productOwner: "William Davis",
    developers: ["George", "Holly", "Isaac", "Jack", "Kelly"],
    scrumMaster: "John Doe",
    startDate: "2025-01-25",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp25",
  },
  {
    productId: 26,
    productName: "WebApp 26",
    productOwner: "Sophia Evans",
    developers: ["Liam", "Mia", "Noah", "Oliver", "Penelope"],
    scrumMaster: "John Doe",
    startDate: "2025-02-15",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp26",
  },
  {
    productId: 27,
    productName: "WebApp 27",
    productOwner: "James Rodriguez",
    developers: ["Quinn", "Rachel", "Sam", "Tom", "Ursula"],
    scrumMaster: "Linda Martinez",
    startDate: "2025-03-20",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp27",
  },
  {
    productId: 28,
    productName: "WebApp 28",
    productOwner: "Linda Martinez",
    developers: ["Vera", "Walter", "Xander", "Yara", "Zara"],
    scrumMaster: "Linda Martinez",
    startDate: "2025-04-10",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp28",
  },
  {
    productId: 29,
    productName: "WebApp 29",
    productOwner: "Michael Brown",
    developers: ["Aaron", "Bella", "Carlos", "Daisy", "Ethan"],
    scrumMaster: "Linda Martinez",
    startDate: "2025-05-05",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp29",
  },
  {
    productId: 30,
    productName: "WebApp 30",
    productOwner: "Sophia Evans",
    developers: ["Felicity", "George", "Holly", "Isaac", "Jack"],
    scrumMaster: "Linda Martinez",
    startDate: "2025-06-15",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp30",
  },
  {
    productId: 31,
    productName: "WebApp 31",
    productOwner: "John Doe",
    developers: ["Kelly", "Liam", "Mia", "Sam", "Tom"],
    scrumMaster: "Linda Martinez",
    startDate: "2025-07-20",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp31",
  },
  {
    productId: 32,
    productName: "WebApp 32",
    productOwner: "Jane Smith",
    developers: ["Ursula", "Vera", "Walter", "Xander", "Yara"],
    scrumMaster: "Linda Martinez",
    startDate: "2025-08-25",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp32",
  },
  {
    productId: 33,
    productName: "WebApp 33",
    productOwner: "Alice Johnson",
    developers: ["Zara", "Aaron", "Bella", "Carlos", "Daisy"],
    scrumMaster: "Linda Martinez",
    startDate: "2025-09-30",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp33",
  },
  {
    productId: 34,
    productName: "WebApp 34",
    productOwner: "Bob Wilson",
    developers: ["Ethan", "Felicity", "George", "Holly", "Isaac"],
    scrumMaster: "Linda Martinez",
    startDate: "2025-10-10",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp34",
  },
  {
    productId: 35,
    productName: "WebApp 35",
    productOwner: "Eva Brown",
    developers: ["Jack", "Kelly", "Liam", "Mia", "Noah"],
    scrumMaster: "Linda Martinez",
    startDate: "2025-11-15",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp35",
  },
  {
    productId: 36,
    productName: "WebApp 36",
    productOwner: "David Lee",
    developers: ["Oliver", "Penelope", "Quinn", "Rachel", "Sam"],
    scrumMaster: "Linda Martinez",
    startDate: "2025-12-20",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp36",
  },
  {
    productId: 37,
    productName: "WebApp 37",
    productOwner: "Olivia White",
    developers: ["Tom", "Ursula", "Vera", "Walter", "Xander"],
    scrumMaster: "Linda Martinez",
    startDate: "2026-01-25",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp37",
  },
  {
    productId: 38,
    productName: "WebApp 38",
    productOwner: "William Davis",
    developers: ["Yara", "Zara", "Aaron", "Bella", "Carlos"],
    scrumMaster: "Linda Martinez",
    startDate: "2026-02-15",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp38",
  },
  {
    productId: 39,
    productName: "WebApp 39",
    productOwner: "Sophia Evans",
    developers: ["Daisy", "Ethan", "Felicity", "George", "Holly"],
    scrumMaster: "Linda Martinez",
    startDate: "2026-03-20",
    methodology: "Waterfall",
    location: "https://github.com/bcgov/webapp39",
  },
  {
    productId: 40,
    productName: "WebApp 40",
    productOwner: "James Rodriguez",
    developers: ["Isaac", "Jack", "Kelly", "Liam", "Mia"],
    scrumMaster: "Linda Martinez",
    startDate: "2026-04-10",
    methodology: "Agile",
    location: "https://github.com/bcgov/webapp40",
  },
];

module.exports = products;
