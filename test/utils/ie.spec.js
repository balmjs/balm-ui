import detectIE from '@/utils/ie';

describe('#detectIE()', () => {
  it('should be "false"', () => {
    const ie = detectIE();
    expect(ie).toBe(false);
  });
});
