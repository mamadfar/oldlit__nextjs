import {afterAll, afterEach, beforeAll, describe, expect, test, vi} from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "@/components/pages/auth/Login";
import {http, HttpResponse} from 'msw';
import { setupServer } from 'msw/node';

// Define a mock server with the request handler
const server = setupServer(
    http.post('/api/login', async ({request }) => {
        // Mocked response for successful login
        // const user = await request.json()
        return new HttpResponse(JSON.stringify({ token: 'mockedtoken' }), {
            status: 200,
        })
    })
);

// Start the mock server before tests and reset handlers after each test
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

vi.mock('next/navigation', async () => {
    const actual = await vi.importActual('next/navigation');
    return {
        ...actual,
        useRouter: vi.fn(() => ({
            push: vi.fn(),
            replace: vi.fn(),
        })),
        useSearchParams: vi.fn(() => ({
            // get: vi.fn(),
        })),
        usePathname: vi.fn(),
    };
});

vi.mock('@tanstack/react-query', async () => {
    const actual = await vi.importActual('@tanstack/react-query');
    return {
        ...actual,
        useMutation: vi.fn((mutationFn, options) => {
            // const mutate = async (_variables, _mutationOptions) => {
            const mutate = async () => {
                return true
                // Implement your custom logic for mutate function here
            };
            return [mutate, {
                // Optionally mock other properties/methods returned from useMutation
            }];
        }),
    };
});

describe('Login Component', () => {
    test('renders username and password input fields', async () => {
        render(
            // <RouterContext.Provider value={{ pathname: '/login' }}>
                <Login />
            // </RouterContext.Provider>
        );
        const usernameInput = screen.getAllByPlaceholderText('Username')[0];
        const passwordInput = screen.getAllByPlaceholderText('Password')[0];
        expect(usernameInput).toBeTruthy();
        expect(passwordInput).toBeTruthy();
    });
    test('submits form with correct data', async () => {
        render(
            // <RouterContext.Provider value={{ pathname: '/login' }}>
                <Login />
            // </RouterContext.Provider>
        );
        const usernameInput = screen.getAllByPlaceholderText('Username')[0];
        const passwordInput = screen.getAllByPlaceholderText('Password')[0];
        const loginButton = screen.getAllByText('Login')[0];

        fireEvent.change(usernameInput, { target: { value: 'm.sabah.farhadi@gmail.com' } });
        fireEvent.change(passwordInput, { target: { value: 'Test@1234!' } });

        fireEvent.click(loginButton);

        // You might want to add assertions here based on your logic after submission,
        // for example, checking if the form was submitted correctly.
    });
});