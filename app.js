const express = require("express");
const cors = require("cors");
const prisma = require("./model/prisma");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/game", async (req, res, next) => {
  try {
    const allGame = await prisma.game.findMany({
      orderBy: {
        createAt: "desc",
      },
    });
    res.status(200).json({ allGame });
  } catch (err) {
    next(err);
  }
});

app.get("/game/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const game = await prisma.game.findUnique({
      where: {
        id,
      },
      include: {
        history: {
          orderBy: {
            round: "asc",
          },
        },
      },
    });
    res.status(200).json({ game });
  } catch (err) {
    next(err);
  }
});

app.post("/game", async (req, res, next) => {
  try {
    const boardHistory = req.body;
    const game = await prisma.game.create({
      data: {
        result: boardHistory.result,
      },
    });
    for (let i = 0; i < boardHistory.history.length; i++) {
      await prisma.history.create({
        data: {
          gameId: game.id,
          round: i,
          board: JSON.stringify(boardHistory.history[i]),
        },
      });
    }
    res.status(201).json({ game });
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
