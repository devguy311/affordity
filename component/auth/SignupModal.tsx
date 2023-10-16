import Register from "./Register";
import { StyledDialog } from "./style";

export default function SignupModal({ isOpen, handleClose }) {
  return (
    <StyledDialog
      open={isOpen}
      onClose={handleClose}
      maxWidth={false}
      fullWidth
    >
      <Register handleClose={handleClose} canClose={true} />
    </StyledDialog>
  );
}
