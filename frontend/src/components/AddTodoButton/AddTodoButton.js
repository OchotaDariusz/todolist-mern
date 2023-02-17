import React, { useState } from "react";
import AddTodoModal from "./../AddTodoModal/AddTodoModal";
import Button from "@mui/material/Button";

export default function AddTodoButton({ setTodoList }) {
  const [openFormModal, setOpenFormModal] = useState(false);
  const handleOpen = () => setOpenFormModal(true);
  const handleClose = () => setOpenFormModal(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="secondary"
        sx={{ mb: 4 }}
      >
        Add New
      </Button>
      <AddTodoModal
        open={openFormModal}
        handleClose={handleClose}
        setTodoList={setTodoList}
      />
    </div>
  );
}
