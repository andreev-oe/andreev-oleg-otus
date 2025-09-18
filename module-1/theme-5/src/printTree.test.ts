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
  test('Простое дерево с 2 уровнями глубины', () => {
    expect(printTree(dataSample1)).toBe(expectedOutput1);
  })
  test('Дерево с 3 уровнями глубины', () => {
    expect(printTree(dataSample2)).toBe(expectedOutput2);
  })
  test('Глубокое дерево с 4 уровнями', () => {
    expect(printTree(dataSample3)).toBe(expectedOutput3);
  })
  test('Дерево с одним корневым элементом', () => {
    expect(printTree(dataSample4)).toBe(expectedOutput4);
  })
  test('Сложное дерево с разветвленной структурой', () => {
    expect(printTree(dataSample5)).toBe(expectedOutput5);
  })
})

