// Handles information about contacting management
import elementCreator from "./elementCreator.js";

// Function to generate list of employee cards
function generateEmployeeCards(contacts) {
  const contactsWrapper = elementCreator.createElement("div", {
    class: "contact-wrapper",
    id: "contact-wrapper",
  });

  for (const key in contacts) {
    if (contacts.hasOwnProperty(key)) {
      const employee = contacts[key];
      const employeeCard = createEmployeeCard(employee);
      contactsWrapper.appendChild(employeeCard);
    }
  }

  return contactsWrapper;
}

// Function to create an individual employee card
function createEmployeeCard(employee) {
  const employeeCard = elementCreator.createElement("div", {
    class: "contact-item",
  });

  const nameElement = elementCreator.createElement("p", {}, [
    `Name: ${employee.Name}`,
  ]);
  const jobElement = elementCreator.createElement("p", {}, [
    `Job: ${employee.Job}`,
  ]);
  const phoneElement = elementCreator.createElement("p", {}, [
    `Phone: ${employee.Phone}`,
  ]);
  const emailElement = elementCreator.createElement(
    "a",
    {
      href: `mailto:${employee.Email}`,
    },
    [`Email: ${employee.Email}`]
  );

  employeeCard.appendChild(nameElement);
  employeeCard.appendChild(jobElement);
  employeeCard.appendChild(phoneElement);
  employeeCard.appendChild(emailElement);

  return employeeCard;
}

const contactModule = {
  fillContent: function (mainElement) {
    const mainWrapper = elementCreator.createElement(
      "div",
      {
        class: "main-wrapper",
        id: "main-wrapper",
      },
      []
    );

    const title = elementCreator.createElement(
      "div",
      {
        class: "contact-item",
        id: "title",
      },
      ["Contact Information"]
    );

    const contacts = {
      Boss: {
        Name: "Chris",
        Job: "Boss",
        Phone: "123-456-7890",
        Email: "dontcontactme@gmail.com",
      },
      Assistant: {
        Name: "Christina",
        Job: "Assistant Manager",
        Phone: "098-765-4321",
        Email: "imnotjoking@gmail.com",
      },
      Frycook: {
        Name: "Cristobel",
        Job: "Head Frycook",
        Phone: "111-111-1112",
        Email: "thisonesokthough@gmail.com",
      },
      Bum: {
        Name: "Kris",
        Job: "Head of Waste Management",
        Phone: "999-999-9998",
        Email: "findmebythedumpster@gmail.com",
      },
    };

    const employeeCards = generateEmployeeCards(contacts);

    mainElement.appendChild(mainWrapper);
    mainWrapper.appendChild(title);
    mainWrapper.appendChild(employeeCards);
  },
};

export default contactModule;
