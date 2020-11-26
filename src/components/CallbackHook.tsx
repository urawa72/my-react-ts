import React, { useState, useCallback } from 'react';

const CallbackHook = () => {
  const [foo, setFoo] = useState(10);
  const [bar, setBar] = useState(100);

  const incrementFoo = useCallback(() => {
    setFoo(foo + 1);
  }, [foo]);

  const incrementBar = useCallback(() => {
    setBar(bar + 100);
  }, [bar]);

  return (
    <div>
      <Count text="foo" count={foo} />
      <Count text="bar" count={bar} />
      <Button handleClick={incrementFoo}>foo</Button>
      <Button handleClick={incrementBar}>bar</Button>
    </div>
  );
};

type ButtonProps = {
  handleClick: () => void;
  children: string;
}

const Button = React.memo<ButtonProps>(({ handleClick, children }) => {
  console.log(`Button -`, children);
  return <button onClick={handleClick}>{children}</button>;
});

type CountProps = {
  text: string;
  count: number;
}

const Count = React.memo<CountProps>(({ text, count }) => {
  console.log(`Count -`, text);
  return (
    <div>
      {text}: {count}
    </div>
  );
});

export default CallbackHook;
