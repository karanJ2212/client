import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { getAllUsers, deleteUser } from "../service/api";
import { Link, useNavigate } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const Tbody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;
export default function AllUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers(); //call api to get all users and store in state
  }, []);

  const getUsers = async () => {
    let res = await getAllUsers();
    setUsers(res.data);
    // console.log(users);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getUsers();
  };
  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TRow key={user._id}>
            <TableCell>{user._id.slice(-4)}</TableCell>{" "}
            {/* change it to user.id to use JSON Server */}
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              {/* change it to user.id to use JSON Server */}
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/EditUser/${user._id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUserDetails(user._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  );
}
