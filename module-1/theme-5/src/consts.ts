import type { TNode } from './types';

export const treeElement = {
  single: '└',
  multiple: '├',
  path: '──',
  delimiter: '│',
  space3: '   ',
  space1: ' ',
};

// Пример 1: Простое дерево с 2 уровнями глубины
export const dataSample1: TNode = {
  name: 1,
  items: [
    {
      name: 2,
      items: [{ name: 3 }, { name: 4 }]
    },
    {
      name: 5
    }
  ]
};

export const expectedOutput1 =
  `└── 1
    ├── 2
    │   ├── 3
    │   └── 4
    └── 5
`;

// Пример 2: Дерево с 3 уровнями глубины
export const dataSample2: TNode = {
  name: 'Root',
  items: [
    {
      name: 'Folder A',
      items: [
        {
          name: 'Subfolder A1',
          items: [{ name: 'File A1-1' }, { name: 'File A1-2' }]
        },
        { name: 'File A2' }
      ]
    },
    {
      name: 'Folder B',
      items: [{ name: 'File B1' }]
    }
  ]
};

export const expectedOutput2 =
  `└── Root
    ├── Folder A
    │   ├── Subfolder A1
    │   │   ├── File A1-1
    │   │   └── File A1-2
    │   └── File A2
    └── Folder B
        └── File B1
`;

// Пример 3: Глубокое дерево с 4 уровнями
export const dataSample3: TNode = {
  name: 'Level 1',
  items: [
    {
      name: 'Level 2-A',
      items: [
        {
          name: 'Level 3-A1',
          items: [
            {
              name: 'Level 4-A1',
              items: [{ name: 'Leaf A1' }, { name: 'Leaf A2' }]
            }
          ]
        }
      ]
    },
    {
      name: 'Level 2-B',
      items: [{ name: 'Level 3-B1' }]
    }
  ]
};

export const expectedOutput3 =
  `└── Level 1
    ├── Level 2-A
    │   └── Level 3-A1
    │       └── Level 4-A1
    │           ├── Leaf A1
    │           └── Leaf A2
    └── Level 2-B
        └── Level 3-B1
`;

// Пример 4: Дерево с одним корневым элементом
export const dataSample4: TNode = {
  name: 'Single Node'
};

export const expectedOutput4 =
  `└── Single Node
`;

// Пример 5: Сложное дерево с разветвленной структурой
export const dataSample5: TNode = {
  name: 'Project',
  items: [
    {
      name: 'src',
      items: [
        {
          name: 'components',
          items: [
            { name: 'Button.tsx' },
            { name: 'Input.tsx' },
            {
              name: 'utils',
              items: [{ name: 'helpers.ts' }]
            }
          ]
        },
        { name: 'App.tsx' },
        { name: 'index.ts' }
      ]
    },
    {
      name: 'public',
      items: [{ name: 'index.html' }, { name: 'favicon.ico' }]
    },
    { name: 'package.json' }
  ]
};

export const expectedOutput5 =
  `└── Project
    ├── src
    │   ├── components
    │   │   ├── Button.tsx
    │   │   ├── Input.tsx
    │   │   └── utils
    │   │       └── helpers.ts
    │   ├── App.tsx
    │   └── index.ts
    ├── public
    │   ├── index.html
    │   └── favicon.ico
    └── package.json
`;
