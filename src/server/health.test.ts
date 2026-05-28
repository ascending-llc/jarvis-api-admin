import { describe, expect, it } from 'vitest';
import { healthResponse } from './health';

describe('healthResponse', () => {
  it('returns 200', () => {
    expect(healthResponse().status).toBe(200);
  });

  it('returns ok status in body', async () => {
    const body = await healthResponse().json();
    expect(body).toEqual({ status: 'ok' });
  });
});
