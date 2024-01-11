import { openai } from '../config/openaiConfig';

export const generateMnemonics = async (keyword: string): Promise<any> => {
  const mnemonics = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `come up with 4 mnemonics for the word "${keyword}".`,
      },
    ],
    model: 'gpt-3.5-turbo',
    max_tokens: 50,
  });

  console.log('mnemonics', mnemonics);

  const data = mnemonics.choices[0].message.content;
  return data;
};
