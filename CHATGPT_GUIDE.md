# ChatGPT Integration Guide

## 🤖 How to Use ChatGPT in Your Project

Your project now includes a ChatGPT integration module. Here's how to use it:

---

## 📦 Installation

First, make sure dependencies are installed:

```bash
npm install
```

---

## 🚀 Quick Start

### 1. **Simple Question & Answer**

```javascript
const { askChatGPT } = require('./chatgpt-integration');

// Ask ChatGPT anything
const answer = await askChatGPT(
  'How do I create a responsive HTML layout?'
);

console.log(answer);
```

### 2. **Generate Code**

```javascript
const { generateCode } = require('./chatgpt-integration');

// Generate code for a specific task
const code = await generateCode(
  'Create a function that converts temperature from Celsius to Fahrenheit',
  'javascript'
);

console.log(code);
```

### 3. **Analyze Your Code**

```javascript
const { analyzeCode } = require('./chatgpt-integration');

const myCode = `
function add(a, b) {
  return a + b;
}
`;

// Get suggestions for improvement
const analysis = await analyzeCode(myCode, 'javascript');

console.log(analysis);
```

### 4. **Fix Code Issues**

```javascript
const { fixCode } = require('./chatgpt-integration');

const buggyCode = `
function getDomain(url) {
  let domain = url.split('/')[2];
  return domain;
}
`;

// Fix the code
const fixed = await fixCode(
  buggyCode,
  'This function fails for URLs with query parameters',
  'javascript'
);

console.log(fixed);
```

### 5. **Refactor Code**

```javascript
const { refactorCode } = require('./chatgpt-integration');

const oldCode = `
var x = 5;
if (x > 0) {
  console.log("positive");
} else {
  console.log("negative");
}
`;

// Improve the code
const improved = await refactorCode(oldCode, 'javascript');

console.log(improved);
```

### 6. **Generate Documentation**

```javascript
const { generateDocumentation } = require('./chatgpt-integration');

const code = `
function calculateTax(price, taxRate) {
  return price * (1 + taxRate);
}
`;

// Generate documentation
const docs = await generateDocumentation(code, 'javascript');

console.log(docs);
```

### 7. **Multi-Turn Conversation**

```javascript
const { createConversation } = require('./chatgpt-integration');

// Start a conversation
const chat = createConversation();

// First message
const response1 = await chat.send('How do I use async/await in JavaScript?');
console.log(response1);

// Follow-up question (context is maintained)
const response2 = await chat.send('Can you give me a real-world example?');
console.log(response2);

// See conversation history
console.log(chat.getHistory());

// Clear conversation
chat.clear();
```

---

## 📚 Available Functions

### **askChatGPT(question, context)**
Ask ChatGPT any question with optional code context.

```javascript
const answer = await askChatGPT(
  'What is a closure in JavaScript?',
  'I want to understand closures in the context of React hooks'
);
```

---

### **generateCode(prompt, language)**
Generate code for a specific task in a given language.

**Supported languages:** javascript, python, html, css, typescript, go, rust, etc.

```javascript
const code = await generateCode(
  'Create a web scraper that fetches product titles and prices',
  'python'
);
```

---

### **analyzeCode(code, language)**
Get detailed analysis and improvement suggestions.

```javascript
const analysis = await analyzeCode(myCode, 'javascript');
// Returns: performance tips, security concerns, best practices, etc.
```

---

### **fixCode(code, issue, language)**
Fix specific issues in your code.

```javascript
const fixed = await fixCode(
  buggyCode,
  'Variable scope issue causing unexpected behavior',
  'javascript'
);
```

---

### **refactorCode(code, language)**
Refactor code to follow best practices.

```javascript
const refactored = await refactorCode(legacyCode, 'javascript');
// Returns: cleaner, more modern code
```

---

### **generateDocumentation(code, language)**
Generate comprehensive documentation.

```javascript
const docs = await generateDocumentation(code, 'javascript');
// Returns: function descriptions, parameters, examples, etc.
```

---

### **createConversation()**
Create a multi-turn conversation that maintains context.

```javascript
const chat = createConversation();

await chat.send('First question');
await chat.send('Follow-up question with context');
await chat.send('Another question');

const history = chat.getHistory(); // Get all messages
chat.clear(); // Reset conversation
```

---

## 🎯 Practical Examples

### Example 1: Generate and Analyze HTML Code

```javascript
const { generateCode, analyzeCode } = require('./chatgpt-integration');

async function createAndAnalyzeHTML() {
  // Generate HTML
  const html = await generateCode(
    'Create a responsive product card component',
    'html'
  );
  console.log('Generated HTML:\n', html);

  // Analyze the generated code
  const analysis = await analyzeCode(html, 'html');
  console.log('\nAnalysis:\n', analysis);
}

createAndAnalyzeHTML();
```

---

### Example 2: Fix a Bug in Your Code

```javascript
const { fixCode } = require('./chatgpt-integration');
const { readFile } = require('./openai-github-integration');

async function fixBugInRepo() {
  // Read your file from repo
  const code = await readFile('index.html');

  // Ask ChatGPT to fix it
  const fixed = await fixCode(
    code,
    'The form submission is not working on mobile devices',
    'html'
  );

  console.log(fixed);
}

fixBugInRepo();
```

---

### Example 3: Code Review with Suggestions

```javascript
const { analyzeCode, generateDocumentation } = require('./chatgpt-integration');

async function reviewCode(code) {
  console.log('📋 Reviewing code...\n');

  // Get analysis
  const analysis = await analyzeCode(code, 'javascript');
  console.log('Analysis:\n', analysis);
  console.log('\n' + '─'.repeat(50) + '\n');

  // Generate documentation
  const docs = await generateDocumentation(code, 'javascript');
  console.log('Documentation:\n', docs);
}
```

---

### Example 4: Learning with ChatGPT

```javascript
const { createConversation } = require('./chatgpt-integration');

async function learnTopics() {
  const chat = createConversation();

  console.log('Learning JavaScript Concepts\n');

  const q1 = await chat.send('Explain promises in JavaScript');
  console.log('Q1: What are promises?\n', q1, '\n');

  const q2 = await chat.send('How are async/await related to promises?');
  console.log('Q2: Async/await?\n', q2, '\n');

  const q3 = await chat.send('Show me a real example combining both');
  console.log('Q3: Real example?\n', q3, '\n');
}

learnTopics();
```

---

### Example 5: Combine with GitHub Integration

```javascript
const { readFile, writeFile } = require('./openai-github-integration');
const { analyzeCode, fixCode } = require('./chatgpt-integration');

async function improveCodeInRepo() {
  // Read file from your repo
  const code = await readFile('index.html');
  console.log('Read file from repo');

  // Analyze with ChatGPT
  const analysis = await analyzeCode(code, 'html');
  console.log('Analysis:', analysis);

  // Fix issues
  const improved = await fixCode(
    code,
    'Remove deprecated HTML elements and improve accessibility',
    'html'
  );
  console.log('Improved code:', improved);

  // Write back to repo
  await writeFile(
    'index.html',
    improved,
    'refactor: Improve HTML with ChatGPT suggestions'
  );
  console.log('Updated file in repo!');
}

improveCodeInRepo();
```

---

## ⚙️ Configuration

All ChatGPT settings are in your `.env` file:

```env
OPENAI_API_KEY=sk-your-api-key
OPENAI_MODEL=gpt-4
OPENAI_MAX_TOKENS=2000
OPENAI_TEMPERATURE=0.7
```

### Model Options:
- `gpt-4` - Most capable, best for complex tasks
- `gpt-3.5-turbo` - Faster, cheaper, good for most tasks
- `gpt-4-turbo-preview` - Balance of quality and speed

### Max Tokens:
- Higher = longer responses (but costs more)
- Typical: 1000-2000 tokens

### Temperature:
- 0 = Deterministic (same input = same output)
- 0.7 = Balanced (default)
- 2 = Creative (varied responses)

---

## 🧪 Test ChatGPT Integration

Run the test script:

```bash
node chatgpt-integration.js
```

Expected output:
```
🤖 ChatGPT Integration Test

Test 1: Asking a question
──────────────────────────────────────────────────────
[ChatGPT's response about best practices]

Test 2: Generating code
──────────────────────────────────────────────────────
[Generated JavaScript code]

✅ ChatGPT Integration test completed!
```

---

## 🔗 Full Workflow Example

```javascript
const { readFile, writeFile, createPullRequest } = require('./openai-github-integration');
const { analyzeCode, refactorCode, generateDocumentation } = require('./chatgpt-integration');

async function improveEntireProject() {
  try {
    console.log('🚀 Starting Code Improvement Workflow\n');

    // 1. Read file from GitHub
    console.log('1️⃣  Reading code from GitHub...');
    const originalCode = await readFile('index.html');

    // 2. Analyze with ChatGPT
    console.log('2️⃣  Analyzing code with ChatGPT...');
    const analysis = await analyzeCode(originalCode, 'html');
    console.log(analysis);

    // 3. Refactor the code
    console.log('\n3️⃣  Refactoring code...');
    const refactored = await refactorCode(originalCode, 'html');

    // 4. Generate documentation
    console.log('4️⃣  Generating documentation...');
    const docs = await generateDocumentation(refactored, 'html');

    // 5. Create new files
    console.log('\n5️⃣  Saving improvements...');
    await writeFile(
      'index-improved.html',
      refactored,
      'refactor: Improve HTML structure'
    );
    await writeFile(
      'index-docs.md',
      docs,
      'docs: Add documentation for index.html'
    );

    // 6. Create a Pull Request
    console.log('6️⃣  Creating pull request...');
    await createPullRequest(
      'feature/ai-improvements',
      'AI: Code improvements and documentation',
      'This PR contains improvements suggested by ChatGPT'
    );

    console.log('\n✅ Workflow complete!');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

improveEntireProject();
```

---

## 💡 Tips & Tricks

### 1. **Be Specific**
```javascript
// ❌ Bad
await generateCode('Make a function', 'javascript');

// ✅ Good
await generateCode(
  'Create a function that validates email addresses using regex and handles international characters',
  'javascript'
);
```

### 2. **Provide Context**
```javascript
// ✅ Better results with context
await askChatGPT(
  'How should I handle this error?',
  'The error occurs when trying to parse JSON from an API response'
);
```

### 3. **Multi-Step Approach**
```javascript
// Step 1: Analyze
const analysis = await analyzeCode(code, 'javascript');

// Step 2: Fix issues based on analysis
const fixed = await fixCode(code, analysis, 'javascript');

// Step 3: Document
const docs = await generateDocumentation(fixed, 'javascript');
```

---

## 🆘 Troubleshooting

### Error: "OpenAI API key is not valid"
- Check your `.env` file
- Verify API key starts with `sk-`
- Check account has credits at: https://platform.openai.com/account/billing/overview

### Error: "429 Rate Limited"
- You're making too many requests
- Wait a minute and try again
- Reduce `OPENAI_MAX_TOKENS`

### Getting Short/Incomplete Responses
- Increase `OPENAI_MAX_TOKENS` in `.env`
- Be more specific in your prompt

### Getting Unexpected Results
- Reduce `OPENAI_TEMPERATURE` (closer to 0)
- Give more context in your prompt
- Try a different model (gpt-4 vs gpt-3.5-turbo)

---

## 📖 Resources

- [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
- [ChatGPT Best Practices](https://platform.openai.com/docs/guides/gpt-best-practices)
- [Your API Keys](https://platform.openai.com/account/api-keys)
- [Usage & Billing](https://platform.openai.com/account/billing/overview)

---

## 🎉 You're Ready!

You now have ChatGPT fully integrated into your project. Start using it to:
- Generate code
- Fix bugs
- Analyze code
- Refactor legacy code
- Write documentation
- Learn programming concepts

**Happy coding! 🚀**
