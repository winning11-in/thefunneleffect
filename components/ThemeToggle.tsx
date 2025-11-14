import React from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center space-x-1 bg-neutral-200 dark:bg-neutral-700 rounded-lg p-1">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md transition-all duration-200 ${
          theme === 'light'
            ? 'bg-white dark:bg-neutral-600 shadow-md text-amber-500'
            : 'text-neutral-500 hover:text-amber-500 hover:bg-neutral-300 dark:hover:bg-neutral-600'
        }`}
        title="Light mode"
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md transition-all duration-200 ${
          theme === 'system'
            ? 'bg-white dark:bg-neutral-600 shadow-md text-coral-500'
            : 'text-neutral-500 hover:text-coral-500 hover:bg-neutral-300 dark:hover:bg-neutral-600'
        }`}
        title="System mode"
      >
        <Monitor size={16} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md transition-all duration-200 ${
          theme === 'dark'
            ? 'bg-white dark:bg-neutral-600 shadow-md text-neutral-700'
            : 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600'
        }`}
        title="Dark mode"
      >
        <Moon size={16} />
      </button>
    </div>
  )
}