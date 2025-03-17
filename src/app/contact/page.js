"use client";
import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add Firebase functionality here
  };

  return (
    <Box sx={{ backgroundColor: "#f7fdfb" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: "linear-gradient(45deg, #00b894 30%, #00d6a7 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get in Touch
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={5}>
              <Paper elevation={3} sx={{ p: 4, height: "60%" }}>
                <Typography variant="h5" gutterBottom>
                  Contact Information
                </Typography>

                <Box
                  sx={{ display: "flex", alignItems: "center", mb: 2, mt: 3 }}
                >
                  <EmailIcon sx={{ mr: 2, color: "#4A6741" }} />
                  <Typography>miraj@fredocloud.com</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 2, color: "#4A6741" }} />
                  <Typography>UAE</Typography>
                </Box>

                {/* <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2, color: "#4A6741" }} />
                  <Typography>+971 XXXXXXXXX</Typography>
                </Box> */}
              </Paper>
            </Grid>

            <Grid item xs={12} md={7}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    margin="normal"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    required
                    type="email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    margin="normal"
                    required
                    multiline
                    rows={4}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 3,
                      background: "#00b894",
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
