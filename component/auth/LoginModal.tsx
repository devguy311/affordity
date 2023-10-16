import Login from "./Login";
import { StyledDialog } from "./style";

export default function SignupModal({ isOpen, handleClose }) {
  return (
    <StyledDialog
      open={isOpen}
      onClose={handleClose}
      maxWidth={false}
      fullWidth
    >
      <Login handleClose={handleClose} canClose={true} />
    </StyledDialog>
  );
}
