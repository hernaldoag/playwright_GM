import { test, expect } from '@playwright/test';
const REPO = 'test-repo-1';
const USER = 'github-username';

test('should create a bug report', async ({ request, baseURL }) => {
  const newPet = await request.post(`${baseURL}/pet`, {
    data: {
            "id": 900010,
            "category": {
              "id": 2,
              "name": "Dogs and puppies - 900010"
            },
            "name": "doggies",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 1,
                "name": "Home"
              }
            ],
            "status": "available"
          }
  });
  expect(newPet.ok()).toBeTruthy();


  const pets = await request.get(`${baseURL}/pet/900010`);
  expect(pets.ok()).toBeTruthy();
  expect(await pets.json()).toEqual(expect.objectContaining({
    "id": 900010,
    "category": {
        "id": 2,
        "name": "Dogs and puppies - 900010"
    },
    "name": "doggies",
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": 1,
            "name": "Home"
        }
    ],
    "status": "available"
  }));

  const uppets = await request.put(`${baseURL}/pet`, {
    data:{"id": 900010,
    "category": {
        "id": 2,
        "name": "Dogs and puppies - 900010 - Update worked"
    },
    "name": "doggies",
    "photoUrls": [
        "www.mydogs.io/900010"
    ],
    "tags": [
        {
            "id": 1,
            "name": "Home"
        },
        {
            "id": 2,
            "name": "outdoor"
        }
    ],
    "status": "pending"
    }
  });
  expect(uppets.ok()).toBeTruthy();
  expect(await uppets.json()).toEqual(expect.objectContaining({
    "id": 900010,
    "category": {
        "id": 2,
        "name": "Dogs and puppies - 900010 - Update worked"
    },
    "name": "doggies",
    "photoUrls": [
        "www.mydogs.io/900010"
    ],
    "tags": [
        {
            "id": 1,
            "name": "Home"
        },
        {
            "id": 2,
            "name": "outdoor"
        }
    ],
    "status": "pending"
  }));

  const pending = await request.get(`${baseURL}/pet/findByStatus`,{
    params:{
        status: "pending"
    }
  });
  expect(pending.ok()).toBeTruthy();
  expect(pending.status()).toBe(200);
  console.log(await pending.json());

  expect(await pending.json()).toContain(expect.objectContaining({
        id: 900010,
        category: { id: 2, name: 'Dogs and puppies - 900010 - Update worked' },
        name: 'doggies',
        photoUrls: [ 'www.mydogs.io/900010' ],
        tags: [ [Object], [Object] ],
        status: 'pending'
    }));
    console.log('Element was Found');
});
