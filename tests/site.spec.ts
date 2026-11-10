import { expect, test } from '@playwright/test';
import { routes } from './routes';

test.describe('theme', () => {
  test('follows the system setting when nothing is saved', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');
    await expect(page.locator('html')).not.toHaveAttribute('data-theme');
    await expect(page.getByRole('button', { name: 'Dark theme' })).toHaveAttribute('aria-pressed', 'true');
  });

  test('toggle switches theme and remembers it', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');
    const toggle = page.getByRole('button', { name: 'Dark theme' });
    await expect(toggle).toHaveAttribute('aria-pressed', 'false');

    await toggle.click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');

    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });
});

test.describe('keyboard', () => {
  test('skip link is the first stop and jumps to the main content', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name: 'Skip to content' });
    await expect(skip).toBeFocused();
    await expect(skip).toBeVisible();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#main$/);
    // The next Tab must land inside the main content, not back in the header.
    await page.keyboard.press('Tab');
    await expect(page.locator('main :focus')).toHaveCount(1);
  });
});

test.describe('content', () => {
  test('the Work and Tools pages list every case study and tool', async ({ page }) => {
    for (const section of ['/work/', '/tools/']) {
      await page.goto(section);
      for (const href of routes.filter((r) => r.startsWith(section) && r !== section)) {
        await expect(page.locator(`a[href="${href}"]`).first()).toBeAttached();
      }
    }
  });

  test('every page has one h1 and a unique title', async ({ page }) => {
    const titles = new Set<string>();
    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator('h1')).toHaveCount(1);
      const title = await page.title();
      expect(titles.has(title), `duplicate <title> on ${route}`).toBe(false);
      titles.add(title);
    }
  });

  test('internal links resolve', async ({ page, request }) => {
    const seen = new Set<string>();
    for (const route of routes) {
      await page.goto(route);
      const hrefs = await page
        .locator('a[href^="/"]')
        .evaluateAll((links) => links.map((a) => (a as HTMLAnchorElement).getAttribute('href') ?? ''));
      for (const href of hrefs) {
        const path = href.split('#')[0] ?? '';
        // The CV PDF is added to /public separately; skip until it exists.
        if (!path || path.endsWith('.pdf') || seen.has(path)) continue;
        seen.add(path);
        const response = await request.get(path);
        expect(response.status(), `${path} (linked from ${route})`).toBe(200);
      }
    }
  });

  test('unknown pages return the 404 page', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist/');
    expect(response?.status()).toBe(404);
    await expect(page.getByRole('heading', { level: 1, name: 'Page not found' })).toBeVisible();
  });
});

test.describe('navigation', () => {
  test('marks the current section in the main menu', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Main' });

    await page.goto('/work/');
    await expect(nav.getByRole('link', { name: 'Work' })).toHaveAttribute('aria-current', 'page');

    await page.goto('/work/myfstvl/');
    await expect(nav.getByRole('link', { name: 'Work' })).toHaveAttribute('aria-current', 'true');
    await expect(nav.locator('[aria-current]')).toHaveCount(1);

    await page.goto('/tools/viewport-overlay/');
    await expect(nav.getByRole('link', { name: 'Tools' })).toHaveAttribute('aria-current', 'true');

    await page.goto('/');
    await expect(nav.locator('[aria-current]')).toHaveCount(0);
  });
});

test('homepage shows the latest three case studies and links to all of them', async ({ page }) => {
  await page.goto('/');
  const work = page.locator('#work');
  await expect(work.getByRole('listitem')).toHaveCount(3);
  await work.getByRole('link', { name: /See all \d+ case studies/ }).click();
  await expect(page).toHaveURL(/\/work\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText("Problems I've solved");
});
