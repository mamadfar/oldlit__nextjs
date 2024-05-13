import {describe, expect, test, vi} from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Register from "@/components/pages/auth/Register";

// Define the mock for 'next/navigation'
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

// Define the mock for '@tanstack/react-query'
vi.mock('@tanstack/react-query', async () => {
    const actual = await vi.importActual('@tanstack/react-query');

    return {
        ...actual,
        useMutation: vi.fn((mutationFn, options) => {
            const mutate = async () => {
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
                <Register />
            // </RouterContext.Provider>
        );
        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');
        const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
        expect(emailInput).toBeTruthy();
        expect(passwordInput).toBeTruthy();
        expect(confirmPasswordInput).toBeTruthy();
    });
    // test('submits form with correct data', async () => {
    //     render(
    //         // <RouterContext.Provider value={{ pathname: '/login' }}>
    //             <Login />
    //         // </RouterContext.Provider>
    //     );
    //     const usernameInput = screen.getByPlaceholderText('Username');
    //     const passwordInput = screen.getByPlaceholderText('Password');
    //     const loginButton = screen.getByText('Login');
    //
    //     fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    //     fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    //
    //     fireEvent.click(loginButton);
    //
    //     // You might want to add assertions here based on your logic after submission,
    //     // for example, checking if the form was submitted correctly.
    // });
});