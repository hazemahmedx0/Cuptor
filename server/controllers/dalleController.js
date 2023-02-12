import catchAsync from '../utils/catchAsync.js'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

const generateImage = catchAsync(async (req, res, next) => {
  const { prompt } = req.body

  const aiResponse = await openai.createImage({
    prompt,
    n: 1,
    size: '1024x1024',
    response_format: 'b64_json',
  })

  const image = aiResponse.data.data[0].b64_json
  res.status(200).json({ photo: image })
})

const testRoute = (req, res, next) => {
  res.status(200).json({ message: 'Hello from DALL-E!' })
}
export default {
  generateImage,
  testRoute,
}
