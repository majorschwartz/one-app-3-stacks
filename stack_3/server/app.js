const express = require("express");
const cors = require("cors");
const messagesRouter = require("./routes/messages");
require("./config/database");

const app = express();
const PORT = 5000;

app.use(
	cors({
		origin: "http://localhost:8080",
	})
);
app.use(express.json());

app.use("/api", messagesRouter);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
