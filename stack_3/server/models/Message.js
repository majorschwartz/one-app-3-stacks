const db = require("../config/database");

class Message {
	static findAll() {
		return new Promise((resolve, reject) => {
			db.all(
				"SELECT * FROM messages ORDER BY timestamp DESC LIMIT 100",
				[],
				(err, rows) => {
					if (err) reject(err);
					resolve(
						rows.map((row) => ({
							_id: row.id,
							content: row.content,
							timestamp: row.timestamp,
						}))
					);
				}
			);
		});
	}

	static create(content) {
		return new Promise((resolve, reject) => {
			db.run(
				"INSERT INTO messages (content) VALUES (?)",
				[content],
				function (err) {
					if (err) reject(err);
					db.get(
						"SELECT * FROM messages WHERE id = ?",
						[this.lastID],
						(err, row) => {
							if (err) reject(err);
							resolve({
								_id: row.id,
								content: row.content,
								timestamp: row.timestamp,
							});
						}
					);
				}
			);
		});
	}
}

module.exports = Message;
