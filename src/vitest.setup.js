
import { vi } from 'vitest';

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

    // Mock implementation for QueryClient
    const queryClient = new actual.QueryClient();

    // Mock implementation for QueryClientProvider
    const QueryClientProvider = ({ children }) => (
        <actual.QueryClientProvider client={queryClient}>
            {children}
        </actual.QueryClientProvider>
    );

    return {
        ...actual,
        QueryClient,
        QueryClientProvider,
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
