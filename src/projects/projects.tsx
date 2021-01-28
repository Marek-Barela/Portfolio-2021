export interface Projects {
  id: string;
  name: string;
  description: string;
  link: string;
  path: string;
  content: string[];
}

const listOfProjects: Projects[] = [
  {
    id: "1",
    name: "Raccon Notes",
    description: "Rich text editor",
    link: "/works/racconnotes",
    path: "/racconnotes",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora iusto aperiam animi soluta, quam rem ea esse architecto eum vel.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil assumenda quisquam suscipit laboriosam doloremque soluta illum repudiandae in libero quas praesentium eligendi tempora sint, vel porro molestias, commodi quis officia.",
    ],
  },
  {
    id: "2",
    name: "Mailbox",
    description: "Client Side email application",
    link: "/works/mailbox",
    path: "/mailbox",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora iusto aperiam animi soluta, quam rem ea esse architecto eum vel.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil assumenda quisquam suscipit laboriosam doloremque soluta illum repudiandae in libero quas praesentium eligendi tempora sint, vel porro molestias, commodi quis officia.",
    ],
  },
];

export default listOfProjects;
