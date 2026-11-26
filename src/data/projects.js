export const projectsData = [
  {
    id: "olist-ecommerce",
    title: "Olist E-Commerce Business Intelligence",
    category: "Business Intelligence | Data Analytics",
    description:
      "Analyzed e-commerce data to explore sales performance, customer behavior, product trends, and business opportunities.",
    technologies: ["SQL", "PostgreSQL", "Power BI", "Excel"],
    image: "/images/olist-executive-overview.jpg",
    dashboardViews: [
      {
        id: "exec",
        label: "Executive Overview",
        image: "/images/olist-executive-overview.jpg",
        description: "Overall business performance, monthly revenue trends, order status breakdown, and payment distribution across Brazil."
      },
      {
        id: "sales",
        label: "Sales & Product Analysis",
        image: "/images/olist-sales-product-analysis.jpg",
        description: "Deep dive into product sales vs freight, category breakdown, top 10 revenue-generating categories, and category market share."
      },
      {
        id: "delivery",
        label: "Delivery & Ratings",
        image: "/images/olist-delivery-satisfaction.jpg",
        description: "Delivery efficiency, orders by state (SP, RJ, MG), review score distribution, and correlation between delivery speed and ratings."
      }
    ],
    githubUrl: "https://github.com/dipeshsatapara61-tech/olist-ecommerce-business-intelligence",
    isFeatured: true
  },
  {
    id: "upcoming-analytics",
    title: "Predictive Analytics & Market Intelligence",
    category: "Data Science | Business Strategy",
    description:
      "Upcoming business analytics and predictive modeling project currently under research and development.",
    technologies: ["Python", "SQL", "Scikit-Learn", "Tableau / Power BI"],
    image: "/images/project-2.svg",
    dashboardViews: [],
    githubUrl: "https://github.com/dipeshsatapara61-tech",
    isFeatured: false,
    isPlaceholder: true
  }
];
