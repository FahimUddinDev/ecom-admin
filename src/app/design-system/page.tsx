"use client";

import { Alert } from "@/design-system/components/alert/alert";
import { Avatar } from "@/design-system/components/avatar/avatar";
import { Badge } from "@/design-system/components/badge/badge";
import { Breadcrumb } from "@/design-system/components/breadcrumb/breadcrumb";
import { Button } from "@/design-system/components/button";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  StatCard,
} from "@/design-system/components/card/card";
import { Checkbox } from "@/design-system/components/checkbox/checkbox";
import { Drawer } from "@/design-system/components/drawer/drawer";
import { Input } from "@/design-system/components/input/input";
import { Textarea } from "@/design-system/components/input/textarea";
import { Modal } from "@/design-system/components/modal/modal";
import { Radio, RadioGroup } from "@/design-system/components/radio/radio";
import { Skeleton } from "@/design-system/components/skeleton/skeleton";
import { Spinner } from "@/design-system/components/spinner/spinner";
import { Switch } from "@/design-system/components/switch/switch";
import { Tabs } from "@/design-system/components/tabs/tabs";
import { Tag } from "@/design-system/components/tag/tag";
import { Tooltip } from "@/design-system/components/tooltip/tooltip";
import React, { useState } from "react";

/* ── Helpers ───────────────────────────────────────────────────── */
const Section = ({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id: string;
}) => (
  <section id={id} className="scroll-mt-24 flex flex-col gap-6">
    <h2 className="text-h4 font-bold text-[var(--ds-text-headline)] border-b border-[var(--ds-border)] pb-3">
      {title}
    </h2>
    {children}
  </section>
);

const row = "flex flex-wrap items-center gap-3";
const col = "flex flex-col gap-3";

/* ── Palette swatch ────────────────────────────────────────────── */
const swatches: { label: string; bg: string; text?: string }[] = [
  { label: "primary", bg: "bg-primary", text: "text-white" },
  { label: "primary-light", bg: "bg-[var(--ds-primary-light)]" },
  { label: "secondary", bg: "bg-secondary", text: "text-white" },
  { label: "success", bg: "bg-success", text: "text-white" },
  { label: "warning", bg: "bg-warning", text: "text-white" },
  { label: "danger", bg: "bg-danger", text: "text-white" },
  { label: "info", bg: "bg-info", text: "text-white" },
  { label: "bg", bg: "bg-[var(--ds-bg)] border border-[var(--ds-border)]" },
  {
    label: "bg-soft",
    bg: "bg-[var(--ds-bg-soft)] border border-[var(--ds-border)]",
  },
  {
    label: "bg-subtle",
    bg: "bg-[var(--ds-bg-subtle)] border border-[var(--ds-border)]",
  },
  {
    label: "bg-muted",
    bg: "bg-[var(--ds-bg-muted)] border border-[var(--ds-border)]",
  },
  { label: "headline", bg: "bg-[var(--ds-text-headline)]", text: "text-white" },
  { label: "subtitle", bg: "bg-[var(--ds-text-subtitle)]", text: "text-white" },
  {
    label: "paragraph",
    bg: "bg-[var(--ds-text-paragraph)]",
    text: "text-white",
  },
  { label: "caption", bg: "bg-[var(--ds-text-caption)]", text: "text-white" },
];

/* ════════════════════════════════════════════════════════════════ */
export default function DesignSystemPage() {
  const [dark, setDark] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [drawerOpen, setDrawer] = useState(false);
  const [radioVal, setRadioVal] = useState("a");
  const [checked, setChecked] = useState(false);
  const [toggled, setToggled] = useState(false);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
  };

  return (
    <div className="min-h-screen bg-[var(--ds-bg)] transition-colors duration-300">
      {/* ── Top nav ── */}
      <header className="sticky top-0 z-sticky bg-[var(--ds-bg-soft)] border-b border-[var(--ds-border)] shadow-[var(--ds-shadow-sm)]">
        <div className="container-admin flex items-center justify-between h-16 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
              DS
            </div>
            <span className="font-semibold text-[var(--ds-text-headline)] text-base">
              Admin Design System
            </span>
            <Badge variant="primary" size="sm">
              v1.0
            </Badge>
          </div>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            {[
              "colors",
              "typography",
              "buttons",
              "forms",
              "feedback",
              "layout",
              "overlays",
            ].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="px-3 py-1.5 rounded-md text-[var(--ds-text-paragraph)] hover:text-primary hover:bg-[var(--ds-primary-light)] capitalize transition-colors"
              >
                {s}
              </a>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {dark ? "☀ Light" : "☾ Dark"}
          </Button>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="container-admin py-12 flex flex-col gap-16">
        {/* ── Hero ── */}
        <div className="text-center flex flex-col items-center gap-4 py-8">
          <Badge variant="primary" dot>
            Ecommerce Admin
          </Badge>
          <h1 className="text-h1 font-bold text-[var(--ds-text-headline)]">
            Design System
          </h1>
          <p className="text-lg text-[var(--ds-text-paragraph)] max-w-2xl">
            A complete, themeable component library built with Ant Design v6,
            Tailwind CSS v4, and CVA. Toggle dark mode with the button above.
          </p>
          <Breadcrumb
            items={[{ label: "Admin", href: "/" }, { label: "Design System" }]}
          />
        </div>

        {/* ══ COLORS ══════════════════════════════════════════════ */}
        <Section title="Colors" id="colors">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {swatches.map(
              ({ label, bg, text = "text-[var(--ds-text-headline)]" }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <div className={`rounded-xl h-16 w-full ${bg}`} />
                  <span className="text-xs font-mono text-[var(--ds-text-caption)]">
                    {label}
                  </span>
                </div>
              ),
            )}
          </div>
        </Section>

        {/* ══ TYPOGRAPHY ══════════════════════════════════════════ */}
        <Section title="Typography" id="typography">
          <Card>
            <CardBody>
              <div className={col}>
                <div>
                  <p className="text-xs font-mono text-[var(--ds-text-caption)] mb-1">
                    H1 — 32–56px fluid
                  </p>
                  <h1 className="text-h1 font-bold text-[var(--ds-text-headline)] leading-tight">
                    Heading One
                  </h1>
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--ds-text-caption)] mb-1">
                    H2 — 28–42px fluid
                  </p>
                  <h2 className="text-h2 font-bold text-[var(--ds-text-headline)] leading-tight">
                    Heading Two
                  </h2>
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--ds-text-caption)] mb-1">
                    H3 — 22–32px fluid
                  </p>
                  <h3 className="text-h3 font-bold text-[var(--ds-text-headline)]">
                    Heading Three
                  </h3>
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--ds-text-caption)] mb-1">
                    H4 — subtitle
                  </p>
                  <h4 className="text-h4 font-semibold text-[var(--ds-text-subtitle)]">
                    Heading Four
                  </h4>
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--ds-text-caption)] mb-1">
                    Body — 16px
                  </p>
                  <p className="text-base text-[var(--ds-text-paragraph)] leading-relaxed">
                    The quick brown fox jumps over the lazy dog. Used for all
                    body content, descriptions, and paragraph text throughout
                    the admin interface.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--ds-text-caption)] mb-1">
                    Small — 14px
                  </p>
                  <p className="text-sm text-[var(--ds-text-paragraph)]">
                    Small text for helper messages, form hints, and secondary
                    information.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--ds-text-caption)] mb-1">
                    Caption — 12px
                  </p>
                  <p className="text-xs text-[var(--ds-text-caption)]">
                    Caption text for metadata, timestamps, and labels. Use
                    sparingly.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--ds-text-caption)] mb-1">
                    Code
                  </p>
                  <code className="font-mono text-sm bg-[var(--ds-bg-muted)] px-2 py-1 rounded-md">
                    const ds = new DesignSystem()
                  </code>
                </div>
              </div>
            </CardBody>
          </Card>
        </Section>

        {/* ══ BUTTONS ═════════════════════════════════════════════ */}
        <Section title="Buttons" id="buttons">
          <Card>
            <CardHeader title="Variants" subtitle="All 8 button variants" />
            <CardBody>
              <div className={col}>
                <div className={row}>
                  {(
                    [
                      "primary",
                      "secondary",
                      "outline",
                      "ghost",
                      "danger",
                      "danger-outline",
                      "arrow",
                      "card",
                    ] as const
                  ).map((v) => (
                    <Button key={v} variant={v}>
                      {v}
                    </Button>
                  ))}
                </div>
                <div className={row}>
                  <span className="text-xs text-[var(--ds-text-caption)] w-12">
                    Sizes
                  </span>
                  {(["xs", "sm", "md", "lg", "xl"] as const).map((s) => (
                    <Button key={s} size={s}>
                      Size {s}
                    </Button>
                  ))}
                </div>
                <div className={row}>
                  <Button disabled>Disabled</Button>
                  <Button size="icon" aria-label="Settings">
                    ⚙
                  </Button>
                  <Button fullWidth>Full Width</Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Section>

        {/* ══ FORMS ═══════════════════════════════════════════════ */}
        <Section title="Forms" id="forms">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader title="Input" />
              <CardBody>
                <div className={col}>
                  <Input label="Full name" placeholder="John Doe" required />
                  <Input
                    label="Email"
                    placeholder="you@email.com"
                    prefixIcon="✉"
                  />
                  <Input label="Password" type="password" suffixIcon="👁" />
                  <Input
                    label="With error"
                    errorText="This field is required"
                    value=""
                    onChange={() => {}}
                  />
                  <Input
                    label="Success state"
                    state="success"
                    helperText="Looks good!"
                    defaultValue="valid@email.com"
                  />
                  <Input label="Disabled" disabled placeholder="Can't edit" />
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader title="Textarea & Controls" />
              <CardBody>
                <div className={col}>
                  <Textarea
                    label="Message"
                    placeholder="Write something…"
                    rows={3}
                  />
                  <Switch
                    label="Email notifications"
                    description="Receive updates via email"
                    checked={toggled}
                    onChange={(v) => setToggled(v)}
                  />
                  <Checkbox
                    label="I agree to the terms"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                  <RadioGroup
                    label="Plan"
                    value={radioVal}
                    onChange={(e) => setRadioVal(e.target.value)}
                    direction="horizontal"
                  >
                    {[
                      { value: "a", label: "Starter" },
                      { value: "b", label: "Pro" },
                      { value: "c", label: "Enterprise" },
                    ].map((o) => (
                      <Radio key={o.value} value={o.value}>
                        {o.label}
                      </Radio>
                    ))}
                  </RadioGroup>
                </div>
              </CardBody>
            </Card>
          </div>
        </Section>

        {/* ══ FEEDBACK ════════════════════════════════════════════ */}
        <Section title="Feedback & Display" id="feedback">
          {/* Badges */}
          <Card>
            <CardHeader title="Badges" />
            <CardBody>
              <div className={col}>
                <div className={row}>
                  {(
                    [
                      "primary",
                      "success",
                      "warning",
                      "danger",
                      "info",
                      "neutral",
                      "dark",
                    ] as const
                  ).map((v) => (
                    <Badge key={v} variant={v}>
                      {v}
                    </Badge>
                  ))}
                </div>
                <div className={row}>
                  {(["sm", "md", "lg"] as const).map((s) => (
                    <Badge key={s} size={s}>
                      Size {s}
                    </Badge>
                  ))}
                  <Badge dot>With dot</Badge>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader title="Tags" />
            <CardBody>
              <div className={row}>
                {(
                  [
                    "primary",
                    "success",
                    "warning",
                    "danger",
                    "info",
                    "neutral",
                  ] as const
                ).map((c) => (
                  <Tag key={c} dsColor={c} closable>
                    {c}
                  </Tag>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Avatars */}
          <Card>
            <CardHeader title="Avatars" />
            <CardBody>
              <div className={col}>
                <div className={row}>
                  {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((s) => (
                    <Avatar key={s} size={s} alt="Faysal Mahamud" />
                  ))}
                </div>
                <div className={row}>
                  <Avatar alt="John" status="online" />
                  <Avatar alt="Jane" status="busy" />
                  <Avatar alt="Bob" status="away" />
                  <Avatar alt="Ann" status="offline" />
                  <Avatar alt="Square" shape="square" />
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Alerts */}
          <Card>
            <CardHeader title="Alerts" />
            <CardBody>
              <div className={col}>
                <Alert
                  variant="info"
                  title="Informational"
                  description="This is an informational alert with a title."
                />
                <Alert
                  variant="success"
                  title="Success!"
                  description="Your changes have been saved successfully."
                  dismissible
                />
                <Alert
                  variant="warning"
                  title="Warning"
                  description="Please review your data before continuing."
                />
                <Alert
                  variant="danger"
                  title="Error"
                  description="Something went wrong. Please try again."
                  dismissible
                />
                <Alert
                  variant="neutral"
                  description="A neutral message with no special status."
                />
              </div>
            </CardBody>
          </Card>

          {/* Spinner + Skeleton */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader title="Spinners" />
              <CardBody>
                <div className={row}>
                  {(["xs", "sm", "md", "lg", "xl"] as const).map((s) => (
                    <Spinner key={s} size={s} />
                  ))}
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader title="Skeletons" />
              <CardBody>
                <div className={col}>
                  <Skeleton variant="text" lines={3} />
                  <div className={row}>
                    <Skeleton variant="circle" width={40} height={40} />
                    <Skeleton variant="block" width={200} height={16} rounded />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Skeleton card */}
          <Skeleton variant="card" />
        </Section>

        {/* ══ LAYOUT / CARDS ══════════════════════════════════════ */}
        <Section title="Layout & Cards" id="layout">
          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total Orders"
              value="12,847"
              change={+8.2}
              icon="📦"
              iconColor="primary"
            />
            <StatCard
              title="Revenue"
              value="$42.5k"
              change={+14.1}
              icon="💰"
              iconColor="success"
            />
            <StatCard
              title="Pending"
              value="384"
              change={-2.3}
              icon="⏳"
              iconColor="warning"
            />
            <StatCard
              title="Refunds"
              value="27"
              change={-5.1}
              icon="↩"
              iconColor="danger"
            />
          </div>

          {/* Full card anatomy */}
          <Card hoverable>
            <CardHeader
              title="Card with all slots"
              subtitle="Header subtitle text"
              action={<Button size="sm">Action</Button>}
            />
            <CardBody>
              <p className="text-[var(--ds-text-paragraph)]">
                This is the card body. It can contain any content, forms,
                tables, or other components.
              </p>
            </CardBody>
            <CardFooter align="between">
              <span className="text-sm text-[var(--ds-text-caption)]">
                Last updated 2 hours ago
              </span>
              <div className={row}>
                <Button variant="ghost" size="sm">
                  Cancel
                </Button>
                <Button size="sm">Save</Button>
              </div>
            </CardFooter>
          </Card>

          {/* Tabs */}
          <Card>
            <CardBody>
              <Tabs
                items={[
                  {
                    key: "overview",
                    label: "Overview",
                    children: (
                      <p className="text-[var(--ds-text-paragraph)] py-4">
                        Overview tab content goes here.
                      </p>
                    ),
                  },
                  {
                    key: "analytics",
                    label: "Analytics",
                    children: (
                      <p className="text-[var(--ds-text-paragraph)] py-4">
                        Analytics and reporting content.
                      </p>
                    ),
                  },
                  {
                    key: "settings",
                    label: "Settings",
                    children: (
                      <p className="text-[var(--ds-text-paragraph)] py-4">
                        Settings and configuration.
                      </p>
                    ),
                  },
                  {
                    key: "disabled",
                    label: "Disabled",
                    disabled: true,
                    children: null,
                  },
                ]}
              />
            </CardBody>
          </Card>
        </Section>

        {/* ══ OVERLAYS ════════════════════════════════════════════ */}
        <Section title="Overlays" id="overlays">
          <Card>
            <CardHeader title="Tooltip, Modal & Drawer" />
            <CardBody>
              <div className={row}>
                <Tooltip content="Helpful context tooltip" placement="top">
                  <Button variant="outline">Hover for Tooltip</Button>
                </Tooltip>

                <Button onClick={() => setModal(true)}>Open Modal</Button>
                <Button variant="secondary" onClick={() => setDrawer(true)}>
                  Open Drawer
                </Button>
              </div>
            </CardBody>
          </Card>
        </Section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[var(--ds-border)] mt-16 py-8 text-center text-sm text-[var(--ds-text-caption)]">
        Ecommerce Admin Design System · Built with Ant Design v6 · Tailwind CSS
        v4 · CVA
      </footer>

      {/* ── Modal ── */}
      <Modal
        open={modalOpen}
        onCancel={() => setModal(false)}
        onOk={() => setModal(false)}
        title="Confirm Action"
        subtitle="Please review before proceeding"
        okText="Confirm"
      >
        <div className="flex flex-col gap-4 py-2">
          <Alert
            variant="warning"
            description="This action cannot be undone."
          />
          <Input label="Reason for change" placeholder="Enter a reason…" />
        </div>
      </Modal>

      {/* ── Drawer ── */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawer(false)}
        title="Notification Settings"
        subtitle="Manage how you receive alerts"
      >
        <div className="flex flex-col gap-5 pt-2">
          <Switch
            label="Email notifications"
            description="Get notified via email"
            checked
          />
          <Switch
            label="Push notifications"
            description="Browser push alerts"
          />
          <Switch label="SMS alerts" description="Text message alerts" />
          <Switch
            label="Marketing emails"
            description="Product updates and news"
            checked
          />
          <div className="pt-4 border-t border-[var(--ds-border)] flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setDrawer(false)}>
              Cancel
            </Button>
            <Button onClick={() => setDrawer(false)}>Save Preferences</Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
