/**
 * Название: Ransom Note
 * Условие: Даны две строки: ransomNote и magazine.
 *         Нужно определить, можно ли из символов строки magazine собрать строку ransomNote.
 *         Каждый символ из magazine можно использовать только один раз.
 * Пример:
 *   Ввод: ransomNote = "fihjjjjei", magazine = "hjibagacbhadfaefdjaeaebgi"
 *   Вывод: true
 */

const ransomNote = 'fihjjjjei';
const magazine = 'hjibagacbhadfaefdjaeaebgi';

const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const hashTable: Record<string, number> = {};

  if (magazine.length < ransomNote.length) {
    return false;
  }

  for (let i = 0; i < magazine.length; i++) {
    const key = magazine.charAt(i);
    if (!hashTable[key]) {
      hashTable[key] = 1;
    } else {
      hashTable[key]++;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];

    if (hashTable[char]) {
      hashTable[char]--;
    } else {
      return false;
    }
  }

  return true;
};

const could = canConstruct(ransomNote, magazine);

console.log(could);
