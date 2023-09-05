import dotenv from "dotenv";
import { createRecordTable } from "../services/CreateTableRecordFormulario.js";

dotenv.config();

export async function createData(req, res) {
    
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
            
            await fetch('https://api-media-total-tem-jeito.vercel.app/medias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            res.status(200).json({message: "Resgistro criado", medias: "As médias foram atualizadas" })
            
        
    } catch (err) {
        console.log(err);
        res.status(500).end();
    }
}