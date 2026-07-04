export const data = {
  personalInfor: {
    name: "Bao Anh",
    email: "nguyenbaoanhsuuu@gmail.com",
    address: "VN HN Linh Dam",
    phone: "0123456789",
  },
  education: [
    {
      name: "Hanoi University",
      from: "2024",
      to: "2025",
      major: "Software Engineer",
      address: "Linh Dam, Ha Noi",
      visible: true,
      id: crypto.randomUUID(),
    },
    {
      name: "Munich University",
      from: "2026",
      to: "present",
      major: "Computer Science",
      address: "Munich",
      visible: false,
      id: crypto.randomUUID(),
    },
  ],
  experience: [
    {
      name: "Sam Sung Thai Nguyen",
      from: "2020",
      to: "2023",
      positionTitle: "UI design",
      location: "Thai Nguyen VN",
      visible: true,
      id: crypto.randomUUID(),
    },
    {
      name: "Umbrella",
      from: "2020",
      to: "2023",
      positionTitle: "Biotech Engineer",
      location: "Raccoon City",
      visible: true,
      id: crypto.randomUUID(),
    },
  ],
};
