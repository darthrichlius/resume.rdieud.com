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
  assets: {
    file: {
      resume: string;
    };
  };
}

const AppConfig: IAppConfig = {
  version: "v0.1.0",
  owner: {
    fullname: "Richard Dieud",
    contact: {
      /**
       * We must provide a valid email to make the "mailto:" link work properly on all clients.
       * Currently, this email address is public and displayed on various platforms.
       * Therefore, preventing this email from being scraped may not be very "relevant."
       *
       * @todo Add a proxy step to ensure it is not a scraper, and then, only then, display the email.
       */
      email: "hello-job@rdieud.com",
      github: "https://github.com/darthrichlius",
      linkedin: "https://www.linkedin.com/in/rdieud/",
    },
  },
  assets: {
    file: {
      resume: "CV_RDIEUD_2024.pdf",
    },
  },
};

export default AppConfig;
