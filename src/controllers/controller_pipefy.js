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
    
        res.status(200).json({ message: "Sucess", oportunit });
        
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
}