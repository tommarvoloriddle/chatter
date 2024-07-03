'use client';
import { Box, Typography, IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useState } from 'react';

function ChatBox() {
  const initialMessages = [
    { id: 1, sender: 'Siqi Chen', content: 'Hey, how are you?', timestamp: '3h', upvotes: 0, downvotes: 0 },
    { id: 2, sender: 'You', content: 'I am good, thanks!', timestamp: '2h', upvotes: 0, downvotes: 0 },
    { id: 3, sender: 'Siqi Chen', content: 'Great to hear!', timestamp: '1h', upvotes: 0, downvotes: 0 },
    {
      id: 4,
      sender: 'You',
      content: 'This is a very long message to demonstrate how the layout handles larger blocks of text. The message should wrap and grow vertically without breaking the layout or overflowing horizontally. This ensures a good user experience and maintains readability.',
      timestamp: '10m',
      upvotes: 0,
      downvotes: 0
    },
  ];

  const [messages, setMessages] = useState(initialMessages);

  const handleVote = (id, type) => {
    setMessages(messages.map(msg => {
      if (msg.id === id) {
        return type === 'upvote'
          ? { ...msg, upvotes: msg.upvotes + 1 }
          : { ...msg, downvotes: msg.downvotes + 1 };
      }
      return msg;
    }));
  };

  return (
    <Box
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        overflowY: 'auto',
        height: '100%',
        background: 'rgba(25, 39, 52)',
      }}
    >
      {messages.map((msg) => (
        <Box
          key={msg.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: msg.sender === 'You' ? 'flex-end' : 'flex-start',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              maxWidth: '50%',
              p: 1,
              bgcolor: msg.sender === 'You' ? 'rgba(56, 102, 223, 0.9)' : 'rgba(34, 43, 54, 0.9)',
              borderRadius: 2,
              wordBreak: 'break-word',
            }}
          >
            <Typography variant="body2" sx={{ color: 'white' }}>
              {msg.content}
            </Typography>

          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <IconButton
              size="small"
              onClick={() => handleVote(msg.id, 'upvote')}
              sx={{ color: '#B0B3B8' }}
            >
              <ThumbUpIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2" sx={{ color: '#B0B3B8' }}>
              {msg.upvotes}
            </Typography>
            <IconButton
              size="small"
              onClick={() => handleVote(msg.id, 'downvote')}
              sx={{ color: '#B0B3B8', ml: 1 }}
            >
              <ThumbDownIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2" sx={{ color: '#B0B3B8' }}>
              {msg.downvotes}
            </Typography>
            
          <Typography variant="caption" sx={{ color: '#B0B3B8', ml: 1 }}>
              {msg.timestamp}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default ChatBox;
