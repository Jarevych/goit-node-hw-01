// const contacts = require("./contacts");
const { listContacts, getContactById, addContact, removeContact } = require("./contacts");
// const argv = require('yargs').argv;

const { program } = require("commander");
// const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        listContacts().then((contactsList) => console.log(contactsList));
       
      break;

    case "get":
        const contact = getContactById(id);
        console.log(contact)
      break;

    case "add":
        const addedContact = addContact(name, email, phone);
        console.log(addedContact)

      break;

    case "remove":
        const removedContact = removeContact(id);
        console.log(removedContact)

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
// listContacts();
// getContactById(AeHIrLTr6JkxGE6SN-0Rw);
// if (!argv.action) {
//     console.warn("\x1B[31m Action type is missing!");
//   } else {
//     invokeAction(argv);
//   }
invokeAction(argv);
