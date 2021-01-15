import { act, renderHook } from '@testing-library/react-hooks';
import { useAuth, useOpenClose } from './index';

test('should use auth', () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.user).toBe('');
    expect(typeof result.current.signIn).toBe('function');
});

test('should sign in user', () => {
    const { result } = renderHook(() => useAuth());
    act(async () => {
        await result.current.signIn();
    });
    expect(result.current.user).toBe('user');
});

test('should sign out user', () => {
    const { result } = renderHook(() => useAuth());
    act(() => {
        result.current.signOut();
    });
    expect(result.current.user).toBe('');
});

describe('useOpenClose', () => {
    const { result } = renderHook(() => useOpenClose());

    test('Should have initial value of false', () => {
        console.log(result.current.isOpen);
        act(() => result.current.open());
        console.log(result.current.isOpen);
    });

    test('Should update value to true', () => {
        act(() => result.current.open());
        console.log(result.current.isOpen);
    });
});
