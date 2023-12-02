const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//👇🏻 New imports
const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());

const socketIO = require('socket.io')(http, {
	cors: {
		origin: "<http://localhost:3000>"
	}
});

const generateID = () => Math.random().toString(36).substring(2, 10);
let draftRooms = [];

//👇🏻 Add this before the app.get() block
socketIO.on('connection', (socket) => {
	console.log(`⚡: ${socket.id} user just connected!`);

	socket.on("createDraftRoom", (name) => {
		socket.join(name);
		draftRooms.unshift({ id: generateID(), name, players: [], members: [] });
		socket.emit("draftRoomsList", draftRooms);
	});


	socket.on("findDraftRoom", (id) => {
		let draftRoom = finder(findDraftRoom, id)


		socket.emit("foundDraftRoom", draftRoom[0]);
	});

	socket.on("draftPlayer", (playerId, memberId, draftRoomId) => {
		let draftRoom = finder(draftRooms, draftRoomId)

		let member = draftRoom[0].members.filter((member) => member.id === memberId)
		let player = draftRoom[0].players.filter((player) => player.id === playerId)

		player[0].drafted = true

		member[0].players = member[0].players.push(player)


		socket.emit("foundDraftRoom", draftRoom[0]);
	})

	socket.on('disconnect', () => {
		socket.disconnect()
		console.log('🔥: A user disconnected');
	});
});

app.get("/api/draftrooms", (req, res) => {
	res.json(draftRooms);
});

http.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});