import dotenv from "dotenv";

dotenv.config();

export async function createRecordTable (
    bloco01radio01,
    bloco01radio02,
    bloco01radio03,
    bloco02radio01,
    bloco02radio02,
    bloco03radio01,
    bloco03radio02) {
    
    const tableId = "303574010"
    
        await fetch("https://api.pipefy.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": process.env.AUTH_PIPEFY,
        },
        body: JSON.stringify({
            "query": `mutation { createTableRecord (input: {table_id:${tableId}  fields_attributes: [
                            {field_id: "nota_servi_o", field_value: "${bloco01radio01}"},
                            {field_id: "identifica_o_com_o_servi_o", field_value: "${bloco01radio02}"},
                            {field_id: "chance_de_continuar_com_o_servi_o", field_value: "${bloco01radio03}"}, 
                            {field_id: "nota_atendimento", field_value: "${bloco02radio01}"},
                            {field_id: "identifica_o_com_a_equipe", field_value: "${bloco02radio02}"},
                            {field_id: "nota_estrutura_da_loja", field_value: "${bloco03radio01}"},
                            {field_id: "loja", field_value: "${bloco03radio02}"}
                            ] }) { table_record { id }}}`
        }),
    });

}