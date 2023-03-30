import {
  Box,
  Typography,
  Collapse,
  ListItemButton,
  ListItemText,
  List,
  ListItemIcon,
  ListItem,
  IconButton,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import StarBorder from "@mui/icons-material/StarBorder";
import CommentIcon from "@mui/icons-material/Comment";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#ad2526",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}

interface CategoryProps {
  title: string;
  itemList: Array<{ name: string; id: number }>;
}

const Category = ({ title, itemList }: CategoryProps): JSX.Element => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const [checked, setChecked] = useState([0]);
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box pl="0.125rem" pb="15px" mt="15px" borderBottom="1px solid #d9d9d9">
        <ListItemButton
          disableTouchRipple={false}
          disableRipple={false}
          onClick={handleClick}
          sx={{
            marginLeft: "-20px",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: "18px",
            }}
          >
            {open ? (
              <RemoveIcon fontSize="small" />
            ) : (
              <AddOutlinedIcon fontSize="small" />
            )}
          </ListItemIcon>
          <ListItemText
            primary={title}
            primaryTypographyProps={{
              fontSize: "15px",
              lineHeight: "22px",
              fontWeight: "400",
            }}
          />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {itemList.map((category) => {
              const labelId = `checkbox-list-${title}-${category.id}`;

              return (
                <ListItem key={category.id} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(category.id)}
                    dense
                  >
                    <ListItemIcon sx={{ height: "20px", minWidth: "20px" }}>
                      <Checkbox
                        size="small"
                        edge="start"
                        checked={checked.indexOf(category.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={labelId}
                      primary={`${category.name}`}
                      primaryTypographyProps={{
                        fontSize: "14px",
                        fontWeight: 300,
                        lineHeight: "20px",
                        marginLeft: "8px",
                        maxWidth: "260px",
                        // color: "rgb(68,68,68)",
                        color: "red",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Collapse>

        {/* <Box display="flex" alignItems="center" gap={0.5}>
        <AddOutlinedIcon fontSize="small" />
        <Typography
          variant="h4"
          fontSize="15px"
          lineHeight="22px"
          fontWeight="400"
        >
          {title}
        </Typography>
      </Box> */}
      </Box>
    </ThemeProvider>
  );
};

export default Category;
