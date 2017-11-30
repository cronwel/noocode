module.exports = survey => {
  return `
    <html>
      <body>
        <div style='text-align:center;'>
          <h3>Your input matters!</h3>
          <p>
            Help us decide our next big feature
          </p>
          <p>
          ${survey.body}
          </p>
          <div>
            <a href="http://localhost:3000">Yes</a>
          </div>
          <div>
            <a href="http://localhost:3000">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
