import { Box, Button, Divider, Drawer, IconButton, Input, InputAdornment, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const InfoRoutes = [
  { label: "About Us", path: "/about" },
  { label: "My Account", path: "/my-account" },
  { label: "Wishlist", path: "/saved" },
  { label: "Order Tracking", path: "/tracking" },
];

const MainNavigation = [
  { label: "Products", path: "/products" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact-us" },
  // { label: "More", path: "/saved" },
];

export const ResponsiveHeader = (props) => {
  const navigate = useNavigate();
  const { openDrawer, setOpenDrawer, user, handleLogout, handleClose } = props || {};

  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      sx={{}}
    >

      <Box sx={{ minWidth: "310px", }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
            textAlign: "center"
          }}
        >
          <Box>
            {MainNavigation.map((route) => (
              <>
                <Typography
                  variant="subtitle1"
                  key={route.path}
                  onClick={() => navigate(route.path)}
                  sx={{
                    display: "block",
                    color: "#757575",
                    fontSize: "1rem",
                    fontWeight: "600",
                    p: 2,
                    "&:hover": {
                      color: "#2BBEF9"
                    }
                  }}
                >
                  {route.label}
                </Typography>
                <Divider sx={{ display: "block" }} />
              </>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {user?.email ? (
              <>
                <Button
                  variant="outlined"
                  color="warning"
                  sx={{
                    borderRadius: 16,
                    px: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    textTransform: "none",
                    fontWeight: "600",
                  }}
                  onClick={() => { navigate("/carts"); handleClose(); }}
                >

                  <LocalMallIcon /> <span style={{ marginBottom: "-3px" }}>Cart</span>
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 16,
                    px: 3
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 16,
                    px: 3
                  }}
                  onClick={() => navigate('/signup')}
                >
                  SignUp
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    border: "2px solid !important",
                    borderRadius: 16,
                    px: 3
                  }}
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
              </>
            )}


            {/* <Button
              variant="contained"
              sx={{
                borderRadius: 16,
                px: 3
              }}
            >
              SignUp
            </Button>
            <Button
              variant="outlined"
              sx={{
                border: "2px solid !important",
                borderRadius: 16,
                px: 3
              }}
            >
              Login
            </Button> */}
          </Box>
        </Box>
        <Box maxWidth="md" sx={{ mx: "auto", my: 2, px: "20px" }}>
          {/* <form /* onSubmit={handleJobsSearch} >
            <Input
              sx={{
                borderRadius: 16,
                padding: "5px 0px 5px 27px  !important",
                backgroundColor: "#F3F4F7"
              }}
              disableUnderline
              fullWidth
              placeholder="Search Product"
              endAdornment={
                <InputAdornment position="end" style={{ outline: "none" }}>
                  <IconButton
                    size="small"
                    sx={{ border: "2px solid #2BBEF9" }}
                  >
                    <SearchSharpIcon sx={{ color: "#2BBEF9" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </form> */}
        </Box>
      </Box>
      <Divider />
      <Box maxWidth="lg" sx={{ mx: 5, py: 0.5, }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box>
            {InfoRoutes.map((route) => (
              <Typography
                variant="body2"
                key={route.path}
                onClick={() => navigate(route.path)}
                sx={{
                  display: "inline-block",
                  color: "#757575",
                  fontSize: "12px",
                  px: 1,
                  pb: 0.6,
                }}
              >
                {route.label}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* <HandshakeIcon /> */}
            <Typography
              variant="body2"
              sx={{
                color: "#757575",
                fontSize: "12px",
              }}
            >
              100% Secure delivery without contacting the courier
            </Typography>

          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                display: "inline-flex",
                color: "#757575",
                fontSize: "12px",
                alignItems: "center",
              }}
            >
              <span>Need help? Call Us:</span>
              <span style={{ color: "#2BBEF9", fontWeight: "600" }}>+0020 500</span>
            </Typography>
          </Box>
        </Box>
      </Box>

    </Drawer>
  );
};