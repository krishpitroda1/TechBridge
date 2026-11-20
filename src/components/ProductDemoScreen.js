"use client";
import React, { useState } from "react";
import { 
  CheckCircle2, Clock, Calendar, MessageSquare, Phone, Send, Search, Download, 
  Play, Users, DollarSign, Activity, Dumbbell, ShieldCheck, Star, Sparkles, 
  ChevronRight, ArrowRight, ExternalLink, RefreshCw, BarChart3, Layers, Filter
} from "lucide-react";

export default function ProductDemoScreen({ product, activeView = "screen" }) {
  const [activeTab, setActiveTab] = useState("screen"); // "screen", "mobile", "workflow"
  const [demoState, setDemoState] = useState({
    sentWhatsApp: false,
    selectedSlot: "8:00 PM - 9:00 PM",
    activeExerciseSet: 3,
    crmStage: "Proposal Sent",
    astroQuery: "",
    astroAnswer: null,
    khataFilter: "all"
  });

  if (!product) return null;

  return (
    <div className="w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl text-slate-100">
      {/* Top Browser / App chrome bar */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="ml-3 hidden sm:flex items-center gap-1.5 px-3 py-1 bg-slate-800/80 rounded-full text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            https://{product.id}.techbridge.website/demo
          </div>
        </div>

        {/* View toggles */}
        <div className="flex items-center gap-1 bg-slate-800/90 p-1 rounded-lg text-xs">
          <button
            onClick={() => setActiveTab("screen")}
            className={`px-3 py-1 rounded-md transition-all font-medium ${
              activeTab === "screen" ? "bg-brand-red text-white shadow" : "text-slate-400 hover:text-white"
            }`}
          >
            UI Screenshot
          </button>
          <button
            onClick={() => setActiveTab("workflow")}
            className={`px-3 py-1 rounded-md transition-all font-medium ${
              activeTab === "workflow" ? "bg-brand-red text-white shadow" : "text-slate-400 hover:text-white"
            }`}
          >
            Live Demo
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`px-3 py-1 rounded-md transition-all font-medium ${
              activeTab === "specs" ? "bg-brand-red text-white shadow" : "text-slate-400 hover:text-white"
            }`}
          >
            Tech Specs
          </button>
        </div>
      </div>

      {/* Main Interactive Screen Content — fixed height, overflow hidden to keep all cards uniform */}
      <div className="p-4 sm:p-5 bg-gradient-to-b from-slate-900 to-slate-950 h-[420px] sm:h-[460px] flex flex-col justify-between overflow-hidden">
        {activeTab === "screen" && (
          <div className="w-full h-full flex flex-col gap-3 overflow-hidden">
            {/* CliniCAll Screen */}
            {product.id === "clinicall" && (
              <div className="flex flex-col gap-3 h-full overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/60 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-base shrink-0">
                      +
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-white">Dr. Mehta Multispeciality Clinic</div>
                      <div className="text-[11px] text-slate-400">Today: 24 Appointments • 18 Done • 4 Queue</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-[11px] font-medium rounded-full flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Live Queue
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 shrink-0">
                  <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/40">
                    <div className="text-[11px] text-slate-400">Wait Time</div>
                    <div className="text-lg font-bold text-white mt-0.5">~8 Mins</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">-40% vs avg</div>
                  </div>
                  <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/40">
                    <div className="text-[11px] text-slate-400">WhatsApp</div>
                    <div className="text-lg font-bold text-sky-400 mt-0.5">Auto</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Rx & Confirm</div>
                  </div>
                  <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/40">
                    <div className="text-[11px] text-slate-400">Active</div>
                    <div className="text-sm font-bold text-white mt-0.5 truncate">Aarav Sharma</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Token #19</div>
                  </div>
                </div>

                <div className="bg-slate-800/40 rounded-xl border border-slate-700/50 overflow-hidden text-xs flex-1 min-h-0">
                  <div className="p-2.5 bg-slate-800/80 font-semibold text-slate-300 flex justify-between items-center">
                    <span>EMR Queue</span>
                    <span className="text-[11px] text-sky-400">1-Click WhatsApp Rx</span>
                  </div>
                  <div className="divide-y divide-slate-700/50 overflow-hidden">
                    {[
                      { token: "#19", name: "Aarav Sharma (32M)", issue: "Viral Fever", status: "In Cabin", time: "07:15 PM" },
                      { token: "#20", name: "Sunita Patel (45F)", issue: "Diabetes Review", status: "Waiting", time: "07:30 PM" },
                      { token: "#21", name: "Vikram Shah (28M)", issue: "Migraine", status: "Confirmed", time: "07:45 PM" }
                    ].map((p, idx) => (
                      <div key={idx} className="p-2.5 flex items-center justify-between hover:bg-slate-800/30">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-mono bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded font-bold text-[11px] shrink-0">{p.token}</span>
                          <div className="min-w-0">
                            <div className="font-medium text-white text-[11px] truncate">{p.name}</div>
                            <div className="text-slate-400 text-[10px] truncate">{p.issue}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-slate-400 font-mono text-[10px]">{p.time}</span>
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                            p.status === "In Cabin" ? "bg-amber-500/20 text-amber-300" : "bg-slate-700 text-slate-300"
                          }`}>{p.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Chitra Bharat Screen */}
            {product.id === "chitra-bharat" && (
              <div className="flex flex-col gap-3 h-full overflow-hidden">
                <div className="flex items-center justify-between gap-2 bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/60 shrink-0">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <Search className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="text-[11px] text-white font-medium truncate">Diwali Celebration, Varanasi Ghats 4K, Rajasthan Folk</span>
                  </div>
                  <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-[11px] font-medium rounded-full shrink-0">35,000+</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 shrink-0">
                  {[
                    { title: "Varanasi Ganga Aarti", type: "4K Video", tag: "Spiritual" },
                    { title: "Diwali Diyas & Rangoli", type: "RAW Photo", tag: "Festivals" },
                    { title: "Indian Folk Santoor", type: "Audio 320k", tag: "Music" },
                    { title: "Kathakali Dancer", type: "Ultra HD", tag: "Culture" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-800/60 p-2 rounded-xl border border-slate-700/40 flex flex-col gap-1.5 group hover:border-orange-500/50 transition-all">
                      <div className="aspect-[4/3] rounded-lg bg-gradient-to-tr from-amber-950/60 to-orange-900/40 flex items-center justify-center relative overflow-hidden">
                        <span className="text-[9px] font-bold text-orange-300 uppercase bg-black/60 px-1.5 py-0.5 rounded-full absolute top-1 left-1">{item.type}</span>
                        <Play className="w-5 h-5 text-white/70 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="font-semibold text-[11px] text-white truncate">{item.title}</div>
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>{item.tag}</span>
                        <span className="text-orange-400">Free</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-2.5 flex items-center justify-between text-[11px] shrink-0">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="text-orange-200">100% Indian-Made • Commercial Rights Granted</span>
                  </div>
                  <span className="text-orange-400 font-semibold whitespace-nowrap">Browse →</span>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-auto shrink-0">
                  {[
                    { label: "Photos", val: "18,000+" }, { label: "4K Videos", val: "9,500+" }, { label: "Audio Tracks", val: "7,500+" }
                  ].map((s, i) => (
                    <div key={i} className="bg-slate-800/50 rounded-lg p-2 text-center">
                      <div className="font-bold text-sm text-white">{s.val}</div>
                      <div className="text-[10px] text-slate-400">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Data Sandook Screen */}
            {product.id === "data-sandook" && (
              <div className="flex flex-col gap-3 h-full overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/60 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-xs text-white">B2B Deal Pipeline</span>
                    <span className="text-[11px] text-slate-400 font-mono">• 142 Leads</span>
                  </div>
                  <span className="text-emerald-400 font-semibold text-[11px]">₹48.5 Lakhs Pipeline</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs flex-1 min-h-0">
                  {[
                    { stage: "Prospecting", count: "42", lead: "CloudScale India", person: "Rohan Patel, CTO", val: "₹4.5L", tag: "Email Verified", color: "text-slate-300" },
                    { stage: "Qualified", count: "18", lead: "FinTech Orbit", person: "Ananya Roy, Growth", val: "₹7.2L", tag: "Intent: High", color: "text-blue-300" },
                    { stage: "Proposal", count: "9", lead: "Apex Logistics", person: "Sandeep Rao, COO", val: "₹12.0L", tag: "WA Sent", color: "text-amber-300" },
                    { stage: "Closing", count: "5", lead: "Zenith Retail", person: "Vikram M., VP Tech", val: "₹15.8L", tag: "Sign Ready", color: "text-emerald-300" }
                  ].map((col, idx) => (
                    <div key={idx} className="bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/40 flex flex-col gap-2">
                      <div className="flex justify-between items-center pb-1.5 border-b border-slate-700/60">
                        <span className={`font-bold text-[11px] ${col.color}`}>{col.stage} ({col.count})</span>
                        <span className="text-[10px] text-blue-400 font-mono">{col.val}</span>
                      </div>
                      <div className="bg-slate-800/90 p-2 rounded-lg border border-slate-700/70">
                        <div className="font-bold text-white text-[11px] truncate">{col.lead}</div>
                        <div className="text-[10px] text-slate-300 mt-0.5 truncate">{col.person}</div>
                        <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-slate-700/50">
                          <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.5 rounded font-mono truncate max-w-[60%]">{col.tag}</span>
                          <span className="text-blue-400 font-bold text-[10px]">{col.val}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-between text-[11px] text-blue-200 shrink-0">
                  <span>10M+ B2B Contacts • Direct phone, verified email & LinkedIn URLs</span>
                  <span className="font-semibold text-blue-400 whitespace-nowrap ml-2">98.4% Accuracy</span>
                </div>
              </div>
            )}

            {/* Digital Play Screen */}
            {product.id === "digital-play" && (
              <div className="flex flex-col gap-3 h-full overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/60 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-xs text-white">Omni-Channel Campaign Studio</span>
                    <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-mono">RCS + WhatsApp</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-mono">99.98% Delivery</span>
                </div>

                <div className="grid grid-cols-3 gap-2 flex-1 min-h-0 overflow-hidden">
                  {/* Phone preview */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-col gap-2 overflow-hidden col-span-1">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">RCS Preview</div>
                    <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex flex-col gap-1.5 flex-1">
                      <div className="h-12 bg-gradient-to-r from-red-600 to-amber-600 rounded flex items-center justify-center text-[11px] font-bold text-white">
                        🎉 Festive Offer — 40% Off
                      </div>
                      <div className="text-[11px] font-semibold text-white">Exclusive VIP Access</div>
                      <div className="text-[10px] text-slate-400 leading-tight">Priority access + free onboarding call this week.</div>
                      <div className="flex flex-col gap-1 mt-auto">
                        <button className="w-full py-1 bg-red-500 text-white rounded text-[10px] font-semibold">Claim Discount (1-Tap)</button>
                        <button className="w-full py-1 bg-slate-800 text-slate-300 rounded text-[10px]">Chat with Support</button>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="col-span-2 flex flex-col gap-2 overflow-hidden">
                    <div className="grid grid-cols-2 gap-2 text-xs shrink-0">
                      <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/40">
                        <div className="text-[10px] text-slate-400">RCS Rich Cards</div>
                        <div className="text-base font-bold text-white mt-0.5">1.45M</div>
                        <div className="text-emerald-400 text-[10px] mt-0.5">78.2% Read Rate</div>
                      </div>
                      <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/40">
                        <div className="text-[10px] text-slate-400">WhatsApp API</div>
                        <div className="text-base font-bold text-white mt-0.5">820K</div>
                        <div className="text-emerald-400 text-[10px] mt-0.5">94.1% Delivery</div>
                      </div>
                    </div>

                    <div className="bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/40 text-xs flex-1">
                      <div className="font-semibold text-slate-200 text-[11px] mb-1">Multi-Channel Routing Engine</div>
                      <div className="text-slate-400 text-[10px] leading-relaxed mb-2">
                        Auto-fallback: RCS → WhatsApp → A2P SMS within 400ms if handset unsupported.
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {["Google RCS", "WhatsApp API", "A2P SMS", "Voice OBD"].map(c => (
                          <span key={c} className="px-1.5 py-0.5 rounded bg-slate-700 text-slate-300 text-[10px]">{c}</span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 shrink-0">
                      <div className="bg-slate-800/50 p-2 rounded-xl border border-slate-700/40 text-center">
                        <div className="font-bold text-sm text-white">25M+</div>
                        <div className="text-[10px] text-slate-400">Monthly Volume</div>
                      </div>
                      <div className="bg-slate-800/50 p-2 rounded-xl border border-slate-700/40 text-center">
                        <div className="font-bold text-sm text-white">99.98%</div>
                        <div className="text-[10px] text-slate-400">Platform Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Khatavahi Screen */}
            {product.id === "khatavahi" && (
              <div className="flex flex-col gap-3 h-full overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/60 shrink-0">
                  <div>
                    <span className="font-semibold text-xs text-white">Shree Ganesh Kirana & General Store</span>
                    <div className="text-[10px] text-slate-400">Rajkot, Gujarat • Daily Khata Balance</div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[10px]">
                    <span className="text-red-400 font-bold bg-red-500/10 px-1.5 py-0.5 rounded whitespace-nowrap">Give: ₹14,200</span>
                    <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded whitespace-nowrap">Get: ₹68,450</span>
                  </div>
                </div>

                <div className="bg-slate-800/40 rounded-xl border border-slate-700/50 overflow-hidden text-xs flex-1 min-h-0">
                  <div className="p-2.5 bg-slate-800/80 font-semibold text-slate-300 flex justify-between items-center">
                    <span>Udhar / Jama Ledger</span>
                    <span className="text-[11px] text-emerald-400">WhatsApp Reminders</span>
                  </div>
                  <div className="divide-y divide-slate-700/50 overflow-hidden">
                    {[
                      { name: "Patel Provision Store", phone: "+91 98251 XXXXX", due: "₹18,500", date: "Due in 2 days", status: "Udhar Pending" },
                      { name: "Rajeshbhai Kirana", phone: "+91 94282 XXXXX", due: "₹12,400", date: "Sent WhatsApp", status: "Reminder Sent" },
                      { name: "Shreenathji Dairy", phone: "+91 99099 XXXXX", due: "₹24,000", date: "Paid Today", status: "Settled (UPI)" }
                    ].map((entry, idx) => (
                      <div key={idx} className="p-2.5 flex items-center justify-between hover:bg-slate-800/30">
                        <div className="min-w-0">
                          <div className="font-medium text-white text-[11px] truncate">{entry.name}</div>
                          <div className="text-slate-400 text-[10px] truncate">{entry.phone} • {entry.date}</div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`font-bold font-mono text-[11px] ${entry.status === 'Settled (UPI)' ? 'text-emerald-400' : 'text-red-400'}`}>
                            {entry.due}
                          </span>
                          <button
                            onClick={() => {
                              setDemoState(prev => ({ ...prev, sentWhatsApp: true }));
                              setTimeout(() => setDemoState(prev => ({ ...prev, sentWhatsApp: false })), 3000);
                            }}
                            className="px-2 py-0.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[10px] font-medium transition-colors flex items-center gap-1 whitespace-nowrap"
                          >
                            <Send className="w-2.5 h-2.5" />
                            {demoState.sentWhatsApp ? "Sent!" : "Remind"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 shrink-0">
                  {[{ val: "₹18 Cr+", label: "Udhar Recovered" }, { val: "3x", label: "Faster Payments" }, { val: "15,000+", label: "Active Merchants" }].map((m, i) => (
                    <div key={i} className="bg-emerald-500/10 border border-emerald-500/20 p-2 rounded-xl text-center">
                      <div className="font-bold text-sm text-emerald-300">{m.val}</div>
                      <div className="text-[10px] text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-between text-[10px] text-emerald-200 shrink-0">
                  <span>Gujarati, Hindi, Marathi & English • GST Invoices & Thermal Bills</span>
                  <span className="font-semibold text-emerald-400 whitespace-nowrap ml-1">Offline-Ready</span>
                </div>
              </div>
            )}

            {/* GymPulse Screen */}
            {product.id === "gympulse" && (
              <div className="flex flex-col gap-3 h-full overflow-hidden">
                <div className="flex items-center justify-between gap-2 bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/60 shrink-0">
                  <div className="flex items-center gap-2">
                    <Dumbbell className="w-3.5 h-3.5 text-violet-400" />
                    <span className="font-semibold text-xs text-white">Push Day Hypertrophy • Active Session</span>
                  </div>
                  <span className="text-[11px] font-mono text-violet-300 bg-violet-500/20 px-2 py-0.5 rounded">Rest: 00:45</span>
                </div>

                <div className="grid grid-cols-3 gap-2 shrink-0">
                  <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/40">
                    <div className="text-[10px] text-slate-400">Exercise</div>
                    <div className="text-xs font-bold text-white mt-0.5">Incline Bench Press</div>
                    <div className="text-[10px] text-violet-400 mt-0.5">Chest & Ant. Delt</div>
                  </div>
                  <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/40">
                    <div className="text-[10px] text-slate-400">Volume Target</div>
                    <div className="text-xs font-bold text-white mt-0.5">4 × 8-10 Reps</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">PR: 105kg (+2.5kg)</div>
                  </div>
                  <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/40">
                    <div className="text-[10px] text-slate-400">Calories & Macro</div>
                    <div className="text-xs font-bold text-white mt-0.5">2,340 / 2,600</div>
                    <div className="text-[10px] text-amber-400 mt-0.5">165g Protein ✓</div>
                  </div>
                </div>

                <div className="bg-slate-800/40 rounded-xl border border-slate-700/50 p-3 text-xs flex-1 min-h-0">
                  <div className="flex justify-between items-center text-slate-300 font-semibold pb-1.5 border-b border-slate-700/40 mb-2">
                    <span>Set Progression (RPE 8.5)</span>
                    <span className="text-violet-400 font-mono text-[10px]">Volume: 3,420 kg</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {[
                      { set: "Set 1", weight: "80 kg", reps: "10", status: "Done ✓" },
                      { set: "Set 2", weight: "90 kg", reps: "10", status: "Done ✓" },
                      { set: "Set 3", weight: "100 kg", reps: "8", status: "Active 🔥" },
                      { set: "Set 4", weight: "105 kg", reps: "6", status: "Next" }
                    ].map((s, idx) => (
                      <div key={idx} className={`p-2 rounded-lg border ${
                        s.status.includes('Active') ? 'bg-violet-600/30 border-violet-500 text-white font-bold' : 'bg-slate-800/70 border-slate-700 text-slate-300'
                      }`}>
                        <div className="text-[10px] text-slate-400">{s.set}</div>
                        <div className="font-mono text-xs">{s.weight}</div>
                        <div className="text-[10px] text-slate-300">{s.reps} reps</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 shrink-0">
                  {[{ val: "450+", label: "Exercises" }, { val: "120K+", label: "Workouts Logged" }, { val: "100%", label: "PR Tracking" }].map((m, i) => (
                    <div key={i} className="bg-violet-500/10 border border-violet-500/20 p-2 rounded-xl text-center">
                      <div className="font-bold text-sm text-violet-300">{m.val}</div>
                      <div className="text-[10px] text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TurfSpot Screen */}
            {product.id === "turfspot" && (
              <div className="flex flex-col gap-3 h-full overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/60 shrink-0">
                  <div>
                    <span className="font-semibold text-xs text-white">Skyline Sports Arena</span>
                    <div className="text-[10px] text-slate-400">Turf #1 • Floodlight & FIFA Grade Synthetic</div>
                  </div>
                  <span className="px-2.5 py-0.5 bg-green-500/20 text-green-400 text-[11px] font-semibold rounded-full shrink-0">Instant Booking</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs shrink-0">
                  {[
                    { time: "06–07 PM", status: "Booked", price: "₹1,200", available: false },
                    { time: "07–08 PM", status: "Booked", price: "₹1,400", available: false },
                    { time: "08–09 PM", status: "Available", price: "₹1,500", available: true },
                    { time: "09–10 PM", status: "Available", price: "₹1,500", available: true }
                  ].map((slot, idx) => (
                    <button
                      key={idx}
                      onClick={() => slot.available && setDemoState(prev => ({ ...prev, selectedSlot: slot.time }))}
                      className={`p-2 rounded-xl border text-left transition-all ${
                        slot.available
                          ? demoState.selectedSlot === slot.time
                            ? "bg-green-600/30 border-green-500 text-white"
                            : "bg-slate-800/80 border-slate-700 hover:border-green-500/50 text-slate-300"
                          : "bg-slate-900/60 border-slate-800 opacity-50 cursor-not-allowed text-slate-500"
                      }`}
                    >
                      <div className="font-mono text-[11px]">{slot.time}</div>
                      <div className="flex justify-between items-center mt-1">
                        <span className={`text-[10px] font-bold ${slot.available ? "text-green-400" : "text-slate-500"}`}>{slot.status}</span>
                        <span className="font-mono font-semibold text-[11px]">{slot.price}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/50 flex flex-wrap items-center justify-between gap-2 text-xs shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">👥</div>
                    <div>
                      <div className="font-semibold text-white text-[11px]">Find a Player — "Box Cricket Warriors"</div>
                      <div className="text-slate-400 text-[10px]">2 players needed • 8 PM • Split ₹150/player</div>
                    </div>
                  </div>
                  <button className="px-2.5 py-1 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg text-[11px] transition-colors whitespace-nowrap">
                    Join & Split
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-auto shrink-0">
                  {[{ val: "250+", label: "Partner Venues" }, { val: "18K+", label: "Matches Hosted" }, { val: "15 sec", label: "Instant Booking" }].map((m, i) => (
                    <div key={i} className="bg-green-500/10 border border-green-500/20 p-2 rounded-xl text-center">
                      <div className="font-bold text-sm text-green-300">{m.val}</div>
                      <div className="text-[10px] text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AstroAI Screen */}
            {product.id === "astroai" && (
              <div className="flex flex-col gap-3 h-full overflow-hidden">
                <div className="flex items-center justify-between gap-2 bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/60 shrink-0">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                    <span className="font-semibold text-xs text-white">Vedic Kundali & AI Astrologer Engine</span>
                  </div>
                  <span className="text-[10px] font-mono text-fuchsia-300 bg-fuchsia-500/20 px-2 py-0.5 rounded whitespace-nowrap">Swiss Ephemeris 99.99%</span>
                </div>

                <div className="grid grid-cols-3 gap-3 flex-1 min-h-0 overflow-hidden">
                  {/* Kundali chart */}
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex flex-col items-center justify-center gap-2">
                    <div className="text-[10px] text-fuchsia-300 font-mono uppercase tracking-wider">Lagna Chart</div>
                    <div className="w-28 h-28 border border-fuchsia-500/40 grid grid-cols-2 grid-rows-2 p-0.5 text-[9px] font-mono text-fuchsia-200">
                      {[["Asc / Su", "H1"], ["Mo / Ju", "H4"], ["Ve / Me", "H7"], ["Sa (R)", "H10"]].map(([planet, house]) => (
                        <div key={house} className="border border-fuchsia-500/20 p-1 flex flex-col justify-between">
                          <span>{planet}</span>
                          <span className="text-[8px] text-slate-400">{house}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-[10px] text-slate-400 text-center">Aries Ascendant</div>
                  </div>

                  {/* AI Chat */}
                  <div className="col-span-2 bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/50 flex flex-col gap-2 overflow-hidden">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Pandit AI — Live Consultation</div>
                    <div className="flex flex-col gap-2 flex-1 overflow-hidden">
                      <div className="flex gap-1.5 items-start">
                        <span className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[9px] shrink-0">U</span>
                        <div className="bg-slate-800 p-1.5 rounded-lg text-slate-200 text-[10px] leading-relaxed">
                          Career & financial outlook for 2027 — Jupiter transit?
                        </div>
                      </div>
                      <div className="flex gap-1.5 items-start">
                        <span className="w-5 h-5 rounded-full bg-fuchsia-600 flex items-center justify-center text-[9px] text-white shrink-0">AI</span>
                        <div className="bg-fuchsia-950/60 border border-fuchsia-800/40 p-1.5 rounded-lg text-slate-100 text-[10px] leading-relaxed">
                          Jupiter Mahadasha + Mercury Antardasha activates 10th House. High probability for venture initiation & cross-border expansion in Q2 2027.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 pt-1.5 border-t border-slate-700/50 shrink-0">
                      <input readOnly placeholder="Ask your next question..." className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-slate-400 text-[10px]" />
                      <button className="px-2.5 py-1 bg-fuchsia-600 text-white rounded-lg text-[10px] font-semibold whitespace-nowrap">Ask</button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 shrink-0">
                  {[{ val: "250K+", label: "Kundalis" }, { val: "10+ Languages", label: "Multilingual AI" }, { val: "24/7", label: "Live Pandit AI" }].map((m, i) => (
                    <div key={i} className="bg-fuchsia-500/10 border border-fuchsia-500/20 p-2 rounded-xl text-center">
                      <div className="font-bold text-xs text-fuchsia-300">{m.val}</div>
                      <div className="text-[10px] text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Live Workflow Demonstration Tab */}
        {activeTab === "workflow" && (
          <div className="flex flex-col gap-3 h-full overflow-hidden">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4 text-brand-red" />
                Live Execution Flow: {product.name}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Step-by-step automated workflow illustrating how {product.name} solves the core friction for its target users ({product.target}).
              </p>
            </div>

            <div className="grid sm:grid-cols-4 gap-3 text-xs">
              {[
                { step: "01", title: "User Onboarding", desc: "Instant zero-friction profile creation or integration." },
                { step: "02", title: "Core Execution", desc: "Real-time data processing, API triggering & synchronization." },
                { step: "03", title: "Automated Triggers", desc: "Automated notifications, messages, and transactional hooks." },
                { step: "04", title: "Insight & Reporting", desc: "Comprehensive actionable analytics and revenue tracking." }
              ].map((step, idx) => (
                <div key={idx} className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/40 relative">
                  <div className="font-mono text-brand-red text-xs font-bold mb-1">{step.step}</div>
                  <div className="font-semibold text-white text-xs mb-1">{step.title}</div>
                  <div className="text-[11px] text-slate-400">{step.desc}</div>
                </div>
              ))}
            </div>

            <div className="bg-brand-red/10 border border-brand-red/30 p-4 rounded-xl flex items-center justify-between text-xs">
              <div>
                <span className="font-semibold text-white">Target Market Fit: </span>
                <span className="text-slate-300">{product.target}</span>
              </div>
              <a
                href={product.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-brand-red text-white font-medium rounded-lg hover:bg-red-600 transition-colors inline-flex items-center gap-1.5"
              >
                Launch Live Demo <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Technical Architecture Specs Tab */}
        {activeTab === "specs" && (
          <div className="flex flex-col gap-3 h-full overflow-hidden">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-red" />
                  Engineering & Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-200 rounded-md text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                  Key Verified Proof Metrics
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {product.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-slate-900/80 p-2 rounded-lg text-center">
                      <div className="text-sm font-bold text-white">{metric.value}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Core Capabilities & Highlights</h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {product.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Footer info bar */}
        <div className="pt-4 mt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Proof of Execution: Active Venture Studio Build</span>
          </div>
          <div className="font-mono text-slate-500">
            TechBridge Proprietary Intellectual Property
          </div>
        </div>
      </div>
    </div>
  );
}
