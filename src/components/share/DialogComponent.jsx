import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DialogComponent = ({ open, handleClose, content, submit }) => {
  console.log(content);

  return (
    <>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{content.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{content.text}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="contained" onClick={handleClose} autoFocus>
            Tidak
          </Button>
          <Button variant="contained" onClick={() => submit(content.data)}>
            Hapus
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogComponent;
