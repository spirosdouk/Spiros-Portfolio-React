import { useEffect, useState } from "react";
import { Project } from "../components/projects/Cards/projectData";

const useProjects = () => {
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    if (!projects) {
      let ignore = false;
      fetch(`./projects.json`)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setProjects(json);
          }
        });
      return () => {
        ignore = true;
      };
    }
  }, []);

  return { projects };
};

export default useProjects;
