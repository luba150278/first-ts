const world = 'world';

interface IProps {
  who: string;
  func(a: number, b: number): number;
  how?: 3;
}
const func = (a: number, b: number): number => {
  return a + b;
};
const props: IProps = {
  who: 'world',
  func,
};

function hello(props: IProps): string {
  const res = props.func(6, 7);
  return `Hello ${props.who}! ${props.how} times, result: ${res} `;
}

console.log(hello(props));
