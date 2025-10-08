
import React from 'react';
import { Box } from '@mui/material';
import { Card, CardContent, Typography } from '@mui/material';

function PostCard({ post }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{post.user}</Typography>
        <Typography variant="caption" color="text.secondary">
          {post.time}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {post.content}
        </Typography>
      </CardContent>
    </Card>
  );
}

const samplePosts = [
  {
    id: 1,
    user: 'John Doe',
    time: '2 hours ago',
    content: 'Hello, this is my first post!',
  },
  {
    id: 2,
    user: 'Jane Smith',
    time: '1 hour ago',
    content: 'React is awesome! 😍',
  },
  {
    id: 3,
    user: 'Michael Lee',
    time: '30 minutes ago',
    content: 'Just deployed my first app!',
  },
];

function PostFeed() {
  return (
    <Box sx={{ padding: 2, maxWidth: 600, margin: '0 auto' }}>
      {samplePosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
}

export default PostFeed;
