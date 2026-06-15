import { renderHook } from "@testing-library/react";
import { useLocalStorage } from '../src/hooks/useLocalStorage';
import { act } from "react";


describe('Localstorage testing',()=>{
    beforeEach(()=>{
        localStorage.clear()
    });
    test('intialwert lesen wenn nicht gespeichert ist',()=>{
        const {result} = renderHook(()=>useLocalStorage('testkey', 'Default'));
        expect(result.current[0]).toBe('Default')
    });

     test('intialwert lesen wenn nicht gespeichert ist',()=>{
        const {result} = renderHook(()=>useLocalStorage<string[]>('testkey', ['Default','Default2']));
        expect(result.current[0][0]).toBe('Default')
        expect(result.current[0][1]).toBe('Default2')
    });
    test('test speichern werte im localstorage',()=>{
        const {result} = renderHook(()=>useLocalStorage('testKey','Default'));
        act(()=>{
            result.current[1]('NewValue')
        });
        expect(result.current[0]).toBe('NewValue');
        expect(localStorage.getItem("testKey")).toBe(JSON.stringify("NewValue"));
    })
})