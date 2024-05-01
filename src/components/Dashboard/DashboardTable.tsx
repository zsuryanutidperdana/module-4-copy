// import { Table } from "@mui/material";
import CreateCategory from "./CreateCategory";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { CategoryProperties, deleteCategory } from "../../utils/handleCategory";
import { Button } from "@mui/material";
import UpdateCategory from "./UpdateCategory";

const DashboardTable = () => {
  const [categories, setCategories] = useState<CategoryProperties[]>([]);

  useEffect(() => {
    async function getCategories() {
      const TOKEN = localStorage.getItem("token");
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      };
      const response = await fetch(
        "https://library-crud-sample.vercel.app/api/category",
        options
      );
      const data = await response.json();
      setCategories(data);
    }
    getCategories();
  }, [categories]);
  return (
    <div className="flex flex-col items-center w-4/5">
      <div className="flex bg-color-grey w-4/5 mb-10">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Book Name</TableCell>
                <TableCell align="right">Book Description</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.category_name}</TableCell>
                  <TableCell align="right">
                    {row.category_description}
                  </TableCell>
                  <TableCell align="right">
                    <div className="flex">
                      <UpdateCategory />
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={(e) => deleteCategory(row.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <CreateCategory />
    </div>
  );
};

export default DashboardTable;
