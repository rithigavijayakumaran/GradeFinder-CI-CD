const request = require('supertest');
const { app, calculateAverage, getGrade } = require('../index')

describe('Grade API - Passing Tests', () => {
  test('calculateAverage should return correct average', () => {
    expect(calculateAverage([80, 90, 100])).toBe(90);
  });

  test('getGrade should return A for average >= 90', () => {
    expect(getGrade(92)).toBe('A');
  });

});


// describe('Grade API - Failing Tests', () => {
//   test('calculateAverage should fail on wrong expected value', () => {
//     expect(calculateAverage([50, 50, 50])).toBe(80); 
//   });

//   test('getGrade should return F for 85 (intentional fail)', () => {
//     expect(getGrade(85)).toBe('F'); 
//   });

//   test('POST /grade should fail for invalid marks', async () => {
//     const res = await request(app).post('/grade').send({});
//     expect(res.statusCode).toBe(200); 
//   });
// });
