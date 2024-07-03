import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function ChatInput() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 1, background: 'rgba(25, 39, 52)' }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type a message..."
        InputProps={{
          style: { color: 'white' },
        }}
        sx={{ input: { color: 'white' }, bgcolor: 'rgba(25, 39, 52)' }}
      />
      <IconButton color="primary" sx={{ ml: 1 }}>
        <SendIcon />
      </IconButton>
    </Box>
  );
}

export default ChatInput;
