"use client";
import { Container, Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <Box sx={{ backgroundColor: "#f7fdfb" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Grid container spacing={6}>
            <Grid item xs={12} md={5}>
              <Paper elevation={3} sx={{ p: 2, height: "100%" }}>
                <Box
                  sx={{ position: "relative", width: "100%", height: "400px" }}
                >
                  <Image
                    src="/IMG_20241013_170300.jpg"
                    alt="Miraj Sarkar"
                    layout="fill"
                    objectFit="cover"
                    style={{ borderRadius: "10px" }}
                  />
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    background:
                      "linear-gradient(45deg, #00b894 30%, #00d6a7 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Miraj Sarkar
                </Typography>
                <Typography variant="h4" sx={{ color: "#00b894" }} gutterBottom>
                  CTO at FredoCloud
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                >
                  As the Chief Technology Officer at FredoCloud, a UAE-based
                  company, I lead the technological vision and strategy of our
                  organization. With extensive experience in web development and
                  cloud solutions, I specialize in creating innovative digital
                  solutions that drive business growth.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                >
                  My expertise includes full-stack development, cloud
                  architecture, and implementing cutting-edge technologies to
                  deliver high-performance solutions. I am passionate about
                  creating seamless user experiences and scalable applications
                  that meet modern business needs.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
