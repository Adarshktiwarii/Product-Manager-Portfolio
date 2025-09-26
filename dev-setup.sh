#!/bin/bash

# 🚀 Product Manager Portfolio - Development Setup Script
# This script sets up the local development environment

echo "🚀 Setting up Product Manager Portfolio development environment..."

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the Product Manager Portfolio root directory"
    exit 1
fi

# Create development directories if they don't exist
echo "📁 Creating development directories..."
mkdir -p logs
mkdir -p temp
mkdir -p backups

# Check for required tools
echo "🔧 Checking development tools..."

# Check Python (for local server)
if command -v python3 &> /dev/null; then
    echo "✅ Python3 found: $(python3 --version)"
else
    echo "❌ Python3 not found. Please install Python 3.x"
    exit 1
fi

# Check Git
if command -v git &> /dev/null; then
    echo "✅ Git found: $(git --version)"
else
    echo "❌ Git not found. Please install Git"
    exit 1
fi

# Check Node.js (optional, for advanced tools)
if command -v node &> /dev/null; then
    echo "✅ Node.js found: $(node --version)"
    
    # Install development dependencies
    echo "📦 Installing development tools..."
    npm install -g html-validate
    npm install -g lighthouse
    npm install -g http-server
else
    echo "⚠️  Node.js not found. Some advanced tools won't be available."
fi

# Create local server script
echo "🌐 Creating local server script..."
cat > start-dev-server.sh << 'EOF'
#!/bin/bash
echo "🌐 Starting local development server..."
echo "📍 Server will be available at: http://localhost:8000"
echo "📍 Press Ctrl+C to stop the server"
python3 -m http.server 8000
EOF

chmod +x start-dev-server.sh

# Create backup script
echo "💾 Creating backup script..."
cat > backup-project.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_NAME="portfolio_backup_$TIMESTAMP.tar.gz"

echo "💾 Creating backup: $BACKUP_NAME"
tar -czf "$BACKUP_DIR/$BACKUP_NAME" \
    --exclude="$BACKUP_DIR" \
    --exclude=".git" \
    --exclude="node_modules" \
    --exclude="logs" \
    --exclude="temp" \
    .

echo "✅ Backup created: $BACKUP_DIR/$BACKUP_NAME"
EOF

chmod +x backup-project.sh

# Create quality check script
echo "🔍 Creating quality check script..."
cat > quality-check.sh << 'EOF'
#!/bin/bash
echo "🔍 Running quality checks..."

# HTML validation
if command -v html-validate &> /dev/null; then
    echo "📝 Validating HTML..."
    html-validate index.html || echo "⚠️  HTML validation warnings found"
else
    echo "⚠️  html-validate not installed. Skipping HTML validation."
fi

# Check file sizes
echo "📊 Checking file sizes..."
echo "HTML: $(du -h index.html | cut -f1)"
echo "CSS: $(du -h css/styles.css | cut -f1)"
echo "JS: $(du -h js/*.js | cut -f1)"

# Check git status
echo "📋 Git status:"
git status --short

echo "✅ Quality check completed"
EOF

chmod +x quality-check.sh

# Create deployment check script
echo "🚀 Creating deployment check script..."
cat > deployment-check.sh << 'EOF'
#!/bin/bash
echo "🚀 Checking deployment readiness..."

# Check if all required files exist
REQUIRED_FILES=("index.html" "css/styles.css" "js/main.js" "robots.txt" "sitemap.xml")

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
    fi
done

# Check GitHub Actions workflows
echo "🔧 Checking GitHub Actions workflows..."
WORKFLOW_COUNT=$(ls -1 .github/workflows/*.yml 2>/dev/null | wc -l)
echo "📊 GitHub Actions workflows: $WORKFLOW_COUNT"

# Check git remote
echo "🌐 Git remote:"
git remote -v

echo "✅ Deployment check completed"
EOF

chmod +x deployment-check.sh

# Create comprehensive development script
echo "⚡ Creating comprehensive development script..."
cat > dev.sh << 'EOF'
#!/bin/bash

show_help() {
    echo "🚀 Product Manager Portfolio - Development Tools"
    echo ""
    echo "Usage: ./dev.sh [command]"
    echo ""
    echo "Commands:"
    echo "  start     Start local development server"
    echo "  check     Run quality checks"
    echo "  backup    Create project backup"
    echo "  deploy    Check deployment readiness"
    echo "  status    Show project status"
    echo "  help      Show this help message"
    echo ""
}

case "$1" in
    start)
        ./start-dev-server.sh
        ;;
    check)
        ./quality-check.sh
        ;;
    backup)
        ./backup-project.sh
        ;;
    deploy)
        ./deployment-check.sh
        ;;
    status)
        echo "📊 Product Manager Portfolio Status"
        echo "📍 Location: $(pwd)"
        echo "🌐 Repository: $(git remote get-url origin 2>/dev/null || echo 'No remote configured')"
        echo "🔄 Branch: $(git branch --show-current 2>/dev/null || echo 'Not a git repository')"
        echo "📝 Last commit: $(git log -1 --oneline 2>/dev/null || echo 'No commits found')"
        echo "📊 File count: $(find . -type f -not -path './.git/*' | wc -l)"
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        show_help
        ;;
esac
EOF

chmod +x dev.sh

echo ""
echo "✅ Development environment setup completed!"
echo ""
echo "🎯 Available commands:"
echo "  ./dev.sh start   - Start local development server"
echo "  ./dev.sh check   - Run quality checks"
echo "  ./dev.sh backup  - Create project backup"
echo "  ./dev.sh deploy  - Check deployment readiness"
echo "  ./dev.sh status  - Show project status"
echo ""
echo "🚀 Quick start: ./dev.sh start"
echo ""


