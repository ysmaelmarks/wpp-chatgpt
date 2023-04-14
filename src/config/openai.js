import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv'
dotenv.config();

class openai{
    static configuration(){
        const configuration = new Configuration({
            apiKey: process.env.OPEN_AI_KEY,
        });

        return new OpenAIApi(configuration);
    }

    static completion({prompt}){
        return{
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens:3000,
            top_p:1,
            frequency_penalty:0,
            presence_penalty:0,
        }
    }
}

export default openai;