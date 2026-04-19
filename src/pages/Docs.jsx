import { motion } from 'framer-motion'
import { Book, Code, Settings, Terminal, Zap, ChevronRight, HelpCircle } from 'lucide-react'
import { useState } from 'react'

const docsContent = {
  'getting-started': {
    title: 'Getting Started',
    icon: Book,
    content: (
      <>
        <h2>Quick Start Guide</h2>
        <p>DevIgnite is designed to be as simple as possible. Follow these steps to get your first project running in seconds.</p>
        
        <h3>1. Installation</h3>
        <p>Download the latest installer from the home page. Once downloaded, run the <code>.exe</code> file and follow the on-screen instructions.</p>
        
        <h3>2. Adding your first project</h3>
        <p>Click the <b>"Add Project"</b> button in the sidebar. Browse to your project folder and select it. DevIgnite will automatically detect your framework (Next.js, Vite, etc.) and environment files.</p>
        
        <h3>3. Launching</h3>
        <p>Hit the <b>"Launch"</b> button. Your default IDE will open, a new terminal window will start the dev server, and time tracking will begin automatically.</p>
      </>
    )
  },
  'custom-actions': {
    title: 'Custom Project Actions',
    icon: Zap,
    content: (
      <>
        <h2>Custom Buttons & Actions</h2>
        <p>One of DevIgnites most powerful features is the ability to create custom buttons for any project.</p>
        
        <h3>Creating an Action</h3>
        <p>Navigate to the project details page. Look for the <b>"Custom Actions"</b> section. Click "Add Action" and specify:</p>
        <ul>
          <li><b>Label:</b> The text displayed on the button (e.g., "Deploy to Production").</li>
          <li><b>Command:</b> The exact terminal command to run (e.g., <code>npm run build && firebase deploy</code>).</li>
          <li><b>Icon:</b> Choose a visual representing the action.</li>
        </ul>
      </>
    )
  },
  'resizable-layout': {
    title: 'Resizable Layout',
    icon: Settings,
    content: (
      <>
        <h2>Optimizing Your Workspace</h2>
        <p>DevIgnite v2.0 introduces a fully resizable and customizable layout.</p>
        
        <h3>Panel Management</h3>
        <p>You can click and drag the edges of the sidebar and the main content panel to resize them. Your preferred dimensions are saved automatically for each session.</p>
        
        <h3>Note Taking</h3>
        <p>The new side-panel allows you to keep project-specific TODOs and notes. You can toggle this panel visibility using the icon in the top bar.</p>
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
            <span>Documentation</span>
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
                Need more help? <a href="mailto:support@devignite.io" style={{ color: 'var(--accent-brand)' }}>Contact us</a>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  )
}
