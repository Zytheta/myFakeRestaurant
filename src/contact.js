// Handles information about contacting management
import elementCreator from "./elementCreator.js";

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
        Email: "dontcontactme@google.com",
      },

      Assistant: {
        Name: "Christina",
        Job: "Assistant Manager",
        Phone: "098-765-4321",
        Email: "imnotjoking@google.com",
      },

      Frycook: {
        Name: "Cristobel",
        Job: "Head Frycook",
        Phone: "111-111-1112",
        Email: "thisonesokthough@google.com",
      },

      Bum: {
        Name: "Kris",
        Job: "Head of Waste Management",
        Phone: "999-999-9998",
        Email: "findmebythedumpster@gmail.com",
      },

      generateEmployeeCards: function () {
        const contactsWrapper = elementCreator.created("div", {
          class: "contacts-container",
          id: "contacts-container",
        });

        for (const key in contacts) {
          const employee = contacts[key];
          const employeeCard = elementCreator.createElement("div", {
            class: "employee-card",
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
          const emailElement = elementCreator.createElement("p", {}, [
            `Email: ${employee.Email}`,
          ]);

          employeeCard.appendChild(nameElement);
          employeeCard.appendChild(jobElement);
          employeeCard.appendChild(phoneElement);
          employeeCard.appendChild(emailElement);

          contactsWrapper.appendChild(employeeCard);
        }

        return contactsWrapper;
      },
    };

    const employeeCards = generateEmployeeCards();

    mainElement.appendChild(mainWrapper);
    mainWrapper.appendChild(title);
    mainWrapper.appendChild(employeecards);
  },
};

export default contactModule;
