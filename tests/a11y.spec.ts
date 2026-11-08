import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { routes } from './routes';

/**
 * WCAG 2.2 AA on every page, in both themes, at desktop and mobile sizes
 * (the two Playwright projects). A failure lists each rule and how many
 * elements broke it; run `npx playwright show-report` for details.
 */
const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

for (const colorScheme of ['light', 'dark'] as const) {
  test.describe(`${colorScheme} theme`, () => {
    test.use({ colorScheme });

    for (const route of [...routes, '/this-page-does-not-exist/']) {
      test(`${route} meets WCAG 2.2 AA`, async ({ page }) => {
        await page.emulateMedia({ colorScheme, reducedMotion: 'reduce' });
        await page.goto(route);

        const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();
        const summary = results.violations.map(
          (v) => `${v.id} (${v.impact}): ${v.help} — ${v.nodes.length} element(s): ${v.nodes
            .slice(0, 3)
            .map((n) => n.target.join(' '))
            .join(' | ')}`,
        );

        expect(summary, `Accessibility violations on ${route}`).toEqual([]);
      });
    }
  });
}
