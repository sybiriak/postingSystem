import { CalculatePipe } from './calculate.pipe';

describe('CalculatePipe', () => {
  let pipe: CalculatePipe;

  beforeEach(() => {
    pipe = new CalculatePipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should return "<mark>5</mark>" if value is "2+3"', () => {
      expect(pipe.transform('2+3')).toBe('<mark>5</mark>');
    });

    it('should return "test1 <mark>5</mark> test2" if value is "test1 2+3 test2"', () => {
      expect(pipe.transform('test1 2+3 test2')).toBe('test1 <mark>5</mark> test2');
    });

    it('should return "test1 <mark>-5</mark> test2" if value is "test1 -8+3 test2"', () => {
      expect(pipe.transform('test1 -8+3 test2')).toBe('test1 <mark>-5</mark> test2');
    });

    it('should return "test1 <mark>-5</mark> test2" if value is "test1 -2-3 test2"', () => {
      expect(pipe.transform('test1 -2-3 test2')).toBe('test1 <mark>-5</mark> test2');
    });

    it('should return "test1 <mark>7</mark> test2" if value is "test1 20+3-16 test2"', () => {
      expect(pipe.transform('test1 20+3-16 test2')).toBe('test1 <mark>7</mark> test2');
    });

    it('should return "test1 <mark>7</mark> test2 <mark>7</mark> test3" if value is "test1 20+3-16 test2 2+5 test3"', () => {
      expect(pipe.transform('test1 20+3-16 test2 2+5 test3')).toBe('test1 <mark>7</mark> test2 <mark>7</mark> test3');
    });
  });
});
