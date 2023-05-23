import { Outlet } from "react-router-dom";
import MySpeedDial from "../components/SpeedDial";
import MyDrawer from "../components/Drawer";
import { CssBaseline } from "@mui/material";

export default function RootLayout() {
  return (
    <div>
      <main>
        <CssBaseline />
        <MyDrawer />
        <Outlet />
        <MySpeedDial />
      </main>
    </div>
  );
}
