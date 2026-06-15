import { renderHook } from "@testing-library/react";
import { useBookDetails } from "../src/hooks/useBookDetails";

describe("Test Booklist Details", () => {
  test("Lese Details von einem Buch", () => {
    const { result } = renderHook(() => useBookDetails("978-1-60309-452-8"));
    expect(result.current?.author).toBe("Daniel R. Mercer");
  });

  test("Lese Details von einem Buch", () => {
    const { result } = renderHook(() => useBookDetails("978-1-4028-9462-1"));
    expect(result.current?.author).toBe("L. M. Harrow");
});
test("Lese Details von einem Buch", () => {
    const { result } = renderHook(() => useBookDetails("978-0-553-21311-7"));
    expect(result.current?.author).toBe("Aisha K. Bennett");
});
});