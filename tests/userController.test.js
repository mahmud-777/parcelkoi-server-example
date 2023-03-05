import request from "supertest";
import app from '../src/app';

// import {getAllUsers } from '../src/services/userService';
jest.mock('../src/services/userService');

describe("UserController Test Suit", () => {
    test('getAllUsers should return', async () => {
        console.log('get all users test');
        let response = await request(app).get('/users');
        expect(response.statusCode).toBe(200);
        let users = response.body;
        expect(users.length).toBeGreaterThan(0);
        expect(users[0]._id).toBe('1');
    })
})

