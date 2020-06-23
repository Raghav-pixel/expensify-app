const add = (a, b) => a + b;
const generateGreeting = (name)=> `Hello ${name}`;

test('should add two numbers', ()=> {
    const result = add(4, 3)
    expect(result).toBe(7)
});

test('should generate name', ()=> {
    const result = generateGreeting('Raghav');
    expect(result).toBe('Hello Raghav');
})