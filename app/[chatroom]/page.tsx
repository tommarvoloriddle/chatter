'use client';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from 'next/link';
import SearchBar from './components/chat/SearchBar';
import ChatPreviewCard from './components/profile/ChatPreviewCard';
import ChatHeader from './components/profile/ChatHeader';
import ChatBox from './components/chat/ChatBox';
import ChatInput from './components/chat/ChatInput';
import { useRouter } from 'next/navigation';

const messages = [
  { id: 1, sender: 'Siqi Chen', content: 'Hey, how are you?', timestamp: '3h' },
  { id: 2, sender: 'You', content: 'I am good, thanks!', timestamp: '2h' },
  { id: 3, sender: 'Siqi Chen', content: 'Great to hear!', timestamp: '1h' },
];

function Chat({ params }: { params: { slug: string } }) {
  let arr = [<ChatPreviewCard />, <ChatPreviewCard />, <ChatPreviewCard />];
  const router = useRouter();
  const data = router.query;
  return (
    <Box display={"flex"} flexDirection={"row"} width={"100%"} height={"100%"} >
      <Box width={"25%"} display={"flex"} flexDirection={"column"} sx={{p:3}}>
        <Box width={"100%"}>
          <Box sx={{mb:5}}>
            <SearchBar />
          </Box>
          <Box sx={{mb:2}}>
            <Typography variant="h6" sx={{ color: 'white' }}>
              Chats
            </Typography>
          </Box>
          <Box>
            {arr.map((item, index) => (
              <Box key={index} sx={{mb:2}}>
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem sx={{ bgcolor: 'black' }} />
      <Box width={"75%"} display={"flex"} flexDirection={"column"} >
        <ChatHeader />
        <Divider orientation={"horizontal"}  sx={{ bgcolor: 'black' }} />
        <Box height={"80%"} sx={{ background: 'rgba(25, 39, 52)' }}>
          <ChatBox />
        </Box>
        <Box>
          <ChatInput />
        </Box>
      </Box>
    </Box>
  );
}

export default Chat;
