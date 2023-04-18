import { Completion } from "../services/openai.js";
import { whatsappMessage } from "../services/twilio.js"

class msgController {

    static sendMessage = async (req, res) => {
        const { to, body } = req.body;
        try {
            await whatsappMessage(`whatsapp:${to}`, body);
            res.status(200).json({ sucess: true, body })
        } catch (error) {
            res.status(500).json({ sucess: false, error })
        }
    }

    static wppMsgOpenAI = async (req, res) => {
        const twilioreq = req.body;
        const message = twilioreq.Body;
        const to = twilioreq.From;
        try {
            const resp = await Completion(message);
            await whatsappMessage(to, resp)
            res.status(200).json({ sucess: true, message })

        } catch (error) {
            res.status(500).json({ sucess: false, error })
        }
    }
}

export default msgController;