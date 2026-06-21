import { fakerEN_US, fakerDE, fakerFR } from "@faker-js/faker";

const getFaker = (language) => {
  switch (language) {
    case "de":
      return fakerDE;
    case "fr":
      return fakerFR;

    case "en-US":
    default:
      return fakerEN_US;
  }
};

export default getFaker;
