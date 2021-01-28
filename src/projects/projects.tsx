export interface Projects {
  id: string;
  name: string;
  description: string;
  link: string;
  path: string;
}

const listOfProjects: Projects[] = [
  {
    id: "1",
    name: "Raccon Notes",
    description: "Rich text editor",
    link: "/works/racconnotes",
    path: "/racconnotes",
  },
  {
    id: "2",
    name: "Mailbox",
    description: "Client Side email application",
    link: "/works/mailbox",
    path: "/mailbox",
  },
];

export default listOfProjects;
