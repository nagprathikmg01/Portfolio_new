import { useState, useEffect } from 'react';
import { X, User, Mail, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function VisitorNotification() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // Check if visitor has already submitted or dismissed
        const hasVisited = localStorage.getItem('portfolio_visitor_log');
        if (!hasVisited) {
            // Show modal after a short delay (e.g., 2 seconds)
            const timer = setTimeout(() => setIsOpen(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email) return;

        // Simulate sending data or logging
        const visitorData = {
            name,
            email,
            timestamp: new Date().toISOString(),
        };

        console.log('New Visitor Logged:', visitorData);

        // Save to localStorage to prevent showing again
        localStorage.setItem('portfolio_visitor_log', JSON.stringify(visitorData));

        setSubmitted(true);

        // Close modal after success message
        setTimeout(() => {
            setIsOpen(false);
        }, 2000);
    };

    const handleDismiss = () => {
        // If user dismisses, maybe don't show again for this session or day? 
        // User requirement: "Prompt once to collect"
        // I'll set a "dismissed" flag in localStorage so it doesn't pop up every refresh.
        localStorage.setItem('portfolio_visitor_log', 'dismissed');
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-full max-w-md bg-surface p-8 rounded-2xl border border-white/10 shadow-2xl relative"
                    >
                        <button
                            onClick={handleDismiss}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {!submitted ? (
                            <>
                                <h2 className="text-2xl font-bold text-white mb-2">Welcome! 👋</h2>
                                <p className="text-gray-400 mb-6">
                                    Thanks for visiting my portfolio. I'd love to know who stopped by!
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 pl-1">Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="John Doe"
                                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 text-white placeholder-gray-600 transition-colors"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 pl-1">Email</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="john@example.com"
                                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 text-white placeholder-gray-600 transition-colors"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full mt-2 py-3 bg-primary hover:bg-secondary text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <span>Let's Connect</span>
                                        <Send className="w-4 h-4" />
                                    </button>

                                    <p className="text-xs text-gray-500 text-center mt-4">
                                        I respect your privacy. No spam, just saying hi!
                                    </p>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-4">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                                <p className="text-gray-400">Great to have you here. Enjoy exploring!</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
