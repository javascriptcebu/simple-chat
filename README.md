# Simple Chat

A simple Node.js application that demonstrates how to use OpenAI's Chat Completions API to create a basic chatbot.

## Features

- 🤖 Integration with OpenAI's GPT models (GPT-4.1 or GPT-4o)
- 💬 Simple chat completion example
- 🔧 Environment variable configuration
- 📦 Modern ES modules support

## Prerequisites

- Node.js (Latest LTS version)
- An OpenAI API key

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/javascriptcebu/simple-chat
   cd simple-chat
   ```

2. Install dependencies using bun (recommended) or npm:

   ```bash
   # Using bun (recommended)
   bun install

   # Or using npm
   npm install
   ```

3. Set up your environment variables:

   ```bash
   # Create a .env file in the root directory
   touch .env
   ```

4. Add your OpenAI API key to the `.env` file:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

## Usage

Run the chat application:

```bash
# Using bun (recommended)
bun start

# Or using npm
npm start
```

The application will send a predefined message to the OpenAI API and display the response in the console.

## Configuration

### Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key (required)

### Model Configuration

You can modify the model used in `chat.js`:

```javascript
model: "gpt-4.1", // or "gpt-4o"
```

Available models:

- `gpt-4.1` - Fast and cost-effective
- `gpt-4o` - More capable but slower and more expensive

## Project Structure

```
simple-chat/
├── chat.js          # Main application file
├── package.json     # Project dependencies and scripts
├── .env            # Environment variables (create this)
├── .gitignore      # Git ignore rules
└── README.md       # This file
```

## Customization

To customize the chat behavior, modify the messages array in `chat.js`:

```javascript
messages: [
  { role: 'system', content: 'You are a helpful assistant.' },
  { role: 'user', content: 'Your custom message here' },
];
```

## Dependencies

- **openai**: Official OpenAI Node.js library
- **dotenv**: Loads environment variables from .env file

## Getting an OpenAI API Key

1. Visit [OpenAI's website](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to the API section
4. Generate a new API key
5. Copy the key and add it to your `.env` file

## Troubleshooting

### Common Issues

1. **"API key not found" error**: Make sure your `.env` file contains the correct `OPENAI_API_KEY`
2. **Module import errors**: Ensure you're using Node.js version 14 or higher
3. **Network errors**: Check your internet connection and API key validity

### Support

If you encounter any issues, please check:

- Your OpenAI API key is valid and has sufficient credits
- Your Node.js version is compatible
- All dependencies are properly installed
