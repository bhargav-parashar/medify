import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  TextField,
  Stack,
  styled,
} from "@mui/material";
import { format } from "date-fns";
import Button from "../../components/Buttons/ButtonPrimary";
import { useSnackbar } from "notistack";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    height: "30px", // Set the desired height

    "& input": {
      padding: "0 14px", // Adjust padding to fit the custom height
    },
    "& fieldset": {
      borderColor: theme.palette.primary.main, // Default border color
    },

    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main, // Border color when focused
    },
  },
  "& .MuiInputLabel-root": {
    top: "50%", // Adjust the label position
    left: "2%", // Align it with the input padding
    transform: "translate(0, -50%)", // Center vertically
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(10%, -100%) scale(0.70)", // Ensure label behaves well when shrunk
  },
}));

const BookingModal = ({ isModalOpen, setIsModalOpen, bookingDetails }) => {
  const [email, setEmail] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const formatDate = (date) => {
    if (date) {
      const day = new Date(date);
      return format(day, "E, d MMM");
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookings = localStorage.getItem("bookings") || "[]";

    const oldBookings = JSON.parse(bookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...oldBookings,
        { ...bookingDetails, bookingEmail: email },
      ])
    );

    setEmail("");

    setIsModalOpen(false);

    enqueueSnackbar("Booking successful", {
      variant: "success",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center",
      },
    });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setEmail("");
    setIsModalOpen(false);
  };

  return (
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <Box
        sx={{
          //border:"2px solid black",
          backgroundColor: "secondary.white",
          width: { xs: "315px", sm: "315px", md: "400px" },
          borderRadius: "10px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Box
          sx={{
            borderRadius: "10px 10px 0 0",
            width: "100%",
            backgroundColor: "primary.main",
            color: "secondary.white",
          }}
        >
          <Typography
            p={{ xs: "5px 15px " }}
            sx={{
              fontSize: {
                xs: "12px",
                sm: "17px",
                md: "20px",
              },
            }}
          >
            Confirm Booking
          </Typography>
        </Box>

        <Typography
          p={{ xs: "10px 15px " }}
          sx={{
            fontSize: {
              xs: "6px",
              sm: "8px",
              md: "11px",
            },
          }}
        >
          {`Please enter your email to confirm booking on `}
          <span style={{ fontWeight: "bold" }}>{`${formatDate(
            bookingDetails.bookingDate
          )} ${bookingDetails.bookingTime}`}</span>
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack alignItems="flex-start" spacing={2}>
            <Box sx={{ width: "100%" }} p={{ xs: "5px 15px " }}>
              <CustomTextField
                type="email"
                label="Enter your email"
                variant="outlined"
                fullWidth
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Box>

            <Stack direction="row" spacing={1} p={{ xs: "5px 0px 15px 15px " }}>
              <Button
                label="Confirm"
                type="submit"
                variant="contained"
                disableElevation
                width="fit-content"
              >
                Confirm
              </Button>
              <Button
                type="button"
                label="Cancel"
                color="primary.main"
                variant="outlined"
                disableElevation
                handleclick={handleCancel}
                width="fit-content"
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};
export default BookingModal;
