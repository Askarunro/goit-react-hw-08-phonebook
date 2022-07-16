import c from "./Contacts.module.css";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList/";
import { Grid, Container } from "@mui/material";

function Contacts() {
  return (
    <Container>
      <h1 className={c.title}>Phonebook</h1>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        <h2 className={c.title}>New contact</h2>
        <ContactForm btnTitle={`Add contact`} />
      </Grid>
      <Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
          sx={{ m: 2 }}
        >
          <Filter />
          <h2>Contacts list</h2>
          <ContactList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contacts;
