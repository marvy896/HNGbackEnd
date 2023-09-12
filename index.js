import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const port = process.env.PORT || 3000;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    // Check if required query parameters are present
    if (!slack_name || !track) {
        return res.status(400).json({ error: 'Missing query parameters.' });
    }

    // Corrected the usage of the 'Date' object
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[date.getDay()];

    // Get current UTC time
    const currentUtcTime = date.toISOString().slice(0, 19) + 'Z';
    const fileUrl = 'https://github.com/marvy896/HNGbackEnd/blob/main/index.js';
    const sourceCodeUrl = 'https://github.com/marvy896/HNGbackEnd.git';

    const response = {
        slack_name: slack_name,
        current_day: currentDay,
        utc_time: currentUtcTime,
        track: track,
        github_file_url: fileUrl,
        github_repo_url: sourceCodeUrl,
        status_code: 200, // Corrected 'Status_Code' to 'status_code'
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
