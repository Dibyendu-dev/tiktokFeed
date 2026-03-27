// src/data/videos.js

const videos = [
  {
    id: 1,
    title: "Funny Cat",
    likes: 120,
    watchTime: 300,
    createdAt: Date.now() - 1000 * 60 * 5, // 5 min ago
  },
  {
    id: 2,
    title: "Tech Talk",
    likes: 300,
    watchTime: 500,
    createdAt: Date.now() - 1000 * 60 * 60, // 1 hr ago
  },
  {
    id: 3,
    title: "Dance Reel",
    likes: 250,
    watchTime: 400,
    createdAt: Date.now() - 1000 * 60 * 10,
  },
  {
    id: 4,
    title: "Motivation",
    likes: 80,
    watchTime: 200,
    createdAt: Date.now() - 1000 * 60 * 2,
  },
];

export default videos;