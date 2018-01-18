import { PagesPipe } from './pages.pipe';

describe('PagesPipe', () => {
  it('create an instance', () => {
    const pipe = new PagesPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return `hans: peter`', () => {
    const pipe = new PagesPipe();
    expect(pipe.transform('peter', 'hans')).toBe('hans: peter');
  });
  it('should return `S.: 123`', () => {
    const pipe = new PagesPipe();
    expect(pipe.transform('123')).toBe('S.: 123');
  });
});
