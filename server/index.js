import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample SEO headlines for simulation
const seoHeadlines = [
  "Why {name} is {location}'s Best Kept Secret in 2025",
  "Discover {name}: {location}'s Premier Destination for Excellence",
  "5 Reasons {name} Dominates {location}'s Market This Year",
  "The Ultimate Guide to {name} in {location}",
  "How {name} Revolutionized Business in {location}",
  "{name}: Setting New Standards in {location}",
  "Why Everyone in {location} is Talking About {name}",
  "The Success Story Behind {name} in {location}",
  "{name} Leads the Way in {location}'s Business Scene",
  "What Makes {name} {location}'s Top Choice",
];

// Utility function to generate random data
const generateRandomData = (name, location) => {
  const rating = (Math.random() * 2 + 3).toFixed(1); // 3.0 to 5.0
  const reviews = Math.floor(Math.random() * 500 + 50); // 50 to 550
  const headlineTemplate =
    seoHeadlines[Math.floor(Math.random() * seoHeadlines.length)];
  const headline = headlineTemplate
    .replace("{name}", name)
    .replace("{location}", location);

  return { rating: parseFloat(rating), reviews, headline };
};

// POST /business-data endpoint
app.post("/business-data", (req, res) => {
  try {
    const { name, location } = req.body;

    if (!name || !location) {
      return res
        .status(400)
        .json({ error: "Business name and location are required" });
    }

    const data = generateRandomData(name, location);

    // Simulate network delay
    setTimeout(() => {
      res.json(data);
    }, 800);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /regenerate-headline endpoint
app.get("/regenerate-headline", (req, res) => {
  try {
    const { name, location } = req.query;

    if (!name || !location) {
      return res
        .status(400)
        .json({ error: "Business name and location are required" });
    }

    const headlineTemplate =
      seoHeadlines[Math.floor(Math.random() * seoHeadlines.length)];
    const headline = headlineTemplate
      .replace("{name}", name)
      .replace("{location}", location);

    // Simulate network delay
    setTimeout(() => {
      res.json({ headline });
    }, 500);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
