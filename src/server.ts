import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors"
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video"
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ai-completion";

const app = fastify()

app.register(fastifyCors, {
    origin: '*',
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

const host = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`;
const port = process.env.PORT || 11337;

app.listen({
    host: host,
    port: port
}).then(() => {
    console.log("HTTP Server running on http://" + host + ":" + port)
})
