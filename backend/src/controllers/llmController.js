import fetch from 'node-fetch';

const MODELSLAB_API_URL = 'https://modelslab.com/api/v6/llm/uncensored_chat';

// POST /api/llm/chat
export const llmChat = async (req, res) => {
  try {
    const apiKey = process.env.MODELSLAB_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        success: false,
        message: 'ModelsLab API key is not configured on the server',
      });
    }

    const { message, systemPrompt, max_tokens, temperature, top_p } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Field "message" (string) is required',
      });
    }

    const payload = {
      key: apiKey,
      messages: [
        {
          role: 'system',
          content:
            systemPrompt ||
            'You are an expert AI assistant for Aeko Creative Suite. You help with creative tasks, content ideas, and technical questions. Be concise and helpful.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
      max_tokens: max_tokens || 1000,
      temperature: typeof temperature === 'number' ? temperature : 0.7,
      top_p: typeof top_p === 'number' ? top_p : 0.9,
    };

    const response = await fetch(MODELSLAB_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: 'ModelsLab API error',
        status: response.status,
        data,
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error('LLM chat error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while calling ModelsLab LLM',
      error: error.message,
    });
  }
};


