const checkWorkingHours = (req, res, next) => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  const isWeekday = day >= 1 && day <= 5;
  const isWorkingHour = hour >= 9 && hour < 17;

  if (isWeekday && isWorkingHour) {
    next();
  } else {
    res.status(403).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Outside Working Hours</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <div class="container">
          <h1>⏰ Outside Working Hours</h1>
          <p>Our website is only available during working hours:</p>
          <p><strong>Monday to Friday, 9:00 AM - 5:00 PM</strong></p>
          <p>Please come back during our operating hours.</p>
        </div>
      </body>
      </html>
    `);
  }
};

module.exports = checkWorkingHours;
