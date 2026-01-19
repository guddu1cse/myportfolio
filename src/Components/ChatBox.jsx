import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { name } from "../config/config";
import ailogo from '../assets/sel.png';
import Gemini from "./Gemini";
const aiBaseURL = process.env.REACT_APP_AI_BASE_URL;
const authToken = process.env.REACT_APP_AUTH_TOKEN_KEY;

export default function ChatBox() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [generating, setGenerating] = useState(false);
    const [messages, setMessages] = useState([
        { from: "ai", text: `Hello! 👋 I’m your AI assistant. Ask me anything about ${name}.` },
    ]);
    const [input, setInput] = useState("");
    const [sessionId, setSessionId] = useState("default-session");
    const [isTyping, setIsTyping] = useState(false);
    const typingTimeoutRef = useRef(null);
    const chatEndRef = useRef(null);
    const showHintTimeout = useRef(null);
    const inputRef = useRef(null);

    const handleFocus = () => {
        setTimeout(() => {
            inputRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
            inputRef.current?.focus();
        }, 300); // 0.3 sec delay
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input;
        setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
        setInput("");
        setGenerating(true);

        const url = `${aiBaseURL}/api/chat/prompt?authToken=${authToken}&sessionId=${sessionId}&prompt=${userMessage}`;
        console.log("Fetching AI response from URL:", url);

        try {
            const response = await fetch(url);
            const result = await response.json();

            if (result.success && result.data) {
                const fullText = result.data.trim();
                // Add an empty AI message first
                setMessages((prev) => [...prev, { from: "ai", text: "" }]);

                // Simulate streaming/typing effect
                let currentText = "";
                for (let i = 0; i < fullText.length; i++) {
                    currentText += fullText[i];
                    setMessages((prev) => {
                        const newMessages = [...prev];
                        newMessages[newMessages.length - 1] = { from: "ai", text: currentText };
                        return newMessages;
                    });

                    // Natural typing speed: faster for common chars, slight variability
                    // Character-based delay between 5ms and 25ms
                    const delay = Math.floor(Math.random() * 20) + 5;
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            } else {
                setMessages((prev) => [
                    ...prev,
                    { from: "ai", text: "I apologize, but I'm having trouble generating a response right now. Please try again shortly. 😔" },
                ]);
            }
        } catch (error) {
            console.error("Error fetching AI response:", error);
            setMessages((prev) => [
                ...prev,
                { from: "ai", text: "Oops! Something went wrong while processing your request. Let's try that again! 🔄" },
            ]);
        } finally {
            setGenerating(false);
        }
    };

    // Auto-scroll
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    //generate session id
    useEffect(() => {
        const generateSessionId = () => {
            return Math.random().toString(36).slice(2, 12); // 10 chars
        };
        setSessionId(generateSessionId());
    }, []);

    const handleInputChange = (e) => {
        setInput(e.target.value);
        // setIsTyping(true);

        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = setTimeout(() => setIsTyping(false), 1000);
    };

    useEffect(() => {
        let focusTimeOut = null;
        if (isOpen) {
            setHasOpened(true);
            setShowHint(false);
            //scrolling input into view when chat is opened
            handleFocus();
            return;
        }

        if (hasOpened) return;
        // Recurring hint every 10 seconds
        const interval = setInterval(() => {
            setShowHint(true);
            if (showHintTimeout.current) clearTimeout(showHintTimeout.current);
            showHintTimeout.current = setTimeout(() => {
                setShowHint(false);
                showHintTimeout.current = null;
            }, 4000); // Show for 4 seconds
        }, 10000); // Repeat every 10 seconds

        return () => {
            clearInterval(interval);
            if (showHintTimeout.current) clearTimeout(showHintTimeout.current);
            if (focusTimeOut) clearTimeout(focusTimeOut);
        };
    }, [isOpen]);

    return (
        <div className="fixed bottom-6 right-6 z-50 font-chat">
            {/* Collapsed Button */}
            {!isOpen ? (
                <div className="flex flex-col items-end">
                    <AnimatePresence>
                        {showHint && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{
                                    opacity: 1,
                                    y: [0, -8, 0],
                                    scale: 1
                                }}
                                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                transition={{
                                    y: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    opacity: { duration: 0.3 },
                                    scale: { type: "spring", stiffness: 300, damping: 15 }
                                }}
                                className="mb-3 mr-2"
                            >
                                <div className="bg-white/90 backdrop-blur-md border border-purple-100 px-4 py-2 rounded-2xl shadow-xl relative">
                                    <p className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                        Ask anything about {name}
                                    </p>
                                    <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-purple-100 rotate-45"></div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className="relative p-[3px] rounded-full overflow-hidden group shadow-2xl">
                        {/* Infinity Rotating Border */}
                        <div className="absolute inset-0 z-0 animate-rotate-border opacity-100"
                            style={{
                                background: "conic-gradient(from 0deg, #FF6F61, #5A189A, #39FF14, #FF6F61)",
                                width: '300%',
                                height: '300%',
                                top: '-100%',
                                left: '-100%'
                            }}
                        />

                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            onClick={() => setIsOpen(true)}
                            className="relative z-10 flex items-center bg-white px-6 py-2.5 rounded-full border border-white/50 backdrop-blur-md transition-all"
                        >
                            <span className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
                                Chat with <Gemini message="selfserve.ai" fontSize={15} />
                            </span>
                        </motion.button>
                    </div>
                </div>
            ) : (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 100, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.8, y: 100, filter: "blur(10px)" }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                        className="
                            w-[100vw] h-[90vh] sm:max-w-sm md:w-[440px] md:h-[640px]
                            rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] 
                            border border-gray-100 bg-white/95 backdrop-blur-md
                            fixed inset-0 sm:relative
                            flex flex-col overflow-hidden
                        "
                    >
                        {/* Header */}
                        <div className="bg-[#0f172a] py-3.5 px-5 flex justify-between items-center relative overflow-hidden border-b border-indigo-500/20">
                            {/* Accent Glow Background */}
                            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

                            <div className="relative z-10 flex items-center">
                                <Gemini message="SelfServe.ai" fontSize={20} />
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-indigo-500/20 text-gray-400 hover:text-indigo-300 transition-all border border-transparent hover:border-indigo-500/20"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-5 space-y-4 overflow-y-auto custom-scrollbar bg-[#f8fafc]">
                            <AnimatePresence mode="popLayout">
                                {messages.map((msg, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                        className={`flex ${msg.from === "ai" ? "justify-start" : "justify-end"}`}
                                    >
                                        <div
                                            className={`px-4 py-2.5 rounded-2xl text-[15px] leading-relaxed shadow-sm ${msg.from === "ai"
                                                ? "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                                                : "bg-indigo-600 text-white rounded-tr-none"
                                                }`}
                                        >
                                            {msg.text ? (
                                                msg.text.split(/(https?:\/\/[^\s]+)/).map((part, j) =>
                                                    /^https?:\/\/[^\s]+$/.test(part) ? (
                                                        <a key={j} href={part} target="_blank" rel="noopener noreferrer" className={`${msg.from === "ai" ? "text-indigo-600" : "text-white/80"} underline font-medium`}>link</a>
                                                    ) : (
                                                        <span key={j}>{part}</span>
                                                    )
                                                )
                                            ) : (
                                                <LoadingDots />
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                                {generating && messages[messages.length - 1]?.from !== "ai" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex justify-start"
                                    >
                                        <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                                            <LoadingDots />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div ref={chatEndRef}></div>
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-white border-t border-gray-100 relative">
                            <AnimatePresence>
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        className="absolute -top-6 left-6"
                                    >
                                        <LoadingDots mini />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div className="relative flex items-center gap-2 bg-gray-50 rounded-xl p-1 border border-gray-200 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                                <input
                                    type="text"
                                    className="flex-1 bg-transparent py-1.5 px-3 outline-none text-[14px] text-gray-700 placeholder:text-gray-400 font-medium"
                                    placeholder={`Type a message...`}
                                    value={input}
                                    ref={inputRef}
                                    onFocus={handleFocus}
                                    onChange={handleInputChange}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                />
                                <motion.button
                                    onClick={handleSend}
                                    disabled={input.length < 3 || generating}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                        w-8 h-8 flex items-center justify-center rounded-lg transition-all
                                        ${input.length >= 3 && !generating
                                            ? "bg-indigo-600 text-white shadow-md cursor-pointer hover:bg-indigo-700"
                                            : "bg-gray-200 text-gray-400 cursor-not-allowed"}
                                    `}
                                >
                                    {generating ? (
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <svg className="w-4 h-4 transform rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                                    )}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
}

const LoadingDots = ({ mini }) => (
    <div className={`flex items-center space-x-1 py-1 ${mini ? 'px-0' : 'px-1'}`}>
        {[0, 1, 2].map((dot) => (
            <motion.div
                key={dot}
                className={`${mini ? 'w-1 h-1' : 'w-2 h-2'} bg-indigo-400 rounded-full`}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 1, 0.4],
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: dot * 0.15,
                }}
            />
        ))}
        {mini && <span className="text-[10px] text-indigo-400 font-semibold ml-1 uppercase tracking-wider">Typing</span>}
    </div>
);

