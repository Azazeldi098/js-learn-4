"use strict";

// 1. Сумма чисел
function sumArray(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

// 2. Уникальные значения
function uniqueValues(values) {
  const result = [];

  for (const value of values) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }

  return result;
}

// 3. Минимум и максимум
function minMax(numbers) {
  let min = numbers[0];
  let max = numbers[0];

  for (const number of numbers) {
    if (number < min) {
      min = number;
    }

    if (number > max) {
      max = number;
    }
  }

  return [min, max];
}

// 4. Сокращение текста
function shortenText(text, maxWords) {
  const words = text.trim().split(" ");

  if (words.length <= maxWords) {
    return text.trim();
  }

  const part = words.slice(0, maxWords).join(" ");

  if (part.endsWith(".")) {
    return part + "..";
  }

  return part + "...";
}

// 5. Поменять части местами
function swapParts(text) {
  const space = text.indexOf(" ");

  const first = text.slice(0, space);
  const second = text.slice(space + 1);

  return second + " " + first;
}

// 6. Разобрать URL
function parseUrlParts(url) {
  const protocolEnd = url.indexOf("://");
  const domainEnd = url.indexOf("/", protocolEnd + 3);
  const queryStart = url.indexOf("?", domainEnd);

  const protocol = url.slice(0, protocolEnd);
  const domain = url.slice(protocolEnd + 3, domainEnd);
  const uri = url.slice(domainEnd, queryStart);
  const query = url.slice(queryStart + 1);

  return [protocol, domain, uri, query];
}

module.exports = {
  sumArray,
  uniqueValues,
  minMax,
  shortenText,
  swapParts,
  parseUrlParts,
};