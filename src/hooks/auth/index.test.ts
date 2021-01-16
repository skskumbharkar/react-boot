import { act, renderHook } from '@testing-library/react-hooks';
import { useAuth } from './index';

test('should use auth', () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.user).toBe('');
    expect(typeof result.current.signIn).toBe('function');
});

test('should sign in user', async () => {
    const { result } = renderHook(() => useAuth());
    await act(() => result.current.signIn());
    expect(result.current.user).toBe('user');
});

test('should sign out user', async () => {
    const { result } = renderHook(() => useAuth());
    await act(() => result.current.signOut());
    expect(result.current.user).toBe('');
});
