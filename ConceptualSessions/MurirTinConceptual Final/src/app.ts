import express from "express";
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Get Route Done",
    status: "Success",
    data: "Welcome To Muir-Tin Website"
  });
});

export default app;
