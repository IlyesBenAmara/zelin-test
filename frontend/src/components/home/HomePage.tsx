import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid2,
  Container,
  Card,
  Input,
} from "@mui/material";
import { useState } from "react";
import AddBookModal from "./AddBookModal";
import CreateUserModal from "./CreateUserModal";
import ChooseUserModal from "./ChooseUserModal";

const HomePage = () => {
  const [isBookModalVisible, setIsBookModalVisible] = useState(false);
  const [isChooseUserModalVisible, setIsChooseUserModalVisible] =
    useState(false);
  const [isAddUserModalVisible, setIsAddUserModalVisible] = useState(false);

  return (
    <>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Library
            </Typography>
            <Button
              color="inherit"
              onClick={() => setIsChooseUserModalVisible(true)}
            >
              Choose User
            </Button>
            <Button
              color="inherit"
              onClick={() => setIsAddUserModalVisible(true)}
            >
              Create User
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar>
          <Input />
        </Toolbar>

        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Card></Card>
          </Grid2>
          <Grid2 size={4}>
            <Card></Card>
          </Grid2>
          <Grid2 size={4}>
            <Card></Card>
          </Grid2>
        </Grid2>
      </Container>

      <AddBookModal
        isOpen={isBookModalVisible}
        handleClose={() => setIsBookModalVisible(false)}
      />
      <CreateUserModal
        isOpen={isAddUserModalVisible}
        handleClose={() => setIsAddUserModalVisible(false)}
      />
      <ChooseUserModal
        isOpen={isChooseUserModalVisible}
        handleClose={() => setIsChooseUserModalVisible(false)}
      />
    </>
  );
};

export default HomePage;
