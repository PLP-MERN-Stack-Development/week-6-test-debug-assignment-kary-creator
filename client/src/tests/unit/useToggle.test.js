import { renderHook, act } from '@testing-library/react';
import { useToggle } from '../../hooks/useToggle';

describe('useToggle hook', () => {
  it('should toggle value between true and false', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
    act(() => result.current[1]());
    expect(result.current[0]).toBe(true);
    act(() => result.current[1]());
    expect(result.current[0]).toBe(false);
  });

  it('should accept an initial value', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toBe(true);
  });
}); 