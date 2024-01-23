interface IAppConfig {
  version: string;
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
  version: "v0.1.0",
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
