#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

// Test configuration
const tests = [
  {
    name: 'Room Stream 1',
    file: 'index.html',
    link: 'video-stream.html',
    targetFile: 'video-stream.html'
  },
  {
    name: 'Room Stream 2',
    file: 'index.html',
    link: 'video-stream2.html',
    targetFile: 'video-stream2.html'
  },
  {
    name: 'Room Stream 3',
    file: 'index.html',
    link: 'video-stream3.html',
    targetFile: 'video-stream3.html'
  },
  {
    name: 'Main Room Stream',
    file: 'index.html',
    link: 'video-stream.html',
    targetFile: 'video-stream.html'
  }
];

// Test results
let passedTests = 0;
let failedTests = 0;
const results = [];

console.log(`\n${colors.cyan}╔════════════════════════════════════════════════╗${colors.reset}`);
console.log(`${colors.cyan}║     Stream Rooms - Navigation Links Test       ║${colors.reset}`);
console.log(`${colors.cyan}╚════════════════════════════════════════════════╝${colors.reset}\n`);

// Test 1: Check if required files exist
console.log(`${colors.blue}📋 Test 1: Checking if required files exist...${colors.reset}`);
const requiredFiles = ['index.html', 'video-stream.html', 'video-stream2.html', 'video-stream3.html', 'server.js'];
let filesExist = true;

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`${colors.green}✓${colors.reset} ${file} exists`);
  } else {
    console.log(`${colors.red}✗${colors.reset} ${file} NOT FOUND`);
    filesExist = false;
  }
});

if (filesExist) {
  passedTests++;
  console.log(`\n${colors.green}✓ All required files exist${colors.reset}\n`);
} else {
  failedTests++;
  console.log(`\n${colors.red}✗ Some required files are missing${colors.reset}\n`);
}

// Test 2: Verify navigation links in index.html
console.log(`${colors.blue}📋 Test 2: Verifying navigation links in index.html...${colors.reset}`);

try {
  const indexContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  
  tests.forEach((test, index) => {
    const testNumber = index + 1;
    
    // Check if the link exists in the file
    if (indexContent.includes(`href="${test.link}"`)) {
      const targetExists = fs.existsSync(path.join(__dirname, test.targetFile));
      
      if (targetExists) {
        console.log(`${colors.green}✓${colors.reset} ${test.name} → ${test.link} ${colors.green}(Target exists)${colors.reset}`);
        results.push({
          test: test.name,
          link: test.link,
          target: test.targetFile,
          status: 'PASS'
        });
        passedTests++;
      } else {
        console.log(`${colors.red}✗${colors.reset} ${test.name} → ${test.link} ${colors.red}(Target file missing)${colors.reset}`);
        results.push({
          test: test.name,
          link: test.link,
          target: test.targetFile,
          status: 'FAIL - Target not found'
        });
        failedTests++;
      }
    } else {
      console.log(`${colors.red}✗${colors.reset} ${test.name} → Link NOT found in index.html`);
      results.push({
        test: test.name,
        link: test.link,
        target: test.targetFile,
        status: 'FAIL - Link not found'
      });
      failedTests++;
    }
  });
  
  console.log();
} catch (error) {
  console.log(`${colors.red}✗ Error reading index.html: ${error.message}${colors.reset}\n`);
  failedTests++;
}

// Test 3: Verify target files contain expected elements
console.log(`${colors.blue}📋 Test 3: Verifying video stream pages have expected elements...${colors.reset}`);

const videoStreamFiles = ['video-stream.html', 'video-stream2.html', 'video-stream3.html'];
videoStreamFiles.forEach(file => {
  try {
    const content = fs.readFileSync(path.join(__dirname, file), 'utf8');
    
    const hasBackLink = content.includes('href="index.html"');
    const hasIframe = content.includes('iframe');
    const hasFullscreen = content.includes('toggleFullscreen');
    
    if (hasBackLink && hasIframe && hasFullscreen) {
      console.log(`${colors.green}✓${colors.reset} ${file} has all required elements`);
      passedTests++;
    } else {
      const missing = [];
      if (!hasBackLink) missing.push('Back Link');
      if (!hasIframe) missing.push('Video Player');
      if (!hasFullscreen) missing.push('Fullscreen Feature');
      
      console.log(`${colors.red}✗${colors.reset} ${file} missing: ${missing.join(', ')}`);
      failedTests++;
    }
  } catch (error) {
    console.log(`${colors.red}✗${colors.reset} Error reading ${file}: ${error.message}`);
    failedTests++;
  }
});

console.log();

// Test 4: Verify server configuration
console.log(`${colors.blue}📋 Test 4: Checking server configuration...${colors.reset}`);

try {
  const serverContent = fs.readFileSync(path.join(__dirname, 'server.js'), 'utf8');
  
  const hasExpress = serverContent.includes('require(\'express\')');
  const hasStatic = serverContent.includes('express.static');
  const hasPort = serverContent.includes('PORT');
  
  if (hasExpress && hasStatic && hasPort) {
    console.log(`${colors.green}✓${colors.reset} Server properly configured with Express`);
    console.log(`${colors.green}✓${colors.reset} Static file serving is enabled`);
    console.log(`${colors.green}✓${colors.reset} Port configuration is set up`);
    passedTests++;
  } else {
    console.log(`${colors.red}✗${colors.reset} Server configuration issues detected`);
    failedTests++;
  }
} catch (error) {
  console.log(`${colors.red}✗${colors.reset} Error reading server.js: ${error.message}`);
  failedTests++;
}

console.log();

// Summary
console.log(`${colors.cyan}╔════════════════════════════════════════════════╗${colors.reset}`);
console.log(`${colors.cyan}║              Test Summary                      ║${colors.reset}`);
console.log(`${colors.cyan}╚════════════════════════════════════════════════╝${colors.reset}\n`);

console.log(`${colors.green}✓ Passed: ${passedTests}${colors.reset}`);
console.log(`${colors.red}✗ Failed: ${failedTests}${colors.reset}`);
console.log(`Total Tests: ${passedTests + failedTests}\n`);

// Detailed results table
if (results.length > 0) {
  console.log(`${colors.blue}Navigation Links Details:${colors.reset}`);
  console.table(results);
}

// Final status
if (failedTests === 0) {
  console.log(`\n${colors.green}✓ All tests passed! Navigation links are correctly configured.${colors.reset}\n`);
  process.exit(0);
} else {
  console.log(`\n${colors.red}✗ Some tests failed. Please review the issues above.${colors.reset}\n`);
  process.exit(1);
}
