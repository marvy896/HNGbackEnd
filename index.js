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

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' }).slice(0,19) + 'Z';

    // Get current UTC time
    const currentUtcTime = new Date().toUTCString();
    const fileUrl = 'https://github.com/marvy896/HNGbackEnd_endpoints/blob/main/index.js';
    const sourceCodeUrl = 'https://github.com/marvy896/HNGbackEnd_endpoints.git';


    const response = {
        Slack_name: slack_name,
        Current_day: currentDay,
        Current_UTC_time: currentUtcTime,
        Track: track,
        File_URL: fileUrl,
        Source_Code_URL: sourceCodeUrl,
        Status_Code: 200
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
