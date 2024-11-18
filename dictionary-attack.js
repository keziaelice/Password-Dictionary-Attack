const crypto = require('crypto');
const fs = require('fs');

// Target MD5 hash
const targetHash = '578ed5a4eecf5a15803abdc49f6152d6';

// Load the password list
const passwordFilePath = './500-worst-passwords.txt';
fs.readFile(passwordFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading password file:', err);
    return;
  }

  // Split file content into individual passwords
  const passwords = data.split(/\r?\n/);

  for (const password of passwords) {
    // Generate MD5 hash for the current password
    const hash = crypto.createHash('md5').update(password).digest('hex');

    // Compare with the target hash
    if (hash === targetHash) {
      console.log(`Bob's password is: ${password}`);
      return;
    }
  }

  console.log('Password not found in the list.');
});
