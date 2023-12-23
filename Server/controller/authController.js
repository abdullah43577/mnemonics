const { generateMnemonics } = require('./openaiController');

const test = (req, res) => {
  res.status(200).json({ message: 'Hello from the server side!', app: 'Natours' });
};

const getMnemonics = async (req, res) => {
  try {
    const mnemonics = await generateMnemonics('abate');
    res.status(200).json({ message: mnemonics });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

module.exports = { test, getMnemonics };
