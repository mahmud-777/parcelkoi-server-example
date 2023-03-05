import request from "supertest";
import app from '../src/app';

// import {getAllUsers } from '../src/services/userService';
jest.mock('../src/services/userService');


describe("app test suite", () => {
    test('my first test', async () => {
        console.log('my first test');
    })

    // test('app first test', async () => {
    //     console.log("my first app test");
    //     let response = await request(app).get("/users");
    //     expect(response.statusCode).toBe(200);
    //     // console.log(response.body);
    //     let users = response.body;
    //     expect(users.length).toBe(1);
    // })
})