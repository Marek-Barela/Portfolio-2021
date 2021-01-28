import Projects from "../projects/projects";

interface Action {
  type: string;
  payload: string;
}

const projectsReducer = (state = Projects, action: Action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default projectsReducer;
