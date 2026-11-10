import { expect, test } from '@playwright/test';
import { sortCaseStudies } from '../src/lib/sortCaseStudies';

const study = (id: string, order: number, date?: string) => ({ id, data: { order, date: date ? new Date(date) : undefined } });
const items = [study('a', 1, '2020-01-01'), study('b', 2), study('c', 3, '2024-06-01'), study('d', 4)];
const ids = (list: typeof items) => list.map((s) => s.id);

test('case studies sort by order', () => {
  expect(ids(sortCaseStudies([...items].reverse()))).toEqual(['a', 'b', 'c', 'd']);
});

test('case studies sort by date, newest first, undated last by order', () => {
  expect(ids(sortCaseStudies(items, 'date'))).toEqual(['c', 'a', 'b', 'd']);
});
