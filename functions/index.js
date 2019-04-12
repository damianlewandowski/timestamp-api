const functions = require("firebase-functions");
const express = require("express");

const app = express();

app.get("/api/timestamp/:date_string?", (request, response) => {
  const { date_string } = request.params;
  // If empty param then set it on the current date
  const date = date_string ? new Date(date_string) : new Date();
  if (date === "Invalid Date") {
    response.json({
      error: "Invalid Date"
    });
  } else {
    response.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }
});

exports.app = functions.https.onRequest(app);
