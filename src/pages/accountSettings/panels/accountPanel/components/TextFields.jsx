import { Grid } from "@mui/material";
import DataField from "../../../components/DataFields";

const formControls = [
  {
    type: "textField",
    name: "username",
    label: "Username",
    defaultValue: "johnDoe",
  },
  {
    type: "textField",
    name: "name",
    label: "Name",
    defaultValue: "John Doe",
  },
  {
    type: "textField",
    name: "email",
    label: "Email",
    defaultValue: "johnDoe@example.com",
  },
  {
    type: "select",
    name: "role",
    label: "Role",
    defaultValue: "admin",
    options: [
      { textValue: "Admin", value: "admin" },
      { textValue: "Author", value: "author" },
      { textValue: "Editor", value: "editor" },
      { textValue: "Maintainer", value: "maintainer" },
      { textValue: "Subscriber", value: "subscriber" },
    ],
  },
  {
    type: "select",
    name: "status",
    label: "Status",
    defaultValue: "acitve",
    options: [
      { textValue: "Active", value: "active" },
      { textValue: "Inactive", value: "inactive" },
      { textValue: "Pending", value: "pending" },
    ],
  },
  {
    type: "textField",
    name: "company",
    label: "Company",
    defaultValue: "ABC Pvt. Ltd.",
  },
];

const TextFields = ({ register }) => {
  return (
    <Grid container spacing={3}>
      {formControls.map((item) => (
        <Grid item xs={12} md={6} key={item.name}>
          <DataField {...item} register={register} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TextFields;
