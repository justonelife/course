import { NameToUrlPipe } from './name-to-url.pipe';

describe('NameToUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new NameToUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
