import {
  Create,
  CreateProps,
  SimpleForm,
  TextInput,
} from "react-admin";

export const EventsCreate = (props: CreateProps) => {
  return (
    <Create {...props} redirect={"/events"}>
      <SimpleForm>
        <TextInput source="event" label="Événement" />
      </SimpleForm>
    </Create>
  );
};
