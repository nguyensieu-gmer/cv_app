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
      desciption:
        "Assisted in conducting user research to understand user needs, behaviors, and pain points. Supported data collection through surveys, interviews, and usability testing, and contributed to analyzing insights to improve user experience design. Collaborated with the design team to translate research findings into actionable recommendations.",
      id: crypto.randomUUID(),
    },
    {
      name: "Umbrella",
      from: "2020",
      to: "2023",
      positionTitle: "Biotech Engineer",
      location: "Raccoon City",
      visible: true,
      desciption:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
      id: crypto.randomUUID(),
    },
  ],
};
