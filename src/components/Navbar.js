"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Works", path: "/works" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(8px)",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 184, 148, 0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.name}
              component={Link}
              href={item.path}
              sx={{
                color: "#00b894",
                fontSize: "1.1rem",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #00b894 30%, #00d6a7 90%)",
                  color: "white",
                },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>

        <IconButton
          sx={{
            display: { md: "none" },
            color: "#00b894",
            position: "absolute",
            right: 16,
          }}
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ display: { md: "none" } }}
      >
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem key={item.name}>
              <Button
                fullWidth
                component={Link}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                sx={{ color: "#4A6741" }}
              >
                {item.name}
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
