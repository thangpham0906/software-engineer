document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-in-up');

  const options = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        obs.unobserve(entry.target);
      }
    });
  }, options);

  fadeEls.forEach(el => {
    // Đặt animation-play-state ban đầu = paused (thêm trong CSS)
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});

/**
  * INITIALIZE Data Object
  */
let PersonalInformationOfCV = {
  PersonalInfo: {
    name: "Pham Quoc Thang",
    address: "20/6B/6 Đường Số 19,P.Hiệp Bình Chánh,Tp.Thủ Đức,TP.HCM",
    phone: "0329472899",
    email: "quocthangpham961997@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/thang-pham-118a6412b/",
  },
  Skills: [
    "Object-Oriented Web Applications",
    "User Interface Design",
    "Web Development",
    "JavaScript",
    "CSS",
    "HTML",
    "Git",
    "SQL",
    "PHP",
  ],
  Courses: [
    {
      name: "Advanced Backend Web Development",
      provider: "Udemy",
      year: 2021,
    },
  ],
  Languages: ["English"],
  Summary:
    "Experienced Backend Developer with strong knowledge of Agile Software Development practices, Rest API, Spring Boot, Terraform, and Kubernetes. Proficient in Java + EC, API, Git, SQL, Design patterns, System design, and CI/CD fundamentals for containerization, refactoring, authentications, and re-platforming.",
  EmploymentHistory: [
    {
      title: "Backend Developer",
      company: "Tata Consultancy Services",
      location: "New Delhi",
      startDate: "Jan 2020",
      endDate: "Present",
      responsibilities: [
        "Use frameworks to build service-side software and integrate APIs and cloud computing.",
        "Analyze and compile data, codes, and processes to identify areas of improvement and resolve issues.",
        "Work jointly with frontend developers and other team members to set up objectives, as well as design cohesive, functional scripts.",
        "Record data and report findings to the appropriate parties.",
        "Create security settings, restore and back up technologies for databases and websites.",
      ],
    },
    {
      title: "Backend Developer",
      company: "HCL Technologies",
      location: "New Delhi",
      startDate: "Apr 2018",
      endDate: "Dec 2020",
      responsibilities: [
        "Translated application storyboards and use cases into functional applications.",
        "Designed, built, and maintained efficient, reusable, and reliable code.",
        "Integrated data storage solutions (may include databases, key-value stores, blob stores, etc.).",
        "Ensured the best possible performance, quality, and responsiveness of applications.",
        "Identified bottlenecks and bugs, and devised solutions to mitigate and address these issues.",
        "Helped in the maintenance of code quality, organization, and automatization.",
      ],
    }
  ],
  Education: [
    {
      degree: "B.Tech Computer Science",
      year: 2018,
      school: "Delhi Technical University",
      location: "New Delhi",
    },
    {
      degree: "Senior Secondary",
      year: 2015,
      school: "Delhi Public School, Rohini",
      location: "New Delhi",
    },
  ],
};

let personal_info_html =
  `<section class="personal-info" id="personal-info">
      <h2>PERSONAL INFO</h2>
      <p><strong>Address</strong><br>${PersonalInformationOfCV.PersonalInfo.address}</p>
      <p><strong>Phone</strong><br>${PersonalInformationOfCV.PersonalInfo.phone}</p>
      <p><strong>Email</strong><br>${PersonalInformationOfCV.PersonalInfo.email}</p>
      <p><strong>LinkedIn</strong><br><a href="${PersonalInformationOfCV.PersonalInfo.LinkedIn}">Thang Pham</p>
    </section> `;

// document.getElementById("sidebar-inner").innerHTML = personal_info_html;

