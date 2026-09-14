import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1.5 h-1.5 bg-indigo-500"></span>
        <h2 className="text-sm font-medium tracking-wide uppercase text-indigo-700 dark:text-indigo-400 font-sans transition-colors duration-500">
          Selected Work
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <ProjectCard
          title="PickSend"
          org="PickSpot Network"
          period="2024 — Present"
          status="In production"
          problem="Merchants sending parcels had no single place to register a shipment, hand it off, and see where it was — coordination ran on phone calls and spreadsheets."
          role="Frontend lead"
          stack={["Next.js", "React", "TypeScript"]}
          outcomes={[
            "Merchants register parcels and follow them through to delivery from one dashboard, replacing ad-hoc coordination.",
            "The same platform runs the internal portals operations staff use to manage dispatch and support day to day.",
            "Merchant-facing surfaces hold above 90% user satisfaction in production.",
          ]}
        />
        <ProjectCard
          title="Battery Inventory System"
          org="eWAKA Mobility"
          period="2024"
          status="Deployed"
          problem="Battery swaps across franchises were logged by hand, so inventory counts drifted from reality and errors surfaced days late."
          role="Engineer"
          stack={["Next.js", "TypeScript", "Node.js"]}
          outcomes={[
            "Administrators control battery swaps electronically and monitor locations in real time across every franchise.",
            "Cut tracking errors by 35% by replacing manual logs with one centralized platform.",
            "Slotted into existing fleet-management workflows instead of forcing new ones.",
          ]}
        />
        <ProjectCard
          title="Murmur"
          org="Personal Project"
          period="2026 — Present"
          status="In development"
          problem="Journaling apps assume you want to type; most people process feelings by talking. Murmur is a voice-first journal that runs entirely on your own machine."
          role="Design & build"
          stack={[
            "Next.js",
            "FastAPI",
            "Whisper",
            "Qwen3",
            "Kokoro",
            "pgvector",
            "Langfuse",
          ]}
          outcomes={[
            "Speak instead of write — a streaming voice loop that transcribes, replies out loud, and lets you interrupt, with time-to-first-audio under two seconds.",
            "Mood is estimated from how you sound and what you say, then scored against your own check-ins so the trend line is measured, not guessed.",
            "Private by architecture — every model runs locally, no accounts or API keys, and nothing leaves the device.",
          ]}
        />
      </div>
    </section>
  );
}
