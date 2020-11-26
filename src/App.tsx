import React from 'react';
import CounterHook from './components/CounterHook';
import EffectHook from './components/EffectHook';
import CallbackHook from './components/CallbackHook';

const App: React.FC = () => {
  return (
    <>
      <CounterHook />
      <EffectHook />
      <CallbackHook />
    </>
  )
}

export default App;
