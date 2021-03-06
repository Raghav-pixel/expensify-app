import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', ()=> {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type : 'REMOVE_EXPENSE',
        id : '123abc'
    });
});

// test('should setup edit expense action object', ()=> {
//     const action = editExpense( '123abc', {amount: 21 });
//     expect(action).toEqual({
//         type: 'EDIT_EXPENSE',
//         id: '123abc',
//         updates: {
//             amount: 21
//         }
//     });
// });

// test('should setup addExpense object with provided values', ()=> {
//     const expenseData = {
//         description : 'Rent',
//         amount : 13500,
//         createdAt : 1000,
//         note : 'My last month rent'
//     };
//     const action =  addExpense(expenseData);
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             id: expect.any(String)
//         }
//     });
// });

test('should setup addExpense object with default values', ()=> {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
});