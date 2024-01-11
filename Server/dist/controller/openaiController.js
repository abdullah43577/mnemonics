"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMnemonics = void 0;
const openaiConfig_1 = require("../config/openaiConfig");
const generateMnemonics = async (keyword) => {
    const mnemonics = await openaiConfig_1.openai.chat.completions.create({
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
exports.generateMnemonics = generateMnemonics;
