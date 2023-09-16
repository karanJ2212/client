import styled from "@emotion/styled";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";

import { addUser } from "../service/api";
import React, { useState } from "react";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

export default function AddUser() {
  const [user, setUser] = useState(initialValue);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const AddUserDetails = async () => {
    await addUser(user);
  };

  return (
    <Container>
      <Typography varient="h1">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>User name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => AddUserDetails()}
        >
          Add User
        </Button>
      </FormControl>
    </Container>
  );
}
