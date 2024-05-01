import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CategoryProperties, updateCategory } from "../../utils/handleCategory";

const UpdateCategory = () => {
  const [category, setCategory] = useState<CategoryProperties>({
    id: "",
    category_name: "",
    category_description: "",
    is_active: true,
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategory((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Update
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log(category);
            updateCategory(category);
            handleClose();
          },
        }}
      >
        <DialogTitle>Create New Entry</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter your book entry.</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="id"
            label="ID"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="category_name"
            label="Category Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="category_description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UpdateCategory;
