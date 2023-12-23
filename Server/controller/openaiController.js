const openai = require('../config/openaiConfig');

const generateMnemonics = async (keyword) => {
  const mnemonics = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `come up with 4 mnemonics for the word "${keyword}".`,
      },
    ],
    model: 'gpt-3.5-turbo',
  });

  console.log('mnemonics', mnemonics);

  const data = mnemonics.choices[0].message;
  return data;
};

module.exports = { generateMnemonics };
