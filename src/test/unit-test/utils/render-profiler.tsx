import { render } from "@testing-library/react";
import React from "react";

type RenderProfileOptions<P extends object | undefined = undefined> = {
  maxTimeMs?: number;
  maxRenders?: 3;
  props?: P;
  wrapper?: React.ComponentType<{ children: React.ReactNode }>;
};

export function testRenderProfile<P extends object | undefined = undefined>(
  Component: React.ComponentType<P>,
  options: RenderProfileOptions<P> = {},
) {
  const { maxTimeMs = 50, maxRenders = 3, props, wrapper } = options;

  test(`Render profile for ${Component.name}`, () => {
    let renderCount = 0;

    const CounterWrapper: React.FC<{ [key: string]: unknown }> = (p) => {
      renderCount++;
      return React.createElement(
        Component as React.ComponentType<unknown>,
        p as P,
      );
    };

    const normalizedProps: { [key: string]: unknown } = (props ?? {}) as {
      [key: string]: unknown;
    };

    const element = React.createElement(
      (wrapper ?? React.Fragment) as React.ComponentType<{
        children?: React.ReactNode;
      }>,
      null,
      React.createElement(CounterWrapper, normalizedProps),
    );

    const start = performance.now();
    render(element);
    const end = performance.now();

    const renderTime = end - start;

    console.log({
      component: Component.name,
      renders: renderCount,
      timeMs: renderTime,
    });

    expect(renderCount).toBeLessThan(maxRenders);
    expect(renderTime).toBeLessThan(maxTimeMs);
  });
}
