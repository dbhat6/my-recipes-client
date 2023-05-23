import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function MySpeedDial() {
  const navigate = useNavigate();
  const [speedDialState, setSpeedDialState] = React.useState(false);

  const toggleSpeedDial = () => setSpeedDialState(!speedDialState);
  const actions = [
    {
      icon: <AddIcon />,
      name: "Create new recipe",
      onClick: () => {
        navigate("/");
      },
    },
  ];
  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        open={speedDialState}
        onClick={toggleSpeedDial}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </>
  );
}
