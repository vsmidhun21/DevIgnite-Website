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
        <p>Developer workflows are often cluttered with repetitive terminal commands, manual IDE launches, and scattered environment variables. DevIgnite is a <b>centralized project launcher</b> designed to automate these tasks with a single click.</p>

        <div className="docs-info-box">
          <Shield size={20} />
          <div>
            <strong>Privacy First:</strong> DevIgnite runs entirely on your local machine. No telemetry, no cloud syncing, and no account required.
          </div>
        </div>

        <h3>Quick Installation</h3>
        <p>To get started, follow these simple steps:</p>
        <ul>
          <li>Download the installer from the <a href="/" className="highlight-link">homepage</a>.</li>
          <li>Run <code>DevIgniteSetup.exe</code> on your Windows machine.</li>
          <li>Launch the application and grant the necessary permissions for terminal access.</li>
        </ul>

        <h3>System Requirements</h3>
        <p>DevIgnite is optimized for modern Windows environments:</p>
        <ul>
          <li>Windows 10 or 11 (64-bit)</li>
          <li>Node.js installed (for script execution)</li>
          <li>VS Code or your preferred IDE in system PATH</li>
        </ul>
      </>
    )
  },
  'project-setup': {
    title: 'Project Setup',
    icon: Layout,
    content: (
      <>
        <div className="docs-badge">Configuration</div>
        <h2>Adding Projects</h2>
        <p>DevIgnite makes it easy to import existing repositories into your dashboard. When you add a folder, the application scans for configuration files to automate the setup.</p>

        <h3>Detection Logic</h3>
        <p>Our automation engine recognizes the following project types automatically:</p>
        <ul>
          <li><b>Next.js / React:</b> Scans for <code>package.json</code> and looks for <code>dev</code> or <code>start</code> scripts.</li>
          <li><b>Vite / Svelte:</b> Identifies <code>vite.config.js</code> for server optimization.</li>
          <li><b>Python:</b> Looks for <code>requirements.txt</code> or <code>main.py</code>.</li>
        </ul>

        <div className="docs-info-box warning">
          <Settings size={20} />
          <div>
            <strong>Path Configuration:</strong> Ensure your project path doesn't contain spaces if you are using some legacy terminal environments to avoid command parsing errors.
          </div>
        </div>

        <h3>Pinning & Sorting</h3>
        <p>You can <b>Pin</b> your most active projects to keep them at the top of the sidebar. Right-click any project to toggle its pinned status.</p>
      </>
    )
  },
  'custom-actions': {
    title: 'Advanced Actions',
    icon: Zap,
    content: (
      <>
        <div className="docs-badge">Power Features</div>
        <h2>Custom Commands</h2>
        <p>Beyond simple "Start" and "Stop", DevIgnite allows you to define <b>Custom Action Buttons</b> for specific project workflows like deployment or building.</p>

        <h3>Defining Actions</h3>
        <ol>
          <li>Open project details and scroll to <b>Actions</b>.</li>
          <li>Click <span className="text-highlight">Add Custom Action</span>.</li>
          <li>Enter a label (e.g., <code>🚀 Deploy to Vercel</code>).</li>
          <li>Enter the shell command (e.g., <code>npm run build && vercel --prod</code>).</li>
        </ol>

        <pre className="docs-code-block">
          <code>
            {`// Example: Multi-command action
npm install && npm run dev`}
          </code>
        </pre>

        <h3>Resizable Workspace</h3>
        <p>In version 2.0+, the layout is fully responsive. You can resize the <b>Log Terminal</b> and <b>Sidebar</b> to fit your screen real estate. These settings are persistency-saved per workspace.</p>
      </>
    )
  },
  'troubleshooting': {
    title: 'Troubleshooting',
    icon: HelpCircle,
    content: (
      <>
        <div className="docs-badge">Support</div>
        <h2>Common Issues</h2>
        <p>If you encounter issues while using DevIgnite, refer to the common solutions below.</p>

        <h3>Terminal not opening</h3>
        <p>Ensure your preferred terminal (PowerShell, CMD, or Git Bash) is accessible via the system environment variables.</p>

        <h3>Port already in use</h3>
        <p>If your dev server fails to start, DevIgnite will notify you. Use the <code>Kill Process</code> action in the logs tab to force clear the port.</p>

        <div style={{ marginTop: '40px' }} className="docs-info-box">
          <Terminal size={20} />
          <div>
            Refer to the <a href="https://github.com/vsmidhun21/DevIgnite" target="_blank" rel="noreferrer" className="highlight-link">GitHub Repository</a> for detailed logs and issue reporting.
          </div>
        </div>
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
