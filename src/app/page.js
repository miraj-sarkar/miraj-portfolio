"use client";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#f7fdfb" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  background:
                    "linear-gradient(45deg, #00b894 30%, #00d6a7 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                }}
              >
                Building Digital Excellence
              </Typography>
              <Typography variant="h5" sx={{ color: "#00b894" }} paragraph>
                Transforming ideas into powerful digital solutions. Specializing
                in web development, cloud architecture, and innovative
                technology solutions.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button
                  component={Link}
                  href="/works"
                  variant="contained"
                  size="large"
                  sx={{
                    mr: 2,
                    background:
                      "linear-gradient(45deg, #00b894 30%, #00d6a7 90%)",
                    "&:hover": {
                      background:
                        "linear-gradient(45deg, #00d6a7 30%, #00b894 90%)",
                    },
                  }}
                >
                  View My Work
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  size="large"
                  sx={{ color: "#4A6741", borderColor: "#4A6741" }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{ position: "relative", width: "100%", height: "400px" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Hero Image"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "20px" }}
                  priority
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {["Web Development", "Cloud Solutions", "Technical Leadership"].map(
              (skill, index) => (
                <Grid item xs={12} md={4} key={skill}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Box
                      sx={{
                        p: 4,
                        bgcolor: "white",
                        borderRadius: 2,
                        textAlign: "center",
                        boxShadow: 1,
                        "&:hover": {
                          transform: "translateY(-10px)",
                          transition: "0.3s",
                        },
                      }}
                    >
                      <Typography variant="h5" color="#00b894" gutterBottom>
                        {skill}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
