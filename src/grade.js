const express = require('express');
const app = express();
app.use(express.json());

function calculateAverage(marks) {
  if (!Array.isArray(marks) || marks.length === 0) return null;
  const sum = marks.reduce((a, b) => a + b, 0);
  return sum / marks.length;
}

function getGrade(avg) {
  if (avg >= 90) return 'A';
  if (avg >= 80) return 'B';
  if (avg >= 70) return 'C';
  if (avg >= 60) return 'D';
  return 'F';
}

app.post('/grade', (req, res) => {
  const { marks } = req.body;
  const avg = calculateAverage(marks);
  if (avg === null) return res.status(400).json({ error: 'Invalid marks' });
  const grade = getGrade(avg);
  res.json({ average: avg, grade });
});

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}

module.exports = { app, calculateAverage, getGrade };
