// src/controllers/video.controller.js

import videos from "../data/videos.js";
import { rankVideos } from "../services/ranking.service.js";

export const getVideos = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;

  // Step 1: Rank videos
  const rankedVideos = rankVideos(videos);

  // Step 2: Pagination (Scrollable feed)
  const start = (page - 1) * limit;
  const paginatedVideos = rankedVideos.slice(start, start + limit);

  // Step 3: Preloading (send extra videos)
  const preloadVideos = rankedVideos.slice(start + limit, start + limit + 2);

  res.json({
    page,
    data: paginatedVideos,
    preload: preloadVideos, // for CSR
  });
};