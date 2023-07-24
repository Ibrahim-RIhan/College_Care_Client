const MyCollege = () => {
  const myCollege = [
    {
      name: "Sample College 1",
      admission_dates: "2023-08-15",
      admission_process: "Online application and entrance exam",
      events: [
        {
          name: "Freshers' Welcome Party",
          details: "Date: 2023-09-20, Time: 6:00 PM, Venue: Auditorium",
        },
        {
          name: "Tech Fest",
          details: "Date: 2023-11-05 to 2023-11-07, Venue: Campus Grounds",
        },
      ],
      research_works: {
        number: 120,
        details: [
          {
            title: "Advancements in Renewable Energy Sources",
            faculty: "Dr. Sarah Johnson",
            description:
              "This research explores the latest innovations in renewable energy technologies, focusing on solar and wind power integration.",
            publication_date: "2023-03-10",
            file_link: "https://example.com/research1.pdf",
          },
          {
            title: "Understanding Climate Change Patterns",
            faculty: "Prof. Michael Smith",
            description:
              "The study analyzes climate change patterns over the last century and the potential impact on different regions of the world.",
            publication_date: "2023-05-22",
            file_link: "https://example.com/research2.pdf",
          },
          {
            title: "Exploring Artificial Intelligence in Healthcare",
            faculty: "Dr. Emily Williams",
            description:
              "This research investigates the applications of AI in the healthcare sector, such as disease diagnosis and personalized treatment plans.",
            publication_date: "2023-07-15",
            file_link: "https://example.com/research3.pdf",
          },
        ],
      },
      sports_categories: ["Football", "Basketball", "Swimming", "Badminton"],
      college_image:
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=886&q=80",
      college_rating: 4.5,
      college_review:
        "Sample College 1 provides an excellent learning environment and has a supportive faculty.",
    },
  ];
  return (
    <div className="container mx-auto my-16">
      <h1 className="text-center text-5xl text-blue-950 font-bold mb-20">My applied college</h1>
    </div>
  );
};

export default MyCollege;
