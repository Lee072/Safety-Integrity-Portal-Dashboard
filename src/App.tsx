import { useMemo, useState, type ReactNode } from "react";

type IconName =
  | "alert"
  | "arrow"
  | "bell"
  | "check"
  | "chevron"
  | "clipboard"
  | "dashboard"
  | "download"
  | "file"
  | "flag"
  | "help"
  | "menu"
  | "plus"
  | "search"
  | "settings"
  | "shield"
  | "users"
  | "x";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    alert: (
      <>
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
        <path d="M10.3 3.8 2.5 17.3A2 2 0 0 0 4.2 20h15.6a2 2 0 0 0 1.7-2.7L13.7 3.8a2 2 0 0 0-3.4 0Z" />
      </>
    ),
    arrow: <path d="m9 18 6-6-6-6" />,
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clipboard: (
      <>
        <rect width="14" height="16" x="5" y="4" rx="2" />
        <path d="M9 4V2h6v2M9 9h6M9 13h6M9 17h3" />
      </>
    ),
    dashboard: (
      <>
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
      </>
    ),
    flag: (
      <>
        <path d="M5 22V4" />
        <path d="M5 4c6-4 8 4 14 0v10c-6 4-8-4-14 0" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.8 9a2.3 2.3 0 1 1 3.6 1.9c-.9.6-1.4 1-1.4 2.1M12 17h.01" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    x: <path d="M18 6 6 18M6 6l12 12" />,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const concerns = [
  { id: "SC-0284", title: "Unsecured access panel near Line 4", owner: "Maya Chen", due: "Today", risk: "Critical" },
  { id: "SC-0281", title: "Emergency stop test overdue", owner: "Liam Foster", due: "Tomorrow", risk: "High" },
  { id: "SC-0276", title: "Ventilation readings outside target", owner: "Nora Singh", due: "Oct 12", risk: "Medium" },
  { id: "SC-0272", title: "Contractor induction incomplete", owner: "Evan Brooks", due: "Oct 15", risk: "Low" },
];

const assessmentGroups = [
  {
    title: "Safety & risks",
    description: "Core project safeguards",
    questions: [
      "Foreseeable hazards have been identified and documented",
      "Safety requirements are established for this project",
      "An independent person reviewed the safety-critical design",
      "Proposed changes were evaluated for new risks",
      "Schedule pressure has not influenced a safety decision",
    ],
  },
  {
    title: "Design & engineering",
    description: "Technical integrity controls",
    questions: [
      "Design follows approved engineering standards",
      "Code and controls have been reviewed and tested",
      "Safety-critical systems are isolated from non-critical components",
      "All design changes are reviewed and documented",
      "Independent verification and validation is complete",
    ],
  },
  {
    title: "Verification & testing",
    description: "Evidence and sign-off",
    questions: [
      "Test evidence is attached to the project record",
      "Outstanding defects have an owner and target date",
      "Operational readiness review has been completed",
    ],
  },
];

const failureModes = [
  { component: "Emergency stop circuit", mode: "Relay contact fails closed", impact: "Critical", owner: "Maya Chen" },
  { component: "Line 4 access panel", mode: "Interlock does not detect open panel", impact: "High", owner: "Liam Foster" },
  { component: "Ventilation controller", mode: "Sensor signal drifts outside tolerance", impact: "Medium", owner: "Nora Singh" },
  { component: "Backup power supply", mode: "Transfer delay exceeds safe limit", impact: "High", owner: "Evan Brooks" },
];

const teamMembers = [
  { name: "Alex Morgan", initials: "AM", role: "Project owner / manager", discipline: "Leadership", email: "alex.morgan@northstar.dev", phone: "+1 415 555 0124", task: "Approve Gate 3 readiness", status: "Pending", due: "Today", tone: "bg-[#dcebe5] text-[#28584d]" },
  { name: "Priya Shah", initials: "PS", role: "Business analyst", discipline: "Product", email: "priya.shah@northstar.dev", phone: "+1 415 555 0188", task: "Confirm safety requirements", status: "In progress", due: "Today", tone: "bg-[#ece4d7] text-[#795d31]" },
  { name: "Marcus Chen", initials: "MC", role: "Software architect", discipline: "Engineering", email: "marcus.chen@northstar.dev", phone: "+1 415 555 0162", task: "Review isolation architecture", status: "In progress", due: "Oct 14", tone: "bg-[#dce5ef] text-[#385979]" },
  { name: "Sofia Reyes", initials: "SR", role: "Frontend developer", discipline: "Engineering", email: "sofia.reyes@northstar.dev", phone: "+1 415 555 0191", task: "Resolve alert accessibility", status: "Pending", due: "Oct 15", tone: "bg-[#eadff0] text-[#684b78]" },
  { name: "Noah Williams", initials: "NW", role: "Backend developer", discipline: "Engineering", email: "noah.williams@northstar.dev", phone: "+1 415 555 0146", task: "Complete audit event API", status: "In progress", due: "Oct 15", tone: "bg-[#e1e8d6] text-[#53653a]" },
  { name: "Maya Patel", initials: "MP", role: "Full stack developer", discipline: "Engineering", email: "maya.patel@northstar.dev", phone: "+1 415 555 0175", task: "Connect review evidence flow", status: "In progress", due: "Oct 16", tone: "bg-[#f0dfdf] text-[#784949]" },
  { name: "Ethan Brooks", initials: "EB", role: "DevOps engineer", discipline: "Operations", email: "ethan.brooks@northstar.dev", phone: "+1 415 555 0133", task: "Validate failover runbook", status: "Pending", due: "Oct 17", tone: "bg-[#dae9e9] text-[#356263]" },
  { name: "Lena Kim", initials: "LK", role: "UX/UI designer", discipline: "Design", email: "lena.kim@northstar.dev", phone: "+1 415 555 0119", task: "Finalize concern workflow", status: "Completed", due: "Oct 11", tone: "bg-[#f0e5d5] text-[#755a37]" },
  { name: "Jordan Bell", initials: "JB", role: "QA / tester", discipline: "Quality", email: "jordan.bell@northstar.dev", phone: "+1 415 555 0157", task: "Run critical-path regression", status: "Pending", due: "Oct 16", tone: "bg-[#e2e1ef] text-[#53517a]" },
];

function Sidebar({
  active,
  onNavigate,
  open,
  onClose,
}: {
  active: string;
  onNavigate: (page: string) => void;
  open: boolean;
  onClose: () => void;
}) {
  const nav = [
    ["Overview", "dashboard"],
    ["Assessments", "clipboard"],
    ["Fail-Safe Reviews", "shield"],
    ["Concerns", "flag"],
    ["Accountability", "users"],
    ["Reports", "file"],
  ] as const;

  return (
    <>
      {open && <button aria-label="Close menu" className="fixed inset-0 z-30 bg-slate-950/30 lg:hidden" onClick={onClose} />}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col bg-[#112f2e] px-4 pb-5 pt-6 text-white transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 px-2">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#d9ff85] text-[#173c36]">
            <Icon name="shield" className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[15px] font-bold tracking-tight">Northstar</p>
            <p className="text-xs text-emerald-100/60">Safety Integrity</p>
          </div>
          <button aria-label="Close menu" className="ml-auto text-white/70 lg:hidden" onClick={onClose}>
            <Icon name="x" />
          </button>
        </div>

        <p className="mb-3 mt-10 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-100/45">Workspace</p>
        <nav className="space-y-1">
          {nav.map(([label, icon]) => (
            <button
              key={label}
              onClick={() => {
                onNavigate(label);
                onClose();
              }}
              className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                active === label ? "bg-white text-[#173c36] shadow-sm" : "text-emerald-50/70 hover:bg-white/8 hover:text-white"
              }`}
            >
              <Icon name={icon} className={`h-[18px] w-[18px] ${active === label ? "text-[#397060]" : "text-emerald-100/55"}`} />
              <span className="font-medium">{label}</span>
              {label === "Concerns" && (
                <span className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold ${active === label ? "bg-rose-100 text-rose-700" : "bg-rose-400/20 text-rose-200"}`}>
                  4
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#d9ff85]/15 text-[#d9ff85]">
              <Icon name="help" className="h-[18px] w-[18px]" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-100/50">Help center</span>
          </div>
          <p className="text-sm font-semibold">Need guidance?</p>
          <p className="mt-1 text-xs leading-5 text-emerald-50/55">Review reporting standards and safety policy.</p>
          <button className="mt-3 text-xs font-semibold text-[#d9ff85]">View resources</button>
        </div>
        <button className="mt-3 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-emerald-50/60 hover:bg-white/5">
          <Icon name="settings" className="h-[18px] w-[18px]" />
          Settings
        </button>
      </aside>
    </>
  );
}

function Topbar({ title, onMenu }: { title: string; onMenu: () => void }) {
  return (
    <header className="sticky top-0 z-20 flex h-[72px] items-center border-b border-slate-200/80 bg-[#f7f8f5]/90 px-5 backdrop-blur-xl sm:px-8">
      <button aria-label="Open menu" className="mr-3 rounded-lg p-2 text-slate-600 hover:bg-white lg:hidden" onClick={onMenu}>
        <Icon name="menu" />
      </button>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6b8179]">Integrity portal</p>
        <h1 className="text-lg font-semibold tracking-tight text-[#162d2b]">{title}</h1>
      </div>
      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <button aria-label="Search" className="hidden h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-[#173c36] sm:grid">
          <Icon name="search" className="h-[17px] w-[17px]" />
        </button>
        <button aria-label="Notifications" className="relative grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-[#173c36]">
          <Icon name="bell" className="h-[17px] w-[17px]" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#e25b3f] ring-2 ring-white" />
        </button>
        <div className="mx-1 hidden h-7 w-px bg-slate-200 sm:block" />
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-[#d7e4de] text-xs font-bold text-[#21483f]">AM</div>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-slate-800">Alex Morgan</p>
            <p className="text-[10px] text-slate-500">Safety lead</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function MetricCard({
  icon,
  label,
  value,
  note,
  tone,
}: {
  icon: IconName;
  label: string;
  value: string;
  note: string;
  tone: "mint" | "amber" | "rose" | "blue";
}) {
  const colors = {
    mint: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    rose: "bg-rose-50 text-rose-700",
    blue: "bg-sky-50 text-sky-700",
  };
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_1px_2px_rgba(20,48,43,0.03)] sm:p-5">
      <div className="flex items-start justify-between">
        <div className={`grid h-9 w-9 place-items-center rounded-xl ${colors[tone]}`}>
          <Icon name={icon} className="h-[18px] w-[18px]" />
        </div>
        <span className="rounded-full bg-[#eff5f1] px-2 py-1 text-[10px] font-semibold text-[#3e695d]">{note}</span>
      </div>
      <p className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17312e]">{value}</p>
      <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}

function Overview({ onReport, onAssess }: { onReport: () => void; onAssess: () => void }) {
  return (
    <main className="mx-auto w-full max-w-[1440px] p-5 sm:p-8">
      <section className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-[#52736a]">
            <span>Projects</span><span className="text-slate-300">/</span><span>Atlas Expansion</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#142d2a] sm:text-[36px]">Good morning, Alex.</h2>
          <p className="mt-2 text-sm text-slate-500">Here is today’s safety integrity overview.</p>
        </div>
        <button
          onClick={onReport}
          className="flex w-fit items-center gap-2 rounded-xl bg-[#173c36] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#245249] focus:outline-none focus:ring-4 focus:ring-emerald-900/10"
        >
          <Icon name="plus" className="h-4 w-4" />
          Report a concern
        </button>
      </section>

      <section className="mt-7 rounded-2xl border border-[#f1d4ce] bg-[#fff8f6] p-4 sm:flex sm:items-center sm:gap-4 sm:p-5">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#ffe4dd] text-[#b83f2a]">
          <Icon name="alert" className="h-5 w-5" />
        </div>
        <div className="mt-3 sm:mt-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-semibold text-[#542922]">Immediate attention required</h3>
            <span className="rounded-full bg-[#e5563d] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">Critical</span>
          </div>
          <p className="mt-1 text-xs leading-5 text-[#8f5d54]">An unsecured access panel was reported near Line 4. Production team has been notified.</p>
        </div>
        <button className="mt-4 flex shrink-0 items-center gap-1 text-xs font-semibold text-[#9b3a29] sm:ml-auto sm:mt-0">
          Review concern <Icon name="arrow" className="h-3.5 w-3.5" />
        </button>
      </section>

      <section className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <MetricCard icon="flag" label="Open concerns" value="12" note="+2 this week" tone="rose" />
        <MetricCard icon="alert" label="High-risk items" value="3" note="Needs action" tone="amber" />
        <MetricCard icon="clipboard" label="Reviews pending" value="7" note="2 due today" tone="blue" />
        <MetricCard icon="check" label="Corrective actions" value="86%" note="+8% this month" tone="mint" />
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.75fr)]">
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 p-5">
            <div>
              <h3 className="text-sm font-semibold text-[#17312e]">Open safety concerns</h3>
              <p className="mt-1 text-xs text-slate-400">Items requiring review or corrective action</p>
            </div>
            <button className="text-xs font-semibold text-[#377064]">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead>
                <tr className="bg-[#fafbf9] text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  <th className="px-5 py-3">Concern</th><th className="px-4 py-3">Owner</th><th className="px-4 py-3">Due</th><th className="px-4 py-3">Risk</th><th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody>
                {concerns.map((concern) => (
                  <tr key={concern.id} className="border-t border-slate-100 text-xs transition hover:bg-[#fafcfb]">
                    <td className="px-5 py-4">
                      <p className="font-semibold text-[#203a36]">{concern.title}</p>
                      <p className="mt-1 text-[10px] font-medium text-slate-400">{concern.id}</p>
                    </td>
                    <td className="px-4 py-4 text-slate-600">{concern.owner}</td>
                    <td className="px-4 py-4 text-slate-500">{concern.due}</td>
                    <td className="px-4 py-4">
                      <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                        concern.risk === "Critical" ? "bg-rose-50 text-rose-700" : concern.risk === "High" ? "bg-orange-50 text-orange-700" : concern.risk === "Medium" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-600"
                      }`}>{concern.risk}</span>
                    </td>
                    <td className="px-5 py-4 text-right text-slate-400"><Icon name="chevron" className="ml-auto h-4 w-4" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-[#17312e]">Approval readiness</h3>
              <p className="mt-1 text-xs text-slate-400">Atlas Expansion</p>
            </div>
            <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold text-amber-700">At risk</span>
          </div>
          <div className="my-6 flex items-center gap-5">
            <div className="relative grid h-28 w-28 shrink-0 place-items-center rounded-full" style={{ background: "conic-gradient(#4f8b76 0 72%, #edf1ed 72% 100%)" }}>
              <div className="grid h-[88px] w-[88px] place-items-center rounded-full bg-white">
                <div className="text-center"><p className="text-2xl font-semibold tracking-tight text-[#193833]">72%</p><p className="text-[9px] text-slate-400">complete</p></div>
              </div>
            </div>
            <div className="min-w-0 flex-1 space-y-3">
              {[["Completed", "18", "bg-emerald-500"], ["Attention", "5", "bg-amber-400"], ["Not started", "2", "bg-slate-300"]].map(([label, value, color]) => (
                <div key={label} className="flex items-center text-xs">
                  <span className={`mr-2 h-1.5 w-1.5 rounded-full ${color}`} /><span className="text-slate-500">{label}</span><span className="ml-auto font-semibold text-slate-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-[#f6f8f5] p-3.5">
            <p className="text-xs font-semibold text-[#29473f]">2 critical checks remain</p>
            <p className="mt-1 text-[10px] leading-4 text-slate-500">Complete the independent review and test evidence before approval.</p>
          </div>
          <button onClick={onAssess} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[#cbdad5] py-2.5 text-xs font-semibold text-[#28584d] transition hover:bg-[#f1f7f4]">
            Continue assessment <Icon name="arrow" className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>
    </main>
  );
}

function Assessments() {
  const allQuestions = assessmentGroups.flatMap((group) => group.questions);
  const [answers, setAnswers] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(allQuestions.slice(0, 7).map((question) => [question, true])),
  );
  const completed = Object.keys(answers).length;
  const percent = Math.round((completed / allQuestions.length) * 100);

  return (
    <main className="mx-auto w-full max-w-[1440px] p-5 sm:p-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-xs font-semibold text-[#52736a]">Atlas Expansion / Gate 3</p>
          <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#142d2a]">Risk assessment</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">Evaluate key safety, ethical, and operational factors before project approval.</p>
        </div>
        <button className="rounded-xl bg-[#173c36] px-4 py-2.5 text-sm font-semibold text-white shadow-sm">Save progress</button>
      </div>

      <div className="mt-7 grid items-start gap-5 xl:grid-cols-[minmax(0,1.6fr)_340px]">
        <div className="space-y-4">
          {assessmentGroups.map((group, groupIndex) => {
            const count = group.questions.filter((question) => question in answers).length;
            return (
              <section key={group.title} className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
                <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#edf5f1] text-xs font-bold text-[#3d7365]">{String(groupIndex + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="text-sm font-semibold capitalize text-[#193833]">{group.title}</h3>
                    <p className="mt-0.5 text-[10px] text-slate-400">{group.description}</p>
                  </div>
                  <span className="ml-auto text-xs font-semibold text-[#52736a]">{count}/{group.questions.length}</span>
                </div>
                <div className="divide-y divide-slate-100">
                  {group.questions.map((question) => (
                    <div key={question} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center">
                      <p className="pr-4 text-xs font-medium leading-5 text-slate-600 sm:flex-1">{question}</p>
                      <div className="flex rounded-lg bg-[#f2f4f1] p-1">
                        {[true, false].map((value) => (
                          <button
                            key={String(value)}
                            onClick={() => setAnswers((current) => ({ ...current, [question]: value }))}
                            className={`min-w-14 rounded-md px-3 py-1.5 text-[10px] font-semibold transition ${
                              answers[question] === value ? (value ? "bg-white text-emerald-700 shadow-sm" : "bg-white text-rose-700 shadow-sm") : "text-slate-400"
                            }`}
                          >
                            {value ? "Yes" : "No"}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <aside className="space-y-4 xl:sticky xl:top-[92px]">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5">
            <h3 className="text-sm font-semibold text-[#193833]">Assessment summary</h3>
            <div className="my-6 flex justify-center">
              <div className="relative grid h-36 w-36 place-items-center rounded-full" style={{ background: `conic-gradient(#4f8b76 0 ${percent}%, #edf1ed ${percent}% 100%)` }}>
                <div className="grid h-[112px] w-[112px] place-items-center rounded-full bg-white text-center">
                  <div><p className="text-3xl font-semibold tracking-[-0.04em] text-[#193833]">{percent}%</p><p className="mt-0.5 text-[10px] text-slate-400">completed</p></div>
                </div>
              </div>
            </div>
            <div className="space-y-3 border-t border-slate-100 pt-4">
              <div className="flex justify-between text-xs"><span className="text-slate-500">Answered</span><span className="font-semibold text-slate-700">{completed}</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">Requires attention</span><span className="font-semibold text-amber-700">{Object.values(answers).filter((answer) => !answer).length}</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">Not started</span><span className="font-semibold text-slate-700">{allQuestions.length - completed}</span></div>
            </div>
          </div>
          <div className="rounded-2xl bg-[#173c36] p-5 text-white">
            <div className="flex items-center justify-between"><h3 className="text-sm font-semibold">Project approval</h3><Icon name="shield" className="h-5 w-5 text-[#d9ff85]" /></div>
            <p className="mt-3 text-xs leading-5 text-emerald-50/65">Approval is blocked until all critical controls are reviewed and supporting evidence is attached.</p>
            <div className="mt-5 flex items-center gap-2 rounded-xl bg-white/8 p-3 text-xs">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="font-medium">Review in progress</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function FailSafeReviews() {
  const [statuses, setStatuses] = useState<Record<string, string>>({
    "Emergency stop circuit": "Completed",
    "Line 4 access panel": "Needs review",
    "Ventilation controller": "Completed",
    "Backup power supply": "Not started",
  });
  const checks = [
    "Safety mechanisms operate independently from the systems they protect",
    "A single component failure cannot disable all protective controls",
    "Manual override requires authorized access and creates an audit record",
    "Loss of power places the system into a known safe state",
    "Fail-safe response time meets the approved engineering requirement",
  ];
  const [answers, setAnswers] = useState<Record<string, boolean>>({
    [checks[0]]: true,
    [checks[1]]: true,
    [checks[3]]: false,
  });
  const completedSystems = Object.values(statuses).filter((status) => status === "Completed").length;
  const completedChecks = Object.keys(answers).length;
  const totalItems = failureModes.length + checks.length;
  const completed = completedSystems + completedChecks;
  const percent = Math.round((completed / totalItems) * 100);
  const issues =
    Object.values(statuses).filter((status) => status === "Needs review").length +
    Object.values(answers).filter((answer) => !answer).length;

  const downloadReport = () => {
    const report = [
      "NORTHSTAR SAFETY INTEGRITY — FAIL-SAFE REVIEW",
      "Project: Atlas Expansion / Line 4",
      `Progress: ${percent}%`,
      "",
      "SYSTEM ANALYSIS",
      ...failureModes.map((item) => `${item.component} | ${item.mode} | ${item.impact} | ${statuses[item.component]}`),
      "",
      "INDEPENDENCE & EFFECTIVENESS CHECKS",
      ...checks.map((check) => `${check} | ${check in answers ? (answers[check] ? "Yes" : "No") : "Not answered"}`),
    ].join("\n");
    const url = URL.createObjectURL(new Blob([report], { type: "text/plain" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "atlas-fail-safe-review.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] p-5 sm:p-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-xs font-semibold text-[#52736a]">Atlas Expansion / Line 4</p>
          <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#142d2a]">Fail-safe review</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">Verify that critical systems detect failures, respond correctly, and transition equipment into a safe state.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-amber-50 px-3 py-2 text-[10px] font-semibold text-amber-700">Review in progress</span>
          <button className="rounded-xl bg-[#173c36] px-4 py-2.5 text-sm font-semibold text-white shadow-sm">Save review</button>
        </div>
      </div>

      <div className="mt-7 grid items-start gap-5 xl:grid-cols-[minmax(0,1.65fr)_340px]">
        <div className="space-y-4">
          <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
            <div className="flex items-center border-b border-slate-100 p-5">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#edf5f1] text-[#397064]"><Icon name="settings" className="h-[18px] w-[18px]" /></div>
              <div className="ml-3">
                <h3 className="text-sm font-semibold text-[#193833]">System analysis</h3>
                <p className="mt-0.5 text-[10px] text-slate-400">Review credible failure modes and their impact</p>
              </div>
              <span className="ml-auto text-xs font-semibold text-[#52736a]">{completedSystems}/{failureModes.length}</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left">
                <thead>
                  <tr className="bg-[#fafbf9] text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                    <th className="px-5 py-3">Component / system</th><th className="px-4 py-3">Potential failure mode</th><th className="px-4 py-3">Impact</th><th className="px-4 py-3">Owner</th><th className="px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {failureModes.map((item) => (
                    <tr key={item.component} className="border-t border-slate-100 text-xs">
                      <td className="px-5 py-4 font-semibold text-[#203a36]">{item.component}</td>
                      <td className="max-w-52 px-4 py-4 text-slate-500">{item.mode}</td>
                      <td className="px-4 py-4">
                        <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                          item.impact === "Critical" ? "bg-rose-50 text-rose-700" : item.impact === "High" ? "bg-orange-50 text-orange-700" : "bg-amber-50 text-amber-700"
                        }`}>{item.impact}</span>
                      </td>
                      <td className="px-4 py-4 text-slate-500">{item.owner}</td>
                      <td className="px-5 py-4">
                        <select
                          aria-label={`${item.component} review status`}
                          value={statuses[item.component]}
                          onChange={(event) => setStatuses((current) => ({ ...current, [item.component]: event.target.value }))}
                          className="rounded-lg border border-slate-200 bg-[#fafbf9] px-2.5 py-2 text-[10px] font-semibold text-slate-600"
                        >
                          <option>Not started</option><option>Needs review</option><option>Completed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {[
            ["Independence check", "Confirm protective mechanisms remain separate from the systems they protect", checks.slice(0, 3)],
            ["Fail-safe effectiveness", "Verify failures are detected and equipment transitions to a safe state", checks.slice(3)],
          ].map(([title, description, questions]) => (
            <section key={title as string} className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
              <div className="border-b border-slate-100 px-5 py-4">
                <h3 className="text-sm font-semibold text-[#193833]">{title as string}</h3>
                <p className="mt-1 text-[10px] text-slate-400">{description as string}</p>
              </div>
              <div className="divide-y divide-slate-100">
                {(questions as string[]).map((question) => (
                  <div key={question} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center">
                    <p className="pr-4 text-xs font-medium leading-5 text-slate-600 sm:flex-1">{question}</p>
                    <div className="flex rounded-lg bg-[#f2f4f1] p-1">
                      {[true, false].map((value) => (
                        <button
                          key={String(value)}
                          onClick={() => setAnswers((current) => ({ ...current, [question]: value }))}
                          className={`min-w-14 rounded-md px-3 py-1.5 text-[10px] font-semibold transition ${
                            answers[question] === value ? (value ? "bg-white text-emerald-700 shadow-sm" : "bg-white text-rose-700 shadow-sm") : "text-slate-400"
                          }`}
                        >
                          {value ? "Yes" : "No"}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="space-y-4 xl:sticky xl:top-[92px]">
          <div className="rounded-2xl bg-[#173c36] p-5 text-white">
            <div className="flex items-center justify-between">
              <div><p className="text-[10px] uppercase tracking-[0.14em] text-emerald-100/50">Project approval</p><h3 className="mt-1 text-sm font-semibold">Approval blocked</h3></div>
              <Icon name="shield" className="h-6 w-6 text-[#d9ff85]" />
            </div>
            <p className="mt-4 text-xs leading-5 text-emerald-50/65">Resolve all critical failure modes and complete effectiveness checks before approval.</p>
            <div className="mt-5 rounded-xl bg-white/8 p-3">
              <div className="flex items-center gap-2 text-xs"><span className="h-2 w-2 rounded-full bg-amber-400" /><span className="font-medium">{issues} items require attention</span></div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5">
            <h3 className="text-sm font-semibold text-[#193833]">Review summary</h3>
            <div className="my-6 flex justify-center">
              <div className="grid h-32 w-32 place-items-center rounded-full" style={{ background: `conic-gradient(#4f8b76 0 ${percent}%, #edf1ed ${percent}% 100%)` }}>
                <div className="grid h-[102px] w-[102px] place-items-center rounded-full bg-white text-center">
                  <div><p className="text-3xl font-semibold tracking-[-0.04em] text-[#193833]">{percent}%</p><p className="text-[10px] text-slate-400">reviewed</p></div>
                </div>
              </div>
            </div>
            <div className="space-y-3 border-t border-slate-100 pt-4">
              <div className="flex justify-between text-xs"><span className="text-slate-500">Completed</span><span className="font-semibold text-slate-700">{completed}</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">Needs review</span><span className="font-semibold text-amber-700">{issues}</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">Not started</span><span className="font-semibold text-slate-700">{totalItems - completed}</span></div>
            </div>
          </div>

          <button onClick={downloadReport} className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#cbdad5] bg-white py-3 text-xs font-semibold text-[#28584d] transition hover:bg-[#f1f7f4]">
            <Icon name="download" className="h-4 w-4" /> Download full report
          </button>
        </aside>
      </div>
    </main>
  );
}

function Accountability() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Leadership", "Engineering", "Product", "Design", "Operations", "Quality"];
  const visibleMembers = filter === "All" ? teamMembers : teamMembers.filter((member) => member.discipline === filter);
  const pending = teamMembers.filter((member) => member.status === "Pending").length;
  const ongoing = teamMembers.filter((member) => member.status === "In progress").length;

  return (
    <main className="mx-auto w-full max-w-[1440px] p-5 sm:p-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-xs font-semibold text-[#52736a]">Atlas Expansion / Project team</p>
          <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#142d2a]">Accountability</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">Clear ownership, direct contacts, and current responsibilities across the project team.</p>
        </div>
        <button className="flex w-fit items-center gap-2 rounded-xl bg-[#173c36] px-4 py-2.5 text-sm font-semibold text-white shadow-sm">
          <Icon name="plus" className="h-4 w-4" /> Add team member
        </button>
      </div>

      <section className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <MetricCard icon="users" label="Project members" value="9" note="7 disciplines" tone="mint" />
        <MetricCard icon="clipboard" label="Tasks in progress" value={String(ongoing)} note="On schedule" tone="blue" />
        <MetricCard icon="flag" label="Pending tasks" value={String(pending)} note="2 due today" tone="amber" />
        <MetricCard icon="check" label="Role coverage" value="100%" note="All assigned" tone="mint" />
      </section>

      <section className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold transition ${
              filter === item ? "bg-[#173c36] text-white" : "border border-slate-200 bg-white text-slate-500 hover:border-[#9fb8b0] hover:text-[#28584d]"
            }`}
          >
            {item}
          </button>
        ))}
      </section>

      <div className="mt-4 grid items-start gap-5 xl:grid-cols-[minmax(0,1.65fr)_340px]">
        <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 p-5">
            <div>
              <h3 className="text-sm font-semibold text-[#17312e]">Project directory</h3>
              <p className="mt-1 text-xs text-slate-400">{visibleMembers.length} people · Atlas Expansion</p>
            </div>
            <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-[10px] font-semibold text-slate-500">
              <Icon name="download" className="h-3.5 w-3.5" /> Export
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {visibleMembers.map((member) => (
              <article key={member.email} className="grid gap-4 p-5 transition hover:bg-[#fafcfb] md:grid-cols-[minmax(250px,1.15fr)_minmax(220px,1fr)_minmax(180px,0.9fr)] md:items-center">
                <div className="flex min-w-0 items-center gap-3">
                  <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-xs font-bold ${member.tone}`}>{member.initials}</div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="truncate text-sm font-semibold text-[#203a36]">{member.name}</h4>
                      {member.role === "Project owner / manager" && <span className="rounded-full bg-[#e7f0c8] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#52651f]">Owner</span>}
                    </div>
                    <p className="mt-1 text-xs capitalize text-slate-500">{member.role}</p>
                  </div>
                </div>

                <div className="min-w-0 border-l-0 border-slate-100 md:border-l md:pl-5">
                  <a href={`mailto:${member.email}`} className="block truncate text-xs font-medium text-[#397064] hover:underline">{member.email}</a>
                  <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="mt-1.5 block text-[10px] text-slate-400 hover:text-slate-600">{member.phone}</a>
                </div>

                <div className="rounded-xl bg-[#f7f9f7] p-3">
                  <div className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      member.status === "Completed" ? "bg-emerald-500" : member.status === "In progress" ? "bg-sky-500" : "bg-amber-400"
                    }`} />
                    <span className="text-[10px] font-semibold text-slate-500">{member.status}</span>
                    <span className="ml-auto text-[9px] text-slate-400">{member.due}</span>
                  </div>
                  <p className="mt-2 truncate text-xs font-medium text-[#334a46]">{member.task}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="space-y-4 xl:sticky xl:top-[92px]">
          <section className="rounded-2xl border border-slate-200/80 bg-white p-5">
            <div className="flex items-center justify-between">
              <div><h3 className="text-sm font-semibold text-[#193833]">Task focus</h3><p className="mt-1 text-[10px] text-slate-400">Due soon across the team</p></div>
              <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold text-amber-700">{pending + ongoing} active</span>
            </div>
            <div className="mt-5 space-y-4">
              {teamMembers.filter((member) => member.status !== "Completed").slice(0, 5).map((member) => (
                <div key={member.name} className="flex gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <div className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-[8px] font-bold ${member.tone}`}>{member.initials}</div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium leading-5 text-[#334a46]">{member.task}</p>
                    <div className="mt-1 flex items-center text-[9px] text-slate-400">
                      <span>{member.name}</span><span className="mx-1.5">·</span><span>{member.due}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-5 flex w-full items-center justify-center gap-1 rounded-xl border border-[#cbdad5] py-2.5 text-xs font-semibold text-[#28584d]">
              View all tasks <Icon name="arrow" className="h-3.5 w-3.5" />
            </button>
          </section>

          <section className="rounded-2xl bg-[#173c36] p-5 text-white">
            <div className="flex items-start justify-between">
              <div><p className="text-[10px] uppercase tracking-[0.14em] text-emerald-100/50">Ownership health</p><h3 className="mt-1 text-sm font-semibold">All critical roles covered</h3></div>
              <Icon name="check" className="h-5 w-5 text-[#d9ff85]" />
            </div>
            <p className="mt-3 text-xs leading-5 text-emerald-50/65">Every safety-critical area has a named owner and direct contact. No accountability gaps detected.</p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-full rounded-full bg-[#d9ff85]" /></div>
          </section>
        </aside>
      </div>
    </main>
  );
}

function ReportModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 grid place-items-center bg-[#0a2421]/55 p-4 backdrop-blur-sm">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-700"><Icon name="check" className="h-7 w-7" /></div>
          <h2 className="mt-5 text-xl font-semibold text-[#17312e]">Concern submitted</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">Your report SC-0289 has been logged. The safety team will review it immediately.</p>
          <button onClick={onClose} className="mt-6 w-full rounded-xl bg-[#173c36] py-3 text-sm font-semibold text-white">Back to overview</button>
        </div>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#0a2421]/55 p-0 backdrop-blur-sm sm:items-center sm:p-5">
      <div role="dialog" aria-modal="true" aria-labelledby="report-title" className="max-h-[96vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        <div className="flex items-start border-b border-slate-100 p-5 sm:p-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#568076]">Confidential report</p>
            <h2 id="report-title" className="mt-1 text-xl font-semibold tracking-tight text-[#17312e]">Report a safety concern</h2>
            <p className="mt-1 text-xs text-slate-500">Provide what you know. You can update the report later.</p>
          </div>
          <button aria-label="Close" onClick={onClose} className="ml-auto rounded-full bg-slate-100 p-2 text-slate-500 hover:text-slate-800"><Icon name="x" className="h-4 w-4" /></button>
        </div>
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="space-y-5 p-5 sm:p-6">
          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-700">Project</label>
            <select className="field"><option>Atlas Expansion — Line 4</option><option>Harbor Retrofit</option><option>Operations — General</option></select>
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-700">What happened?</label>
            <textarea required className="field min-h-24 resize-none" placeholder="Describe the concern, condition, or event..." />
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-700">Type of safety risk</label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["Equipment", "Environment", "Process", "People"].map((type) => (
                <label key={type} className="cursor-pointer">
                  <input type="radio" name="type" className="peer sr-only" />
                  <span className="block rounded-xl border border-slate-200 px-3 py-2.5 text-center text-xs font-medium text-slate-500 peer-checked:border-[#4c8274] peer-checked:bg-[#eff7f3] peer-checked:text-[#28584d]">{type}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><label className="mb-2 block text-xs font-semibold text-slate-700">Where did this occur?</label><input className="field" placeholder="Location or work area" /></div>
            <div><label className="mb-2 block text-xs font-semibold text-slate-700">When did this occur?</label><input type="datetime-local" className="field" /></div>
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-700">Severity</label>
            <select className="field"><option>Select a severity level</option><option>Critical — immediate danger</option><option>High — urgent action</option><option>Medium — review required</option><option>Low — monitor</option></select>
          </div>
          <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
            <button type="button" onClick={onClose} className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="rounded-xl bg-[#173c36] px-5 py-2.5 text-sm font-semibold text-white">Submit report</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("Overview");
  const [reportOpen, setReportOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const title = useMemo(() => active === "Overview" ? "Safety dashboard" : active, [active]);

  return (
    <div className="min-h-screen bg-[#f7f8f5] text-slate-800">
      <Sidebar active={active} onNavigate={setActive} open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="min-h-screen lg:pl-[260px]">
        <Topbar title={title} onMenu={() => setMenuOpen(true)} />
        {active === "Assessments" ? (
          <Assessments />
        ) : active === "Fail-Safe Reviews" ? (
          <FailSafeReviews />
        ) : active === "Accountability" ? (
          <Accountability />
        ) : active === "Overview" ? (
          <Overview onReport={() => setReportOpen(true)} onAssess={() => setActive("Assessments")} />
        ) : (
          <main className="mx-auto w-full max-w-[1440px] p-5 sm:p-8">
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-20 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[#eff5f1] text-[#397064]"><Icon name={active === "Concerns" ? "flag" : active === "Reports" ? "file" : "users"} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[#17312e]">{active}</h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">This workspace is ready for your {active.toLowerCase()} workflow. Return to the overview or continue the risk assessment.</p>
              <button onClick={() => setActive("Overview")} className="mt-6 rounded-xl bg-[#173c36] px-5 py-2.5 text-sm font-semibold text-white">Back to overview</button>
            </div>
          </main>
        )}
      </div>
      {reportOpen && <ReportModal onClose={() => setReportOpen(false)} />}
    </div>
  );
}
