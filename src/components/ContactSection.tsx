import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-[#0d0d0d] border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
            Let's Talk Code &amp; Systems
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight font-display">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-white/40 leading-relaxed">
            Whether you want to discuss full-stack engineering roles, internship opportunities, or debug a weird WebSocket race condition — my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6 shadow-xl shadow-black/40">
              <h3 className="text-xl font-medium text-white font-display">
                Contact Information
              </h3>
              
              <div className="space-y-4 text-sm">
                
                {/* Email item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-white/30 font-mono uppercase tracking-widest block">Email</span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-white hover:text-indigo-400 font-normal transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2 text-white/40 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-white/30 font-mono uppercase tracking-widest block">Phone</span>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-white hover:text-indigo-400 font-normal transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    title="Copy Phone Number"
                    className="p-2 text-white/40 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location item */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/30 font-mono uppercase tracking-widest block">Location</span>
                    <span className="text-white font-normal">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase block mb-3">
                  Developer Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/15 text-white/80 hover:text-white text-xs font-medium transition-colors"
                  >
                    <Github className="w-4 h-4 text-white" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/15 text-white/80 hover:text-white text-xs font-medium transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#0077b5]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-xl shadow-black/40 space-y-6">
              <div>
                <h3 className="text-xl font-medium text-white font-display">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-white/40 mt-1">
                  Have an internship opening, full-stack project, or engineering inquiry? Drop a line below.
                </p>
              </div>

              {isSent && (
                <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs flex items-center gap-2 animate-in fade-in">
                  <Check className="w-4 h-4" />
                  <span>Thank you! Your message has been received. I'll get back to you promptly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-white/60 font-mono text-[10px] uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-white/5 text-[#e5e5e5] border border-white/10 focus:border-white/30 focus:outline-none transition-colors placeholder:text-white/30 font-mono text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-white/60 font-mono text-[10px] uppercase tracking-wider">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-white/5 text-[#e5e5e5] border border-white/10 focus:border-white/30 focus:outline-none transition-colors placeholder:text-white/30 font-mono text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/60 font-mono text-[10px] uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="SDE Opportunity / Internship / Project Collaboration"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-white/5 text-[#e5e5e5] border border-white/10 focus:border-white/30 focus:outline-none transition-colors placeholder:text-white/30 font-mono text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/60 font-mono text-[10px] uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hey Manmeet, saw your projects and LeetCode grind. We'd love to chat about an engineering role / collaboration..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-white/5 text-[#e5e5e5] border border-white/10 focus:border-white/30 focus:outline-none transition-colors resize-none placeholder:text-white/30 font-mono text-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-black hover:bg-white/90 disabled:opacity-40 font-bold uppercase tracking-wider text-xs transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

