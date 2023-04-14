import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv'
dotenv.config();

const openaiconfig = new Configuration({
    apiKey: process.env.OPEN_AI_KEY
})

const openai = new OpenAIApi(openaiconfig);

export const Completion = async(text) =>{
    try {
        const textCompletion = await openai.createChatCompletion({
            model:'gpt-3.5-turbo',
            messages: [{role:"user", content: text}]
        })
        return textCompletion.data.choices[0].message.content;
    } catch (error) {
        console.log(error)
        return;
    }
}