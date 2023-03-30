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
interface CategoryProps {
  title: string;
  itemList: Array<string>;
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
    <Box pl="0.125rem" pb="15px" mt="15px" borderBottom="1px solid #d9d9d9">
      <ListItemButton
        disableTouchRipple={false}
        disableRipple={false}
        onClick={handleClick}
        sx={{
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent",
          },
        }}
      >
        <ListItemIcon>
          {" "}
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
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                key={value}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={`Line item ${value + 1}`}
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
  );
};

export default Category;
