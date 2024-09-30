import express from "express";
import cors from "cors";
import PORT from "./helpers/PORT";
import OtakudesuRouter from "./anim/otakudesu/routes/otakudesu.routes";
import setPayload from "./helpers/setPayload";

const app = express();

app.use(cors());
app.use(OtakudesuRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message:
      "RIMURU FLIX ANIME API IS READY 💧💧, AUTHOR BY H4N DEVELOPER, SUMBER DARI OTAKUDESU",
    important:
      "SERING PANTAU BOSKUU DOMAIN SERING BERUBAH BISA EDIT DI src/helpers/animeUrl.ts",
    sources: [
      {
        name: "otakudesu",
        route: "/otakudesu",
      },
      {
        name: "coming soon",
        route: "",
      },
    ],
  });
});

app.use("*", (req, res) => {
  res.status(404).json(setPayload(res));
});

app.listen(PORT, () => {
  console.log(`SERVER BERJALAN DI http://localhost:${PORT}`);
});
