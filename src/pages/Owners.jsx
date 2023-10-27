import {
  Box,
  Toolbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button,
  Modal,
} from "@mui/material";
import SearchField from "../utils/SearchField";
import AddOwners from "../components/AddOwners";
import { useState } from "react";
import { modalStyle } from ".././components/common/constant";

export default function Owners() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ padding: 3, width: "100%" }}>
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        <Typography sx={{ fontSize: "1.4rem" }}>Owners</Typography>
        <Box
          sx={{
            display: "flex",
            columnGap: 2,
            justifyContent: "end",
          }}
        >
          <SearchField
            placeholder={"Search . . ."}
            onChange={""}
            searchBarWidth={"60%"}
          />
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            style={{ p: 1, background: "#4069F9", color: "white" }}
          >
            Add Owners
          </Button>
        </Box>
      </Box>
      <>
        <Table sx={{ m: 0, p: 0 }}>
          <TableHead
            sx={{
              backgroundColor: "#181818",
              borderRadius: 5,
            }}
          >
            <TableRow>
              <TableCell align="center">SL No</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">01</TableCell>
              <TableCell align="center">May 29th 2023</TableCell>
              <TableCell align="center">Muhammed Ajmal Kt</TableCell>
              <TableCell align="center">Pending</TableCell>
              <TableCell align="center">...</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <AddOwners />
        </Box>
      </Modal>
    </Box>
  );
}
