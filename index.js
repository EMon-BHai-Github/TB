const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Demo data
let stats = {
  posts: 12,
  views: 15420,
  likes: 3200,
  followers: 890
};

// AI caption generator (simple logic)
function generateCaption(topic) {

  const captions = [
    `🔥 ${topic} | Watch till end!`,
    `😎 ${topic} trending now!`,
    `🚀 Don't miss this ${topic}!`,
    `💥 Viral ${topic} content!`
  ];

  return captions[Math.floor(Math.random() * captions.length)];
}

// Dashboard
app.get("/", (req, res) => {

  const caption = generateCaption("TikTok Growth");

  res.send(`
  <html>
  <head>
    <title>EMon Growth System</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      body{background:#0d1117;color:white;font-family:Arial;padding:20px}
      .box{max-width:500px;margin:auto;background:#161b22;padding:20px;border-radius:15px}
      .card{background:#21262d;padding:10px;margin-top:10px;border-radius:10px}
      button{width:100%;padding:12px;margin-top:10px;background:#00ff99;border:none;border-radius:10px;font-weight:bold}
      a{color:#00ff99}
    </style>
  </head>

  <body>

    <div class="box">

      <h2>🔥 EMon TikTok Growth System</h2>

      <div class="card">Posts: ${stats.posts}</div>
      <div class="card">Views: ${stats.views}</div>
      <div class="card">Likes: ${stats.likes}</div>
      <div class="card">Followers: ${stats.followers}</div>

      <div class="card">
        AI Caption:
        <p>${caption}</p>
      </div>

      <button onclick="location.reload()">
        Generate New Caption
      </button>

      <button onclick="window.open('https://www.tiktok.com','_blank')">
        Open TikTok
      </button>

    </div>

  </body>
  </html>
  `);

});

// API (future bot control)
app.get("/api", (req, res) => {

  res.json({
    status: "running",
    stats,
    ai: generateCaption("API Mode")
  });

});

app.listen(PORT, () => {
  console.log("EMon Growth System Running on " + PORT);
});
