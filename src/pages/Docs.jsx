import { motion } from 'framer-motion'
import { Book, Code, Settings, Terminal, Zap, ChevronRight, HelpCircle, Download, Layout, Clock, Shield } from 'lucide-react'
import { useState } from 'react'

const docsContent = {
  'getting-started': {
    title: 'Getting Started',
    icon: Book,
    content: (
      <>
        <div className="docs-badge">Core Concept</div>
        <h2>Welcome to DevIgnite</h2>
        <p>DevIgnite is a <b>centralized project launcher</b> and productivity suite designed for modern developers. It automates repetitive setup tasks, tracks your progress, and provides intelligent insights into your codebase.</p>

        <div className="docs-info-box">
          <Shield size={20} />
          <div>
            <strong>Privacy First:</strong> DevIgnite runs entirely on your local machine. Your project data, logs, and tracking history never leave your computer.
          </div>
        </div>

        <h3>Installation</h3>
        <p>Get up and running in minutes:</p>
        <ul>
          <li>Download the latest installer from the <a href="/" className="highlight-link">homepage</a>.</li>
          <li>Run <code>DevIgniteSetup-v3.1.0.exe</code> on Windows.</li>
          <li>Launch the app and add your first project directory.</li>
        </ul>
      </>
    )
  },
  'project-management': {
    title: 'Project Management',
    icon: Layout,
    content: (
      <>
        <div className="docs-badge">Organization</div>
        <h2>Organizing Your Workspace</h2>
        <p>DevIgnite helps you stay focused by organizing your projects with tags, status indicators, and priority levels.</p>

        <h3>Tags & Metadata</h3>
        <p>Assign custom tags to projects to group them by stack (e.g., "Frontend", "Backend") or client. Tags are searchable and help in quick filtering.</p>

        <h3>Pinning & Archiving</h3>
        <ul>
          <li><b>Pin:</b> Keep your current active projects at the top of the sidebar.</li>
          <li><b>Star:</b> Mark important projects for quick access.</li>
          <li><b>Archive:</b> Hide completed or old projects without deleting their configuration.</li>
        </ul>
      </>
    )
  },
  'intelligence': {
    title: 'Daily Briefing & Insights',
    icon: Zap,
    content: (
      <>
        <div className="docs-badge">Productivity</div>
        <h2>Intelligent Workflow</h2>
        <p>Version 3.0 introduces deep intelligence features to help you start your day with clarity.</p>

        <h3>Daily Briefing</h3>
        <p>Every time you launch DevIgnite, the <b>Daily Briefing</b> shows you a summary of your pending TODOs, recent project changes, and your goals for the day.</p>

        <h3>Code Health Checker</h3>
        <p>The <b>Code Health Checker</b> analyzes your project structure and files to provide a "Health Score". It identifies:</p>
        <ul>
          <li>Missing dependencies or config files.</li>
          <li>Large files that might need refactoring.</li>
          <li>Potential security risks in local environment files.</li>
        </ul>
      </>
    )
  },
  'time-tracking': {
    title: 'Time & Reports',
    icon: Clock,
    content: (
      <>
        <div className="docs-badge">Tracking</div>
        <h2>Productivity Analytics</h2>
        <p>Monitor your effort across different projects with automated and manual tracking.</p>

        <h3>Tracking Time</h3>
        <ul>
          <li><b>Automatic:</b> DevIgnite tracks time while a project is "Launched".</li>
          <li><b>Manual Entry:</b> Forgot to start the app? Add manual time entries to keep your history accurate.</li>
        </ul>

        <h3>Reports</h3>
        <p>View detailed <b>Weekly and Monthly Reports</b> that breakdown your development time by project and category. Perfect for freelancers and performance tracking.</p>
      </>
    )
  },
  'search-debug': {
    title: 'Search & Debugging',
    icon: Terminal,
    content: (
      <>
        <div className="docs-badge">Efficiency</div>
        <h2>Finding What Matters</h2>
        <p>Don't waste time digging through folders or scrolling through infinite logs.</p>

        <h3>Global Search</h3>
        <p>Use <code>Ctrl + F</code> (Global Search) to find projects, tags, or even specific notes across your entire workspace instantly.</p>

        <h3>Log Search</h3>
        <p>The integrated terminal logs are now searchable. Find specific error codes or success messages within your project execution history.</p>
      </>
    )
  },
  'docker-support': {
    title: 'Docker Support',
    icon: Code,
    content: (
      <>
        <div className="docs-badge">Automation</div>
        <h2>Container Integration</h2>
        <p>DevIgnite v3.0 now natively supports Docker-based workflows.</p>
        <p>If a project contains a <code>docker-compose.yml</code> file, DevIgnite will show a <b>Docker</b> tab allowing you to:</p>
        <ul>
          <li>Start/Stop all containers with one click.</li>
          <li>View real-time logs from your Docker environment.</li>
          <li>Check container health status directly from the dashboard.</li>
        </ul>
      </>
    )
  },
  'data-management': {
    title: 'Import & Export',
    icon: Shield,
    content: (
      <>
        <div className="docs-badge">Security</div>
        <h2>Data Portability</h2>
        <p>Your configuration is yours to keep. DevIgnite makes it easy to move between machines or backup your settings.</p>

        <h3>JSON Backup</h3>
        <p>Go to <b>Settings &gt; Data</b> to export your entire project list, tags, and custom buttons as a single JSON file.</p>

        <h3>Restore</h3>
        <p>Importing is just as simple. Just select your backup file, and DevIgnite will reconstruct your workspace exactly as it was.</p>
      </>
    )
  },
  'settings': {
    title: 'Settings & Shortcuts',
    icon: Settings,
    content: (
      <>
        <div className="docs-badge">Customization</div>
        <h2>Personalize Your Experience</h2>
        <p>Tailor DevIgnite to match your development style.</p>

        <h3>Key Preferences</h3>
        <ul>
          <li><b>Notifications:</b> Get desktop alerts when servers start or health checks complete.</li>
          <li><b>Auto Update:</b> Stay on the latest version with background updates.</li>
          <li><b>Theme:</b> Toggle between system, light, and dark modes.</li>
        </ul>

        <h3>Keyboard Shortcuts</h3>
        <p>Master the app with built-in shortcuts for switching projects, launching terminals, and opening search.</p>
      </>
    )
  }
}

export default function Docs() {
  const [activeTab, setActiveTab] = useState('getting-started')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="docs-page page-wrapper"
    >
      <div className="container docs-container">
        {/* Sidebar */}
        <aside className="docs-sidebar">
          <div className="docs-sidebar-header">
            <Book size={18} />
            <span>DevIgnite Docs</span>
          </div>
          <nav className="docs-nav">
            {Object.entries(docsContent).map(([id, doc]) => {
              const Icon = doc.icon
              return (
                <button
                  key={id}
                  className={`docs-nav-link ${activeTab === id ? 'docs-nav-link--active' : ''}`}
                  onClick={() => setActiveTab(id)}
                >
                  <Icon size={16} />
                  <span>{doc.title}</span>
                  <ChevronRight size={14} className="docs-nav-arrow" />
                </button>
              )
            })}
          </nav>
        </aside>

        {/* Content */}
        <main className="docs-main">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="docs-article"
          >
            {docsContent[activeTab].content}

            <div style={{ marginTop: '60px', paddingTop: '30px', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <HelpCircle size={16} />
                Need more help? <a href="https://github.com/vsmidhun21/DevIgnite/issues" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-brand)' }}>Open an issue on GitHub</a>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  )
}
