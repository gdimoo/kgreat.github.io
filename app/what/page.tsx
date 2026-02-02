"use client"
import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'

export default function HBDPage() {
    const [password, setPassword] = useState('')
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    const [age, setAge] = useState(0)
    const [isBirthday, setIsBirthday] = useState(false)
    const [error, setError] = useState(false)

    const correctPassword = '0310'
    const videoId = '9kaCAbIXuyg' // Untitled, 2014 - GD

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (password === correctPassword) {
            setIsAuthorized(true)
            setError(false)
        } else {
            setError(true)
            setPassword('')
        }
    }

    useEffect(() => {
        if (!isAuthorized) return

        const birthYear = 1997
        const birthMonth = 1 // February
        const birthDate = 3

        const timer = setInterval(() => {
            const now = new Date()
            const currentYear = now.getFullYear()

            // เช็คว่าเป็นวันเกิดหรือยัง (วันที่ 3 ก.พ. เป็นต้นไป)
            const isTodayBirthday = now.getMonth() === birthMonth && now.getDate() >= birthDate

            // ยิงพลุครั้งเดียวเมื่อเข้าสู่วันเกิดในขณะที่หน้าเว็บเปิดอยู่
            if (isTodayBirthday && !isBirthday) {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#6366f1', '#a855f7', '#ec4899']
                })
            }
            setIsBirthday(isTodayBirthday)

            // คำนวณอายุ
            let currentAge = currentYear - birthYear
            if (!isTodayBirthday && now.getMonth() <= birthMonth) {
                currentAge -= 1
            }
            setAge(currentAge)

            // เป้าหมาย Countdown
            let targetDate = new Date(currentYear, birthMonth, birthDate, 0, 0, 0)
            if (now > targetDate && !isTodayBirthday) {
                targetDate = new Date(currentYear + 1, birthMonth, birthDate, 0, 0, 0)
            }

            const difference = targetDate.getTime() - now.getTime()

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                })
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [isAuthorized, isBirthday])

    if (!isAuthorized) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-4">
                <form onSubmit={handleLogin} className="bg-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 shadow-[0_0_50px_-12px_rgba(99,102,241,0.5)] max-w-sm w-full space-y-6">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-indigo-400">Locked with Love</h2>
                        <p className="text-slate-500 text-sm mt-2">กรอกวันเกิดของเค้าหน่อยนะ</p>
                    </div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-4 text-center text-3xl tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
                        placeholder="••••"
                        maxLength={4}
                    />
                    {error && <p className="text-pink-500 text-sm text-center animate-bounce">รหัสผิดนะ ลองใหม่สิเตง!</p>}
                    <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95">
                        Unlock
                    </button>
                </form>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white font-sans p-4 overflow-hidden relative">
            <div className="hidden">
                <iframe width="0" height="0" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`} allow="autoplay"></iframe>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />

            <div className="text-center space-y-10 animate-in fade-in zoom-in duration-1000">

                {/* ส่วนหัวข้อ: เปลี่ยนตามเวลา */}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                        {isBirthday ? (
                            <span className="bg-gradient-to-b from-white to-indigo-400 bg-clip-text text-transparent animate-pulse">
                                Happy Birthday, Film! 🎂
                            </span>
                        ) : (
                            <span className="text-slate-500">Birthday Countdown</span>
                        )}
                    </h1>
                </div>

                {/* ส่วนอายุ: จะขึ้นเมื่อถึงวันเกิดเท่านั้น */}
                {isBirthday && (
                    <div className="space-y-2 animate-in slide-in-from-bottom duration-1000">
                        <p className="text-2xl font-light text-slate-300">
                            ปีนี้อายุ <span className="text-white font-bold text-4xl">{age}</span> ปีแล้วนะ
                        </p>
                        <p className="text-sm text-slate-500 italic tracking-widest uppercase">올해 {age}살 축하해요!</p>
                    </div>
                )}

                {/* ตัวเลข Countdown: ซ่อนเมื่อถึงวันเกิด หรือจะโชว์เป็น 00 ก็ได้ */}
                {!isBirthday && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
                        {Object.entries(timeLeft).map(([label, value]) => (
                            <div key={label} className="flex flex-col p-6 bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-800">
                                <span className="text-4xl md:text-6xl font-mono font-black text-white">
                                    {String(value).padStart(2, '0')}
                                </span>
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-indigo-500 font-bold mt-2">{label}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* ข้อความอวยพร: ค่อยๆ ปรากฏหลังเที่ยงคืน */}
                {isBirthday && (
                    <div className="mt-12 p-8 bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-800 max-w-lg mx-auto shadow-2xl relative overflow-hidden animate-in fade-in duration-[2000ms]">
                        <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                        <p className="text-slate-300 text-lg leading-relaxed text-left">
                            "ขอให้มีความสุขในทุกๆ วัน เป็นโปรแกรมเมอร์ที่เก่งและมีความสุขที่สุด <br />
                            ดีใจที่มีคุณอยู่ข้างๆ ในทุกปีนะ รักนะ จุ๊บๆ 💖 <br />
                            <span className="block mt-4 text-white font-bold text-right">— จาก เกรธ คนสวยของเตง</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}