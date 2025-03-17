"use client";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

export default function Works() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with real-time inventory management",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Healthcare Dashboard",
      description:
        "Interactive dashboard for healthcare professionals to monitor patient data",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      tech: ["Next.js", "Material UI", "Firebase"],
    },
    {
      title: "Real Estate Portal",
      description:
        "Property listing and management system with virtual tour capabilities",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      tech: ["React", "Express", "PostgreSQL"],
    },
    // Add more projects as needed
  ];

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
            My Works
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card
                    elevation={3}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {project.tech.map((tech, i) => (
                          <Typography
                            key={i}
                            variant="caption"
                            sx={{
                              bgcolor: "#4A6741",
                              color: "white",
                              px: 1,
                              py: 0.5,
                              borderRadius: 1,
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
