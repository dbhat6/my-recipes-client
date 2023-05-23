import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const styles = {
  flex: {
    flex: 1,
  },
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function NavBar(props) {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <Box sx={styles.flex}>
      <AppBar position="sticky" disablegutters="true">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={props.toggle}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            color="inherit"
            sx={styles.flex}
            align={"center"}
          >
            My Recipes
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton color="inherit" aria-label="Menu" onClick={routeChange}>
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt="my-profile"
              src="https://github.com/dbhat6/my-recipes-server/assets/36035953/0de9e01e-9f59-4326-ab63-7d56084351e8"
              // TODO: Move this to env
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
