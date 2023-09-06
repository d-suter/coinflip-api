# 🎲 Coinflip API 💰

Flip a virtual coin with our simple and secure Coinflip API. A fun and easy way to make decisions or settle disagreements!

## 🚀 Features

- **Fast Coin Flipping**: Just send a request and get an instant coin flip result.
- **Detailed Logs**: Obtain extensive details like timestamps, hashes, user-agents, and more.
- **Verification**: Verify any result with a unique hash!

## 🛠 Installation

Before you get started, ensure you have [Node.js](https://nodejs.org/) installed.

1. Clone the repository:
```bash
git clone https://github.com/ceodavee/coinflip-api.git
```

2. Navigate to the project folder and install dependencies:
```bash
cd coinflip-api
npm install
```

3. Start the server:
```bash
node index.js
```

🎉 That's it! Your Coinflip API server is now running.

## 🌐 Endpoints

### Flip a Coin

Send a `GET` request to:

```
http://localhost:3000/coinflip
```

You'll receive a JSON response with the flip result (`heads` or `tails`) and a unique hash for verification.

```json
{
  "result": "heads",
  "hash": "f2b123a9bc8bd3f994f995a0be2d49d85e9ed8b39181a8b103edf4c26d9f9e8a"
}
```

### Verify a Flip

Send a `GET` request with the unique hash:

```
http://localhost:3000/verify/f2b123a9bc8bd3f994f995a0be2d49d85e9ed8b39181a8b103edf4c26d9f9e8a
```

Receive a JSON response with detailed flip information.

## 🛡 Security

All flip results are hashed with SHA-256, providing a secure and verifiable record of each flip.

## 🌟 Contribute

Love this project? Feel free to contribute! Fork the repo, make your changes, and submit a pull request. All contributions are welcome!

## 📝 License

This project is licensed under the MIT License. See `LICENSE` for more details.

---

👨‍💻 Happy flipping!