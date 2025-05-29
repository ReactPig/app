function tokenize(input: string) {
    const tokens: {type: string, value: string}[] = [];
    let i = 0;
  
    while (i < input.length) {
      const char = input[i];
  
      if (/\d/.test(char)) {
        // Число
        let num = char;
        while (/\d|\./.test(input[i + 1])) {
          num += input[++i];
        }
        tokens.push({ type: "NUMBER", value: num });
      } else if (char === '+') tokens.push({ type: "PLUS", value: '+' });
      else if (char === '-') tokens.push({ type: "MINUS", value: '-' });
      else if (char === '*') tokens.push({ type: "STAR", value: '*' });
      else if (char === '/') tokens.push({ type: "SLASH", value: '/' });
      else if (char === '(') tokens.push({ type: "LPAREN", value: '(' });
      else if (char === ')') tokens.push({ type: "RPAREN", value: ')' });
      else if (char === ' ') {
        // пропуск пробелов
      } else {
        throw new Error(`Недопустимый символ: '${char}'`);
      }
  
      i++;
    }
  
    return tokens;
  }
  