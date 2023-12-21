const test = (req, res) => {
  res.status(200).json({ message: 'Hello from the server side!', app: 'Natours' });
};

module.exports = { test };
