import React, { FC } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeItem } from "../../app/actions";
import { useDispatch } from "react-redux";

// Define types for cart items
interface CartItem {
  id: number;
  name: string;
  price: string;
  path_1: string;
  caption: string;
}

// Props type definition
interface ShoppingCartDialogProps {
  open: boolean;
  handleClose: () => void;
  cartItems: CartItem[];
}

const ShoppingCartDialog: FC<ShoppingCartDialogProps> = ({
  open,
  handleClose,
  cartItems,
}) => {
  // Access dispatch function with correct types
  const dispatch = useDispatch();

  // Calculate the total price (example calculation, replace with actual logic)
//   const totalPrice = cartItems
//     .reduce((total, item) => total + parseFloat(item.price), 0)
//     .toFixed(2);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogTitle>Shopping Cart</DialogTitle>
      <DialogContent>
        <List>
          {cartItems?.map((item, index) => (
            <div key={item.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={item.path_1} alt={item.name} variant="rounded"/>
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={`${item.price}`} />
                <IconButton
                  onClick={() => dispatch(removeItem(item))}
                  edge="end"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              {index < cartItems.length - 1 && <Divider />}
            </div>
          ))}
        </List>
        {/* <div>
          <strong>Total: ${totalPrice}</strong>
        </div> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
        <Button onClick={() => alert("Proceed to checkout")} color="primary">
          Checkout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShoppingCartDialog;
