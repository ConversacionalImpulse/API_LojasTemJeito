import dotenv from "dotenv";
import { createRecordTable } from "../services/CreateTableRecordFormulario.js";

dotenv.config();

export async function createData(req, res) {
    console.log("PreInicio")
    
    let {
        bloco01radio01,
        bloco01radio02,
        bloco01radio03,
        bloco02radio01,
        bloco02radio02,
        bloco03radio01,
        bloco03radio02
    } = req.body;
  
    try {
        const record = await createRecordTable(
            bloco01radio01,
            bloco01radio02,
            bloco01radio03,
            bloco02radio01,
            bloco02radio02,
            bloco03radio01,
            bloco03radio02
        );

        console.log("Inicio")

        if (record) {
            // Coloca um console.log para vê se chega nessa parte aqui
            console.log("Oi")
            const postResponse = await fetch('api-media-total-tem-jeito.vercel.app/medias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("A requisição foi")
            if (postResponse.ok) {
                const postData = await postResponse.json();
                console.log("Response data:", postData);
                res.status(200).json({ message: "Success" });
            } else {
                console.error("POST request failed:", postResponse.statusText);
                res.status(500).json({ message: "Error in POST request" });
            }
            console.log("log se deu certo")
        } else {
            res.status(500).json({ message: "Error creating record" });
        }

        console.log("ultimo log")
        
    } catch (err) {
        console.log(err);
        res.status(500).end();
    }
}