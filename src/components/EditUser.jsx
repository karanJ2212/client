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
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../service/api";

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

export default function EditUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialValue);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const AddUserDetails = async () => {
    await addUser(user);
    navigate("/AllUser");
  };
  const { id } = useParams();
  useEffect(() => {
    loadUserDetails();
  }, []);
  const loadUserDetails = async () => {
    const res = await getUser(id);
    console.log(res);
  };

  return (
    <Container>
      <Typography varient="h1">Edit User</Typography>
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
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
}
