import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  textDecoration: "none",
  color: "white",
  fontWeight: isActive ? "bold" : "normal",
});

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{backgroundColor: 'green'}}>
      <Toolbar>

        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🐄 Holy Cow Market
        </Typography>

        {/* Navigation */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <NavLink to="/" style={navLinkStyle}>
            <Button color="inherit" sx={{fontWeight: 'inherit'}}>Home</Button>
          </NavLink>

          <NavLink to="/shop" style={navLinkStyle}>
            <Button color="inherit" sx={{fontWeight: 'inherit'}}>Shop</Button>
          </NavLink>

          <NavLink to="/my-cows" style={navLinkStyle}>
            <Button color="inherit" sx={{fontWeight: 'inherit'}}>My Cows</Button>
          </NavLink>

          <NavLink to="/rentals" style={navLinkStyle}>
            <Button color="inherit" sx={{fontWeight: 'inherit'}}>Rentals</Button>
          </NavLink>

          <NavLink to="/profile" style={navLinkStyle}>
            <Button color="inherit" sx={{fontWeight: 'inherit'}}>Profile</Button>
          </NavLink>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;