type Project = {
  id: any;
  image: string;
  title: string;
  tags: {
    id: any;
    text: string;
  }[];
  github: string;
  url: string;
  year: number;
};
export default Project;
