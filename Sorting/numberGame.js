/**
 * Название: Number Game (Simulated Turn-Based Game)
 * Условие: Дан массив чисел. Играют два игрока, поочерёдно выбирают наименьший оставшийся элемент.
 *         Алгоритм должен вернуть массив, в котором ходы игроков представлены в виде чередующихся элементов.
 *         Первым ходит первый игрок.
 * Пример:
 *   Ввод: [5, 3, 6, 1]
 *   Вывод: [1, 3, 5, 6] (очередность выбора: игрок 1 берёт 1, игрок 2 берёт 3, игрок 1 берёт 5, игрок 2 берёт 6)
 */

const numberGame = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    let minIndex = i;

    for (let j = i; j < numbers.length; j++) {
      if (numbers[j] < numbers[minIndex]) {
        minIndex = j;
      }
    }

    [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];

    if (i % 2 === 1) {
      [numbers[i], numbers[i - 1]] = [numbers[i - 1], numbers[i]];
    }
  }

  return numbers;
};

const number = numberGame([5, 3, 6, 1]);

console.log(number);
