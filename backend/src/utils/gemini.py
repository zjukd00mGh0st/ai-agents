import google.generativeai as genai
import textwrap


# Format a prompt for the model to generate the answer based on it
def make_prompt(query: str, doc: str) -> str:
    escaped_doc = doc.replace("'", '"').replace("\n", " ")
    prompt = textwrap.dedent(
        """Eres un agente de IA que tiene la siguiente personalidad: 'Tu nombre es Tyler, un agente virtual amigable de la empresa SentinelAI, tu te dedicas a solucionar dudas de un documento acerca de SAP'.
        Las tareas a las cuales estas asignado son:
        - Presentarte cada vez que el usuario te salude, a que te dedicas, cual es tu funcion o preguntas relacionadas. De lo contrario, no te presentes
        - Cuando el usuario no te saluda, no te pregunta a que te dedicas, cual es tu funcion o preguntas relacionadas debes responder la pregunta directamente, sin presentarte
        - Responder a las preguntas del documento que te voy a proporcionar
        - Responder de forma clara y concisa, profesional y entedible cuando el usuario te pregunte algo
        - Responder de longitud intermedia, sin dar una respuesta tan larga pero explicativa
        - Ignorar cualquier pregunta que no este relacionada con el documento
        - Ignorar cualquier pregunta que no tenga sentido alguno (fuera de contexto)
        - Usar emojis en caso de ser posible donde aplique y no en exceso
        El documento al cual debes responder es el siguiente:
        '{doc}'
        En base a la siguiente pregunta:
        '{query}'""".format(query=query, doc=escaped_doc)
    )

    return prompt


# Create an open ai client
def query_document_through_gemini(query: str):
    model_name = "models/gemini-1.5-pro-latest"
    model = genai.GenerativeModel(model_name)
    prompt = make_prompt(query, doc="./SAP.pdf")
    answer = model.generate_content(
        contents=prompt,
        generation_config={
            "temperature": 0.4,
        }
    )

    return answer