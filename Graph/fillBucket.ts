const picture = ['aabba', 'aabba', 'aaacb'];

const calculatePaints = (picture: string[]) => {
  let paints = 0;
  const painted = new Map();
  const cells = new Map();
  let x = 0;
  let y = 0;

  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < picture[i].length; j++) {
      cells.set(`${x}.${y}`, picture[i][j]);
      x++;
    }
    y++;
    x = 0;
  }

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const recursivePaint = (cellKey: string) => {
    if (painted.has(cellKey)) return;

    const [x, y] = cellKey.split('.').map(Number);

    painted.set(cellKey, true);

    directions.forEach(([dx, dy]) => {
      const deltaX = x + dx;
      const deltaY = y + dy;
      const nextCellKey = `${deltaX}.${deltaY}`;

      if (deltaX < 0 || deltaY < 0 || deltaX > picture[0].length || deltaY > picture.length) return;

      if (cells.get(nextCellKey) === cells.get(cellKey)) {
        recursivePaint(nextCellKey);
      }
    });
  };

  for (let key of cells.keys()) {
    if (painted.has(key)) continue;
    recursivePaint(key);
    paints++;
  }

  return paints;
};

const paints = calculatePaints(picture);

console.log(paints);

export {};
