# Automatic Environment Configuration Script
# Run this after creating your GitHub App

#!/bin/bash

set -e

echo "🔧 GitHub App & OpenAI Configuration Setup"
echo "════════════════════════════════════════════════════════"
echo ""

# Check if .env exists
if [ -f .env ]; then
    echo "⚠️  .env file already exists"
    read -p "Do you want to reconfigure it? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Skipping .env configuration"
        exit 0
    fi
fi

# Create .env file
cat > .env << 'EOF'
# ============================================
# GitHub App Configuration
# ============================================

# Your GitHub App ID (get from https://github.com/settings/apps)
GITHUB_APP_ID=

# Your GitHub App Private Key (download from app settings)
# Should start with: -----BEGIN RSA PRIVATE KEY-----
GITHUB_APP_PRIVATE_KEY=

# Your Webhook Secret (optional)
GITHUB_WEBHOOK_SECRET=

# ============================================
# GitHub Repository Configuration
# ============================================

GITHUB_REPO_OWNER=lucaskelvinmrmichael-del
GITHUB_REPO_NAME=michael_physician_dashboard_advanced

# Personal Access Token (optional, for additional operations)
GITHUB_TOKEN=

# ============================================
# OpenAI Configuration
# ============================================

# Your OpenAI API Key (get from https://platform.openai.com/api-keys)
OPENAI_API_KEY=

# Model selection (gpt-4, gpt-3.5-turbo, etc.)
OPENAI_MODEL=gpt-4

# Maximum tokens for OpenAI responses
OPENAI_MAX_TOKENS=2000

# Temperature (0-2, lower = more deterministic)
OPENAI_TEMPERATURE=0.7

# ============================================
# Additional Configuration
# ============================================

# Node environment
NODE_ENV=development

# Log level (debug, info, warn, error)
LOG_LEVEL=info
EOF

echo "✅ Created .env file"
echo ""
echo "Now fill in the following values in your .env file:"
echo ""
echo "1. GITHUB_APP_ID"
echo "   → Get from: https://github.com/settings/apps"
echo "   → Look for 'App ID' at the top of your app page"
echo ""
echo "2. GITHUB_APP_PRIVATE_KEY"
echo "   → Get from: https://github.com/settings/apps"
echo "   → Click 'Generate a private key' at the bottom"
echo "   → Copy the entire content from the downloaded .pem file"
echo ""
echo "3. OPENAI_API_KEY"
echo "   → Get from: https://platform.openai.com/api-keys"
echo "   → Starts with: sk-"
echo ""
echo "Edit the .env file:"
echo "  nano .env"
echo ""
echo "Or open it in your preferred editor:"
echo "  cat .env"
echo ""

read -p "Press ENTER to open .env in nano... (or Ctrl+C to exit)"
nano .env

echo ""
echo "✅ Configuration complete!"
echo ""
echo "Test your setup:"
echo "  npm install"
echo "  npm start"
echo ""
