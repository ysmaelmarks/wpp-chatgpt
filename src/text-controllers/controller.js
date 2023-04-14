import openai from "../config/openai.js";
import userText from "../text-models/model.js";
import { whatsappMessage } from "../config/twilio.js"


class textController {
    static inputText = async (req, res) => {
        const API = openai.configuration();
        const textModel = new userText(req.body.body.prompt)
        console.log(textModel)
        try {
            const resp = await API.createCompletion(
                openai.completion(textModel)
            )
            return res.status(200).json({
                sucess: true,
                data: resp.data.choices[0].text,
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    }

    static receiveMessage = async (req, res) => {
        const {to, body} = req.body;
        console.log(to, body)
        try {
            const result = await whatsappMessage(`whatsapp:${to}`, body);
            console.log(result);
            res.status(200).json({sucess:true, body})
        } catch (error) {
            res.status(500).json({sucess:false, error})
        }   
    }
    
}

export default textController;