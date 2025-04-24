function randomString(length) {
    return Array.from({length}, () => 
      String.fromCharCode(97 + Math.floor(Math.random() * 26))
    ).join('');
  }