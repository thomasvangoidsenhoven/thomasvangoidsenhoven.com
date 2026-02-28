import { test, expect } from '@playwright/test';

test.describe('Availability badge (issue #4)', () => {
	test('badge is visible when PUBLIC_AVAILABLE_FOR_OPPORTUNITIES=true', async ({ page }) => {
		await page.goto('/');

		const badge = page.locator('text=Available for new opportunities');
		await expect(badge).toBeVisible();

		// Verify the green pulse indicator is present
		const pulseIndicator = badge.locator('..').locator('span.animate-pulse');
		await expect(pulseIndicator).toBeVisible();
	});

	test('hero section renders correctly with badge', async ({ page }) => {
		await page.goto('/');

		// Badge text should be inside a span with the expected font-mono class
		const badgeText = page.locator('span.font-mono', { hasText: 'Available for new opportunities' });
		await expect(badgeText).toBeVisible();

		// Main heading should still render
		await expect(page.locator('h1')).toContainText('Thomas');
		await expect(page.locator('h1')).toContainText('Vangoidsenhoven');

		// CTA buttons should be present
		await expect(page.getByRole('link', { name: 'Get in Touch' })).toBeVisible();
		await expect(page.getByRole('link', { name: 'View Projects' })).toBeVisible();
	});
});
