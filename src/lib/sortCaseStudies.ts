/** Sort case studies by `order` (ascending) or by `date` (newest first, undated last, ties by `order`). */
export type CaseStudySort = 'order' | 'date';

type Sortable = { data: { order: number; date?: Date } };

export function sortCaseStudies<T extends Sortable>(items: T[], by: CaseStudySort = 'order'): T[] {
  const byOrder = (a: T, b: T) => a.data.order - b.data.order;
  const time = (s: T) => s.data.date?.getTime() ?? -Infinity;
  return [...items].sort(by === 'date' ? (a, b) => time(b) - time(a) || byOrder(a, b) : byOrder);
}
