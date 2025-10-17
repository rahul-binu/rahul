import React, { useState, useEffect, useRef } from 'react';

// -------------------- Terminal Portfolio --------------------
export default function TerminalPortfolio() {

    const banner = `
░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓███████▓▒░░▒▓████████▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░         ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░         ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓████████▓▒░▒▓██████▓▒░  ░▒▓██████▓▒░          ░▒▓█▓▒░   ░▒▓████████▓▒░▒▓██████▓▒░ ░▒▓███████▓▒░░▒▓██████▓▒░   
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░             ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░             ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░  ░▒▓█▓▒░             ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░ 
                                                                                                                 
                                                                                                                                                                                                     
`;


    const [history, setHistory] = useState([
        { type: 'out', text: banner },
        { type: 'out', text: 'Welcome — press any key or type `start` to enter fullscreen. Type `help` to see commands.' }
    ]);
    const [input, setInput] = useState('');
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    const prompt = 'visiter@portfolio:~$';

    const commands = {
        help: () => [
            'Available commands:',
            'help — show this message',
            'about — short bio',
            'projects — list projects',
            'contact — contact info',
            'theme <light|dark> — switch theme',
            'clear — clear terminal',
            'exit — exit fullscreen and close terminal',
        ],
        about: () => [
            'Rahul Binu — Software Developer ( Java)',
        ],
        projects: () => sampleProjects.map(p => `${p.id} — ${p.title} (${p.tech})`),
        contact: () => [
            '📧 Email: iamrahulbinu@gmail.com',
            '🐙 GitHub: https://github.com/rahul-binu',
            '🔗 LinkedIn: https://linkedin.com/in/rahul-binu'
        ],
        clear: () => {
            setHistory([]);
            return [];
        }
    };

    const addHistory = (type, text) => setHistory(prev => [...prev, { type, text }]);

    const runCommand = (cmd) => {
        if (!cmd.trim()) return;

        addHistory('in', `${prompt} ${cmd}`);
        const [command, ...args] = cmd.split(/\s+/);

        if (commands[command]) {
            const output = commands[command]();
            output.forEach(line => addHistory('out', line));
        } else if (command === 'theme') {
            const newTheme = args[0];
            if (newTheme === 'light' || newTheme === 'dark') {
                document.documentElement.classList.toggle('dark', newTheme === 'dark');
                addHistory('out', `Switched to ${newTheme} mode.`);
            } else {
                addHistory('out', 'Usage: theme <light|dark>');
            }
        } else if (command === 'exit') {
            addHistory('out', 'Exiting portfolio... 👋');
            setTimeout(() => {
                document.exitFullscreen();
                window.location.href = "about:blank";
            }, 1000);
        } else if (command === 'start') {
            enterFullscreen();
            addHistory('out', 'Entering fullscreen terminal...');
        } else {
            addHistory('out', `Command not found: ${command}. Try 'help'.`);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        runCommand(input);
        setCommandHistory(prev => [...prev, input]);
        setHistoryIndex(-1);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length === 0) return;
            const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
            setHistoryIndex(newIndex);
            setInput(commandHistory[newIndex] || '');
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex === -1) return;
            const newIndex = historyIndex + 1;
            if (newIndex >= commandHistory.length) {
                setHistoryIndex(-1);
                setInput('');
            } else {
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        }
    };

    // focus input & auto-scroll
    useEffect(() => inputRef.current?.focus(), []);
    useEffect(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), [history]);

    // allow fullscreen only after first keypress
    useEffect(() => {
        const handleKey = () => {
            enterFullscreen();
            window.removeEventListener('keydown', handleKey);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <div
            className="h-screen w-screen bg-black text-green-400 font-mono text-sm p-4 overflow-y-auto"
            onClick={() => inputRef.current?.focus()}
        >
            {history.map((h, i) => (
                <TerminalLine key={i} type={h.type} text={h.text} prompt={prompt} />
            ))}
            <form onSubmit={handleSubmit} className="mt-2 flex items-center gap-2">
                <span>{prompt}</span>
                <div className="relative flex-1 font-mono">
                    {/* Invisible mirror of input text to position caret */}
                    <div className="invisible whitespace-pre-wrap">
                        {input || ' '}
                    </div>

                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="absolute top-0 left-0 w-full bg-transparent text-green-300 outline-none caret-transparent"
                        autoComplete="off"
                        spellCheck={false}
                    />

                    {/* Moving caret */}
                    <span
                        className="absolute top-0 text-green-400 animate-pulse"
                        style={{ left: `${input.length}ch` }}
                    >
                        |
                    </span>
                </div>
            </form>
            <div ref={bottomRef} />
        </div>
    );
}

// -------------------- Terminal Line --------------------
function TerminalLine({ type, text, prompt }) {
    return type === 'in' ? (
        <div>
            <span>{prompt} </span>
            <span className="text-green-300">{text.replace(`${prompt} `, '')}</span>
        </div>
    ) : (
        <pre className="text-green-500 whitespace-pre-wrap">{text}</pre>
    );
}

// -------------------- Sample Projects --------------------
const sampleProjects = [
    { id: 'project-1', title: 'Terminal Portfolio', tech: 'React • Tailwind • CLI Style' },
];

// -------------------- Utility --------------------
function enterFullscreen() {
    const el = document.documentElement;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
}
