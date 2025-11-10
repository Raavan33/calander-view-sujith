import type { Meta, StoryObj } from "@storybook/react";
import { CalendarView } from "./CalendarView";

const meta: Meta<typeof CalendarView> = {
  title: "Components/CalendarView",
  component: CalendarView,
};

export default meta;
type Story = StoryObj<typeof CalendarView>;

export const Default: Story = {};

// Smoke test story: renders a simple element to verify Storybook preview works
export const Smoke: Story = {
  render: () => {
    // Log from the story to help debug whether the story renderer runs in the preview iframe
    // This log appears in the browser console of the Storybook preview iframe.
    // If you don't see it, the preview isn't executing story code.
    // eslint-disable-next-line no-console
    console.log("[Storybook] Smoke story render executed");
    return <div style={{ padding: 20 }}>Storybook smoke test — UI is rendering</div>;
  },
};
