// src/services/ranking.service.js

function calculateFreshnessScore(createdAt) {
  const now = Date.now();
  const ageInMinutes = (now - createdAt) / (1000 * 60);

  // newer = higher score
  return Math.max(0, 100 - ageInMinutes);
}

function calculateScore(video) {
  const freshness = calculateFreshnessScore(video.createdAt);

  return (
    video.likes * 2 +
    video.watchTime * 0.5 +
    freshness * 3
  );
}

function rankVideos(videos) {
  return videos
    .map((video) => ({
      ...video,
      score: calculateScore(video),
    }))
    .sort((a, b) => b.score - a.score);
}

export { rankVideos };