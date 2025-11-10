import React from "react";
import "../src/components/styles/globals.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {}
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 20 }}>
          <h2 style={{ color: "#b91c1c" }}>Story rendering error</h2>
          <pre style={{ whiteSpace: "pre-wrap", color: "#111" }}>
            {String(this.state.error && this.state.error.stack)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

// Export as named exports for ESM Storybook
export const decorators = [
  (Story) => (
    <ErrorBoundary>
      <Story />
    </ErrorBoundary>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
