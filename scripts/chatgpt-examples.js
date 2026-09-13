/**
 * ChatGPT Usage Examples
 * Quick-start examples for common tasks
 */

require('dotenv').config();
const {
  generateCode,
  analyzeCode,
  askChatGPT,
  fixCode,
  refactorCode,
  generateDocumentation,
  createConversation,
} = require('../chatgpt-integration');

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
};

async function example1_SimpleQuestion() {
  console.log(`${colors.bright}${colors.blue}Example 1: Ask a Simple Question${colors.reset}\n`);

  const question = 'What is the difference between let and const in JavaScript?';
  const answer = await askChatGPT(question);

  console.log(`${colors.cyan}Question:${colors.reset}`);
  console.log(question);
  console.log(`\n${colors.cyan}Answer:${colors.reset}`);
  console.log(answer);
  console.log('\n' + '═'.repeat(60) + '\n');
}

async function example2_GenerateCode() {
  console.log(`${colors.bright}${colors.blue}Example 2: Generate Code${colors.reset}\n`);

  const prompt = 'Create a function that validates if a string is a valid URL';
  const code = await generateCode(prompt, 'javascript');

  console.log(`${colors.cyan}Prompt:${colors.reset}`);
  console.log(prompt);
  console.log(`\n${colors.cyan}Generated Code:${colors.reset}`);
  console.log(code);
  console.log('\n' + '═'.repeat(60) + '\n');
}

async function example3_AnalyzeCode() {
  console.log(`${colors.bright}${colors.blue}Example 3: Analyze Your Code${colors.reset}\n`);

  const codeToAnalyze = `
function getUser(id) {
  var user = null;
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      user = users[i];
      break;
    }
  }
  return user;
}
  `;

  const analysis = await analyzeCode(codeToAnalyze, 'javascript');

  console.log(`${colors.cyan}Code:${colors.reset}`);
  console.log(codeToAnalyze);
  console.log(`\n${colors.cyan}Analysis:${colors.reset}`);
  console.log(analysis);
  console.log('\n' + '═'.repeat(60) + '\n');
}

async function example4_FixCode() {
  console.log(`${colors.bright}${colors.blue}Example 4: Fix Code Issues${colors.reset}\n`);

  const buggyCode = `
function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price * items[i].quantity;
  }
  return total;
}
  `;

  const issue = 'This function doesnt handle tax calculation or discounts';
  const fixed = await fixCode(buggyCode, issue, 'javascript');

  console.log(`${colors.cyan}Original Code:${colors.reset}`);
  console.log(buggyCode);
  console.log(`\n${colors.cyan}Issue:${colors.reset}`);
  console.log(issue);
  console.log(`\n${colors.cyan}Fixed Code:${colors.reset}`);
  console.log(fixed);
  console.log('\n' + '═'.repeat(60) + '\n');
}

async function example5_RefactorCode() {
  console.log(`${colors.bright}${colors.blue}Example 5: Refactor Code${colors.reset}\n`);

  const oldCode = `
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}
  `;

  const refactored = await refactorCode(oldCode, 'javascript');

  console.log(`${colors.cyan}Original Code:${colors.reset}`);
  console.log(oldCode);
  console.log(`\n${colors.cyan}Refactored Code:${colors.reset}`);
  console.log(refactored);
  console.log('\n' + '═'.repeat(60) + '\n');
}

async function example6_GenerateDocs() {
  console.log(`${colors.bright}${colors.blue}Example 6: Generate Documentation${colors.reset}\n`);

  const codeToDocument = `
function fetchUserProfile(userId, options = {}) {
  const { includeSettings = false, format = 'json' } = options;
  return fetch(\`/api/users/\${userId}\`, {
    headers: {
      'Content-Type': format === 'xml' ? 'application/xml' : 'application/json'
    }
  }).then(res => res.json());
}
  `;

  const docs = await generateDocumentation(codeToDocument, 'javascript');

  console.log(`${colors.cyan}Code:${colors.reset}`);
  console.log(codeToDocument);
  console.log(`\n${colors.cyan}Documentation:${colors.reset}`);
  console.log(docs);
  console.log('\n' + '═'.repeat(60) + '\n');
}

async function example7_Conversation() {
  console.log(`${colors.bright}${colors.blue}Example 7: Multi-Turn Conversation${colors.reset}\n`);

  const chat = createConversation();

  console.log(`${colors.cyan}User:${colors.reset} What is a closure in JavaScript?`);
  const response1 = await chat.send('What is a closure in JavaScript?');
  console.log(`${colors.green}ChatGPT:${colors.reset}`);
  console.log(response1);

  console.log(`\n${colors.cyan}User:${colors.reset} Can you provide a practical example?`);
  const response2 = await chat.send('Can you provide a practical example?');
  console.log(`${colors.green}ChatGPT:${colors.reset}`);
  console.log(response2);

  console.log(`\n${colors.cyan}User:${colors.reset} How is this used in React?`);
  const response3 = await chat.send('How is this used in React?');
  console.log(`${colors.green}ChatGPT:${colors.reset}`);
  console.log(response3);

  console.log('\n' + '═'.repeat(60) + '\n');
}

async function example8_HtmlAnalysis() {
  console.log(`${colors.bright}${colors.blue}Example 8: Analyze HTML Code${colors.reset}\n`);

  const htmlCode = `
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <h1>Welcome</h1>
  <p>This is my website</p>
  <table>
    <tr><td>Name</td><td>Age</td></tr>
    <tr><td>John</td><td>30</td></tr>
  </table>
</body>
</html>
  `;

  const analysis = await analyzeCode(htmlCode, 'html');

  console.log(`${colors.cyan}HTML Code:${colors.reset}`);
  console.log(htmlCode);
  console.log(`\n${colors.cyan}Analysis:${colors.reset}`);
  console.log(analysis);
  console.log('\n' + '═'.repeat(60) + '\n');
}

async function example9_GenerateHtml() {
  console.log(`${colors.bright}${colors.blue}Example 9: Generate HTML Component${colors.reset}\n`);

  const prompt = 'Create a responsive navigation bar with logo and menu items';
  const html = await generateCode(prompt, 'html');

  console.log(`${colors.cyan}Prompt:${colors.reset}`);
  console.log(prompt);
  console.log(`\n${colors.cyan}Generated HTML:${colors.reset}`);
  console.log(html);
  console.log('\n' + '═'.repeat(60) + '\n');
}

async function example10_LearningPath() {
  console.log(`${colors.bright}${colors.blue}Example 10: Learning with ChatGPT${colors.reset}\n`);

  const chat = createConversation();

  console.log(`${colors.cyan}Learning Path: Understanding Async Programming${colors.reset}\n`);

  console.log('Step 1: Callback Functions');
  const step1 = await chat.send('Explain callback functions in JavaScript with a simple example');
  console.log(step1.substring(0, 300) + '...\n');

  console.log('Step 2: Promises');
  const step2 = await chat.send('Now explain how Promises improve on callbacks');
  console.log(step2.substring(0, 300) + '...\n');

  console.log('Step 3: Async/Await');
  const step3 = await chat.send('And how does async/await relate to Promises?');
  console.log(step3.substring(0, 300) + '...\n');

  console.log('\n' + '═'.repeat(60) + '\n');
}

// Main execution
async function main() {
  console.log(`\n${colors.bright}${colors.cyan}═══════════════════════════════════════════════════════════`);
  console.log('🤖 ChatGPT Integration Examples');
  console.log('═══════════════════════════════════════════════════════════\n');

  try {
    // Run each example
    await example1_SimpleQuestion();
    await example2_GenerateCode();
    await example3_AnalyzeCode();
    await example4_FixCode();
    await example5_RefactorCode();
    await example6_GenerateDocs();
    await example7_Conversation();
    await example8_HtmlAnalysis();
    await example9_GenerateHtml();
    await example10_LearningPath();

    console.log(`${colors.bright}${colors.green}✅ All examples completed successfully!${colors.reset}`);
    console.log(`\n${colors.cyan}Check CHATGPT_GUIDE.md for more examples and documentation.${colors.reset}\n`);
  } catch (error) {
    console.error(`${colors.bright}❌ Error:${colors.reset}`, error.message);
    process.exit(1);
  }
}

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = {
  example1_SimpleQuestion,
  example2_GenerateCode,
  example3_AnalyzeCode,
  example4_FixCode,
  example5_RefactorCode,
  example6_GenerateDocs,
  example7_Conversation,
  example8_HtmlAnalysis,
  example9_GenerateHtml,
  example10_LearningPath,
};
