import express from 'express';
const app = express();
const port = 3000;

app.get('/get_info', (req, res) => {
    // Get query parameters
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    // Get current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    // Get current UTC time
    const currentUtcTime = new Date().toUTCString();

    // Get GitHub URLs
    const fileUrl = 'https://github.com/marvy896/HNGbackEnd_endpoints/index.js';
    const sourceCodeUrl = 'https://github.com/marvy896/HNGbackEnd_endpoints';

    // Create the response JSON
    const response = {
        Slack_name: slack_name,
        Current_day: currentDay,
        Current_UTC_time: currentUtcTime,
        Track: track,
        File_URL: fileUrl,
        Source_Code_URL: sourceCodeUrl,
        Status_Code: 'Success'
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
