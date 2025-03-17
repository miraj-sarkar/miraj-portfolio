"use client";
import { Box, Container, Typography, IconButton, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: "auto",
        backgroundColor: "#e8f7f3",
        borderTop: "1px solid rgba(0, 184, 148, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" sx={{ color: "#00b894" }} gutterBottom>
              Miraj Sarkar
            </Typography>
            <Typography variant="body2" sx={{ color: "#00b894" }}>
              CTO at FredoCloud
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" sx={{ color: "#00b894" }} gutterBottom>
              Connect With Me
            </Typography>
            <IconButton
              sx={{ color: "#00b894" }}
              href="https://linkedin.com"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{ color: "#00b894" }}
              href="https://github.com"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              sx={{ color: "#00b894" }}
              href="https://twitter.com"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="body2" sx={{ color: "#00b894" }}>
              © {new Date().getFullYear()} Miraj Sarkar
            </Typography>
            <Typography variant="body2" sx={{ color: "#00b894" }}>
              All rights reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
