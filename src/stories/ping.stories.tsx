import React from 'react';

export default {
  title: 'Debug/Ping',
};

export const Ping = () => {
  // eslint-disable-next-line no-console
  console.log('[Storybook] Ping story rendered');
  return (
    <div style={{ padding: 40, fontSize: 18 }}>
      Storybook ping — rendering works
    </div>
  );
};
