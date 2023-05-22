import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const styles = {
    flex: {
      flex: 1,
    },
  };

export default function NavBar(props) {
    return(
        <Box sx={styles.flex}>
            <AppBar position="sticky" disablegutters="true">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Menu"
                  onClick={props.toggle}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" sx={styles.flex} align={"center"}>
                  My Recipes
                </Typography>
                <Avatar
                  sx={{ width: 40, height: 40 }}
                  alt="my profile"
                  src="https://github.com/dbhat6/my-recipes-server/assets/36035953/0de9e01e-9f59-4326-ab63-7d56084351e8"
                  // TODO: Move this to env
                />
              </Toolbar>
            </AppBar>
          </Box>
    )
}