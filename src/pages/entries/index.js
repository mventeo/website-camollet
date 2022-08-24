export default function ctf() {
  const contentful = require("contentful-management");

  const client = contentful.createClient({
    accessToken: "CFPAT-MGQYm3KcVI-WL1iD7F52WOweOeA59Zrbp8hts0bJg4w",
  });

  client
    .getSpace("8rp1uuyxnm8g")
    .then((space) => space.getEnvironment("master"))
    .then((environment) => environment.getEntries())
    .then((response) => console.log(response.items))
    // .then((environment) =>
    //   environment.createEntry("competition", {
    //     fields: {
    //       nom: {
    //         ca: "Competició 1",
    //       },
    //     },
    //   })
    // )
    // .then((entry) => console.log(entry))
    .catch(console.error);

  return <div>Hola</div>;
}
