const { exec } = require('child_process');

const runTests = () => {

  const command = 'npx playwright test --project=chromium --headed'
;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
};

runTests();
