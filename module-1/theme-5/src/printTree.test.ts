import { printTree } from './printTree';
import {
  dataSample1,
  dataSample2,
  dataSample3,
  dataSample4,
  dataSample5,
  expectedOutput1,
  expectedOutput2,
  expectedOutput3,
  expectedOutput4,
  expectedOutput5,
} from './consts';


describe('Тест функции отображения дерева', () => {
  test('Вариант 1', () => {
    expect(printTree(dataSample1)).toBe(expectedOutput1);
  })
  test('Вариант 2', () => {
    expect(printTree(dataSample2)).toBe(expectedOutput2);
  })
  test('Вариант 3', () => {
    expect(printTree(dataSample3)).toBe(expectedOutput3);
  })
  test('Вариант 4', () => {
    expect(printTree(dataSample4)).toBe(expectedOutput4);
  })
  test('Вариант 5', () => {
    expect(printTree(dataSample5)).toBe(expectedOutput5);
  })
})

