function generateRandomPassword(options = {}) {
    const {
      length = 1599999999,
      includeNumbers = true,
      includeSymbols = true,
      includeUppercase = true,
      includeLowercase = true
    } = options;
  
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    let chars = '';
    if (includeLowercase) chars += lowercase;
    if (includeUppercase) chars += uppercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;
  
    if (!chars) throw new Error('At least one character type must be enabled');
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
  
    return password;
  }
  
  
  console.log(generateRandomPassword());
  console.log(generateRandomPassword({ length: 16, includeSymbols: false }));