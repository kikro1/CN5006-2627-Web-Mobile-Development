# CN5006 – Week 5: Express.js REST API with MongoDB

Bohdan Voitenkov (3121742)

Express application that exposes the Week 4 Mongoose CRUD functions (`Week4lab.js`) as REST API routes.

## Run

```bash
npm install
node index.js
```

MongoDB must be running locally (`mongodb://localhost:27017/Employee`).
The server listens on **port 5001**, because port 5000 is taken on macOS by the AirPlay Receiver.

## Routes

| Method | URL | Description |
|---|---|---|
| GET | `/` | Hello message |
| GET | `/about` | About text |
| GET | `/users/:userId/books/:bookId` | Returns `req.params` |
| GET | `/GetStudents` | All students from `Students.json` |
| GET | `/GetStudent/:id` | One student, 404 if not found |
| GET | `/studentinfo` | Student form (`StudentInfo.html`) |
| POST | `/submit-data` | Returns the submitted form data |
| GET | `/Showform` | Person form (`Personform.html`) |
| POST | `/insertOne` | Inserts one person into MongoDB |
| GET | `/persons` | All persons, sorted by salary |
| POST | `/insertMany` | Inserts several persons |
| GET | `/femalesOver30` | Female employees aged 30+ |
| GET | `/count` | Number of records |
| PUT | `/updateMany/:gender/:salary` | Sets salary for everyone of that gender |
| DELETE | `/deleteMany/:age` | Deletes everyone aged `:age` or older |
| GET | `/apitester` | Page with buttons to test the portfolio APIs |

Screenshots of every route are in `screenshots/`.
