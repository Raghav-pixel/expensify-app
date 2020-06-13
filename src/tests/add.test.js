const add = (a,b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', ()=>{
    const result = add(2, 3)
    expect(result).toBe(5)
})

test('should print the string', ()=> {
    const result = generateGreeting('raghav')
    expect(result).toBe('Hello raghav!')
})