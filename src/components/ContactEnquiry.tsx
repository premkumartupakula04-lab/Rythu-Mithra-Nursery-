import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Send,
  CheckCircle2,
  User,
  Map,
  AlertCircle,
  Sprout,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS_INFO, CHILLI_VARIETIES } from '../data/nurseryData';

interface ContactEnquiryProps {
  preselectedVariety?: string;
}

export const ContactEnquiry: React.FC<ContactEnquiryProps> = ({ preselectedVariety }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    village: '',
    variety: 'General Chilli Seedlings (Mirapa Naru)',
    quantity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedVariety) {
      setFormData((prev) => ({ ...prev, variety: preselectedVariety }));
    }
  }, [preselectedVariety]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const constructWhatsAppMessage = () => {
    const lines = [
      '🌱 *Rythu Mithra Nursery - Chilli Seedling Enquiry*',
      '----------------------------------------',
      `👤 *Farmer Name / రైతు పేరు:* ${formData.name.trim()}`,
      `📞 *Phone Number / ఫోన్ నంబర్:* ${formData.phone.trim()}`,
      formData.village.trim()
        ? `📍 *Village / Location:* ${formData.village.trim()}`
        : '',
      `🌶️ *Variety / రకం:* ${formData.variety}`,
      formData.quantity.trim()
        ? `🌾 *Quantity / Acres:* ${formData.quantity.trim()}`
        : '',
      formData.message.trim()
        ? `📝 *Notes / సందేశం:* ${formData.message.trim()}`
        : '',
      '----------------------------------------',
      '🙏 *Khakmuri Venkata Reddy Garu, please share current batch availability & booking details.*',
    ];
    return lines.filter(Boolean).join('\n');
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(constructWhatsAppMessage());
    return `https://wa.me/91${BUSINESS_INFO.phone}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide both your Name and Contact Phone Number.');
      return;
    }

    setSubmitted(true);

    // Directly open WhatsApp with 9949247738 containing all seedling enquiry details
    const waUrl = getWhatsAppUrl();
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      village: '',
      variety: 'General Chilli Seedlings (Mirapa Naru)',
      quantity: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#fbfcf9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            Direct Nursery Communication
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e381f] tracking-tight font-display mb-4"
          >
            Looking for Quality Chilli Seedlings?
          </h2>
          <p
            id="contact-subtext"
            className="text-lg sm:text-xl text-stone-600 font-normal"
          >
            Contact Rythu Mithra Nursery directly. Call or send your seedling enquiry details to <span className="font-bold text-emerald-800">9949247738</span> via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Nursery Official Details & Instant Actions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#0e381f] rounded-3xl p-7 sm:p-9 text-white shadow-xl border border-emerald-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-700/20 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs uppercase font-bold tracking-widest text-emerald-300 block mb-1">
                Official Nursery Contact
              </span>
              <h3 className="text-2xl font-bold font-display text-white mb-6">
                {BUSINESS_INFO.name}
              </h3>

              <div className="space-y-5">
                {/* Proprietor */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-800/80 flex items-center justify-center shrink-0 text-emerald-300 border border-emerald-700">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300 block">
                      PROPRIETOR
                    </span>
                    <p className="text-lg font-bold text-white mt-0.5">
                      {BUSINESS_INFO.proprietor}
                    </p>
                    <p className="text-xs text-emerald-200">
                      {BUSINESS_INFO.role}
                    </p>
                  </div>
                </div>

                {/* Phone & Direct Call Action */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-800/80 flex items-center justify-center shrink-0 text-amber-400 border border-emerald-700">
                    <Phone className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300 block">
                      DIRECT PHONE (TAP TO CALL)
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-2xl font-black text-amber-300 hover:text-amber-200 mt-0.5 tracking-wide block transition-colors underline decoration-amber-400/40 hover:decoration-amber-300"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-xs text-emerald-200 mt-0.5">
                      Direct phone dialer opens immediately on your device
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-800/80 flex items-center justify-center shrink-0 text-emerald-300 border border-emerald-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300 block">
                      LOCATION
                    </span>
                    <p className="text-base font-bold text-white mt-0.5">
                      {BUSINESS_INFO.location}
                    </p>
                    <p className="text-xs text-emerald-200">
                      Chandrapalem Mandal, Andhra Pradesh
                    </p>
                  </div>
                </div>

                {/* Supply Area */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-800/80 flex items-center justify-center shrink-0 text-emerald-300 border border-emerald-700">
                    <Map className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300 block">
                      SUPPLY AREA
                    </span>
                    <p className="text-base font-bold text-white mt-0.5">
                      {BUSINESS_INFO.supplyArea}
                    </p>
                    <p className="text-xs text-emerald-200">
                      Direct nursery dispatch for farmers across both states
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Tap Actions */}
              <div className="mt-8 pt-6 border-t border-emerald-800/80 grid grid-cols-2 gap-3">
                <a
                  id="contact-panel-call-btn"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all shadow-md active:scale-95"
                >
                  <Phone className="w-4 h-4 animate-bounce" />
                  <span>Call Directly</span>
                </a>

                <a
                  id="contact-panel-whatsapp-btn"
                  href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(
                    'Hello Rythu Mithra Nursery, I would like to enquire about chilli seedlings batch availability.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-xl transition-all shadow-md active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Tips Box */}
            <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200/90 text-xs text-emerald-950 leading-relaxed shadow-2xs">
              <div className="flex items-center gap-2 font-bold text-sm text-emerald-900 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Nursery Booking Advice:</span>
              </div>
              Pro-tray chilli seedlings require advance batch reservations so that nursery trays are conditioned to match your scheduled field transplantation day.
            </div>
          </div>

          {/* Right Column: Seedling Enquiry Form (Sends to WhatsApp 9949247738) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-stone-200 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-100">
              <div>
                <h3 className="text-2xl font-bold font-display text-[#0e381f]">
                  Send Seedling Enquiry
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                  Details are forwarded directly to WhatsApp number <span className="font-bold text-emerald-800">9949247738</span>.
                </p>
              </div>

              {/* Instant WhatsApp Shortcut */}
              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(
                  'Hello Rythu Mithra Nursery, I want to book chilli seedlings.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] text-xs font-bold transition-colors shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Quick WhatsApp</span>
              </a>
            </div>

            {submitted ? (
              <div
                id="enquiry-success-message"
                className="py-10 px-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center flex flex-col items-center animate-in fade-in"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-display text-emerald-950 mb-2">
                  Enquiry Details Formatted!
                </h4>
                <p className="text-stone-700 text-sm max-w-md leading-relaxed mb-4">
                  Thank you, <span className="font-bold text-emerald-900">{formData.name}</span>. Your seedling enquiry has been prepared for <span className="font-bold text-emerald-900">{BUSINESS_INFO.proprietor}</span> at <span className="font-bold text-emerald-900">9949247738</span>.
                </p>

                {/* Formatted summary preview */}
                <div className="w-full max-w-md bg-white p-4 rounded-xl border border-emerald-200 text-left text-xs space-y-1.5 text-stone-700 mb-6">
                  <div><span className="font-semibold text-stone-900">Farmer:</span> {formData.name} ({formData.phone})</div>
                  {formData.village && <div><span className="font-semibold text-stone-900">Village:</span> {formData.village}</div>}
                  <div><span className="font-semibold text-stone-900">Seed Variety:</span> {formData.variety}</div>
                  {formData.quantity && <div><span className="font-semibold text-stone-900">Quantity / Acres:</span> {formData.quantity}</div>}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
                  <a
                    id="success-open-whatsapp-btn"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-xl shadow-md transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp (9949247738)</span>
                  </a>

                  <a
                    id="success-call-btn"
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-md transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call 9949247738</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="mt-4 text-xs font-semibold text-stone-500 hover:text-stone-800 underline cursor-pointer"
                >
                  Fill another enquiry
                </button>
              </div>
            ) : (
              <form id="seedling-enquiry-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Farmer Name (రైతు పేరు) <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="enquiry-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-stone-900 text-sm transition-all bg-white"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Phone Number (ఫోన్ నంబర్) <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="enquiry-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-stone-900 text-sm transition-all bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Village / Location */}
                  <div>
                    <label
                      htmlFor="enquiry-village"
                      className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Village / Mandal (గ్రామం / మండలం)
                    </label>
                    <input
                      id="enquiry-village"
                      name="village"
                      type="text"
                      placeholder="e.g. Chandrapalem / Guntur / Khammam"
                      value={formData.village}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-stone-900 text-sm transition-all bg-white"
                    />
                  </div>

                  {/* Required Variety */}
                  <div>
                    <label
                      htmlFor="enquiry-variety"
                      className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Chilli Variety (మిరప రకం)
                    </label>
                    <select
                      id="enquiry-variety"
                      name="variety"
                      value={formData.variety}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-stone-900 text-sm transition-all bg-white font-medium"
                    >
                      <option value="General Chilli Seedlings (Mirapa Naru)">General Chilli Seedlings (మిరప నారు)</option>
                      {BUSINESS_INFO.varietiesList.map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                      <option value="Other Preferred Hybrid">Other Preferred Hybrid</option>
                    </select>
                  </div>
                </div>

                {/* Approximate Quantity or Acreage */}
                <div>
                  <label
                    htmlFor="enquiry-quantity"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    No. of Acres or Tray Quantity (ఎకరాలు / ట్రేలు)
                  </label>
                  <input
                    id="enquiry-quantity"
                    name="quantity"
                    type="text"
                    placeholder="e.g. 5 Acres or 60 Pro-trays"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-stone-900 text-sm transition-all bg-white"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="enquiry-message"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Message / Expected Planting Date
                  </label>
                  <textarea
                    id="enquiry-message"
                    name="message"
                    rows={3}
                    placeholder="Expected date of transplantation or special nursery requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-stone-900 text-sm transition-all bg-white resize-none"
                  />
                </div>

                {/* Send Enquiry Button */}
                <button
                  id="enquiry-submit-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 hover:from-emerald-700 hover:to-emerald-600 text-white font-extrabold text-base rounded-xl shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all duration-200 active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Seedling Enquiry to WhatsApp (9949247738)</span>
                </button>

                <p className="text-[11px] text-center text-stone-500 font-medium">
                  Submitting forwards this enquiry directly to Khakmuri Venkata Reddy Garu at WhatsApp 9949247738.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
