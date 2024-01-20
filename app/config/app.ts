interface IAppConfig {
  owner: {
    fullname: string;
    contact: {
      email: string;
      github: string;
      linkedin: string;
    };
  };
}

const AppConfig: IAppConfig = {
  owner: {
    fullname: "Richard Dieud",
    contact: {
      email: "hello[!Change-Me!]rdieud.com",
      github: "https://github.com/darthrichlius",
      linkedin: "https://www.linkedin.com/in/rdieud/",
    },
  },
};

export default AppConfig;
