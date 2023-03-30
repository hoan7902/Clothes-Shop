import {
  Box,
  Typography,
  Collapse,
  ListItemButton,
  ListItemText,
  List,
  ListItemIcon,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import StarBorder from "@mui/icons-material/StarBorder";
import { useState } from "react";
interface CategoryProps {
  title: string;
  itemList: Array<string>;
}

const Category = ({ title, itemList }: CategoryProps): JSX.Element => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box pl="0.125rem" pb="15px" mt="15px" borderBottom="1px solid #d9d9d9">
      <ListItemButton
        disableTouchRipple={false}
        disableRipple={false}
        onClick={handleClick}
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
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
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
