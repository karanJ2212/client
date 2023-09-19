// import styled from "@emotion/styled";
// import {
//   FormGroup,
//   FormControl,
//   InputLabel,
//   Input,
//   Typography,
//   Button,
// } from "@mui/material";

// import { addUser } from "../service/api";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Container = styled(FormGroup)`
//   width: 50%;
//   margin: 5% auto 0 auto;
//   & > div {
//     margin-top: 20px;
//   }
// `;

// const initialValue = {
//   name: "",
//   username: "",
//   email: "",
//   phone: "",
// };

// export default function AddUser() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(initialValue);

//   const onValueChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const AddUserDetails = async () => {
//     await addUser(user);
//     navigate("/AllUser");
//   };

//   return (
//     <Container sx={styles.Container}>
//       <Typography varient="h1">Add User</Typography>
//       <FormControl>
//         <InputLabel>Name</InputLabel>
//         <Input onChange={(e) => onValueChange(e)} name="name" />
//       </FormControl>
//       <FormControl>
//         <InputLabel>User name</InputLabel>
//         <Input onChange={(e) => onValueChange(e)} name="username" />
//       </FormControl>
//       <FormControl>
//         <InputLabel>Email</InputLabel>
//         <Input onChange={(e) => onValueChange(e)} name="email" />
//       </FormControl>
//       <FormControl>
//         <InputLabel>Phone</InputLabel>
//         <Input onChange={(e) => onValueChange(e)} name="phone" />
//       </FormControl>
//       <FormControl>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => AddUserDetails()}
//         >
//           Add User
//         </Button>
//       </FormControl>
//     </Container>
//   );
// }

// const styles = {
//   Container: {
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "column",
//     my: 5,
//     width: "90%",
//     margin: "50px 0 0 50px",
//   },
// };
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
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 5% auto;
  margin-left: 25%; /* Add margin-left */
  & > div {
    margin-top: 20px;
  }
`;

const Title = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FormControlStyled = styled(FormControl)`
  width: 100%; /* Set the width to 100% for full-width FormControl */
`;

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

export default function AddUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialValue);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const AddUserDetails = async () => {
    await addUser(user);
    navigate("/AllUser");
  };

  return (
    <Container>
      <Title>Add User</Title>
      <FormControlStyled>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControlStyled>
      <FormControlStyled>
        <InputLabel>User name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControlStyled>
      <FormControlStyled>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControlStyled>
      <FormControlStyled>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControlStyled>
      <FormControlStyled>
        <Button
          variant="contained"
          color="primary"
          onClick={() => AddUserDetails()}
        >
          Add User
        </Button>
      </FormControlStyled>
    </Container>
  );
}
