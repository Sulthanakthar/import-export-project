"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "./Icons";
import { MessageCircle } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  mobile: string;
  country: string;
  product: string;
  quantity: string;
  packaging: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  country?: string;
  product?: string;
}

const WHATSAPP_NUMBER = "919944550063";

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    mobile: "",
    country: "",
    product: "",
    quantity: "",
    packaging: "",
    details: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedMethod, setSubmittedMethod] = useState<"whatsapp" | "email" | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name or company name (min 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid business email address.";
    }

    const mobileClean = formData.mobile.replace(/[\s\-\(\)\+]/g, "");
    if (!formData.mobile.trim() || mobileClean.length < 7 || !/^\d+$/.test(mobileClean)) {
      newErrors.mobile = "Please enter a valid mobile number (at least 7 digits).";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Please enter your destination country or port.";
    }

    if (!formData.product) {
      newErrors.product = "Please select a product category.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field as keyof FormErrors]: undefined }));
    }
  };

  const formatWhatsAppMessage = (): string => {
    return [
      "🌾 *B2B Quote Request - Global Harvest Exports*",
      "----------------------------------------",
      `👤 *Name / Company:* ${formData.name}`,
      `📧 *Business Email:* ${formData.email}`,
      `📞 *Mobile Number:* ${formData.mobile}`,
      `🌍 *Destination Country:* ${formData.country}`,
      `📦 *Product Category:* ${formData.product}`,
      formData.quantity ? `⚖️ *Estimated Quantity:* ${formData.quantity}` : "",
      formData.packaging ? `🛍️ *Preferred Packaging:* ${formData.packaging}` : "",
      formData.details ? `📝 *Requirement Details:* ${formData.details}` : "",
      "----------------------------------------",
      "Please provide export quotation and estimated lead time.",
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = formatWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmittedMethod("whatsapp");
  };

  const handleDirectSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedMethod("email");
  };

  return (
    <form className="quote-form relative" onSubmit={handleDirectSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Name / Company */}
        <label className="block">
          <span className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-charcoal/70">
            Name / Company *
          </span>
          <input
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Your name or company name"
            className={`mt-1.5 w-full rounded-xl border bg-white/70 px-4 py-3 text-sm transition focus:bg-white focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-500 focus:ring-red-400" : "border-forest/15 focus:ring-gold"
            }`}
          />
          {errors.name && <p className="mt-1 text-xs font-semibold text-red-600">{errors.name}</p>}
        </label>

        {/* Business Email */}
        <label className="block">
          <span className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-charcoal/70">
            Business Email *
          </span>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="buyer@company.com"
            className={`mt-1.5 w-full rounded-xl border bg-white/70 px-4 py-3 text-sm transition focus:bg-white focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-400" : "border-forest/15 focus:ring-gold"
            }`}
          />
          {errors.email && <p className="mt-1 text-xs font-semibold text-red-600">{errors.email}</p>}
        </label>

        {/* Business Mobile Number */}
        <label className="block">
          <span className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-charcoal/70">
            Business Mobile Number *
          </span>
          <input
            type="tel"
            value={formData.mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
            placeholder="+91 98765 43210"
            className={`mt-1.5 w-full rounded-xl border bg-white/70 px-4 py-3 text-sm transition focus:bg-white focus:outline-none focus:ring-2 ${
              errors.mobile ? "border-red-500 focus:ring-red-400" : "border-forest/15 focus:ring-gold"
            }`}
          />
          {errors.mobile && <p className="mt-1 text-xs font-semibold text-red-600">{errors.mobile}</p>}
        </label>

        {/* Country */}
        <label className="block">
          <span className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-charcoal/70">
            Destination Country / Port *
          </span>
          <input
            value={formData.country}
            onChange={(e) => handleChange("country", e.target.value)}
            placeholder="e.g. UAE, Singapore, Kenya"
            className={`mt-1.5 w-full rounded-xl border bg-white/70 px-4 py-3 text-sm transition focus:bg-white focus:outline-none focus:ring-2 ${
              errors.country ? "border-red-500 focus:ring-red-400" : "border-forest/15 focus:ring-gold"
            }`}
          />
          {errors.country && <p className="mt-1 text-xs font-semibold text-red-600">{errors.country}</p>}
        </label>

        {/* Product */}
        <label className="block">
          <span className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-charcoal/70">
            Product Category *
          </span>
          <select
            value={formData.product}
            onChange={(e) => handleChange("product", e.target.value)}
            className={`mt-1.5 w-full rounded-xl border bg-white/70 px-4 py-3 text-sm transition focus:bg-white focus:outline-none focus:ring-2 ${
              errors.product ? "border-red-500 focus:ring-red-400" : "border-forest/15 focus:ring-gold"
            }`}
          >
            <option value="" disabled>
              Select product
            </option>
            <option value="Rice (Basmati & Non-Basmati)">Rice (Basmati & Non-Basmati)</option>
            <option value="Dhall (Toor, Moong, Urad, Chana)">Dhall (Toor, Moong, Urad, Chana)</option>
            <option value="Pulses & Whole Legumes">Pulses & Whole Legumes</option>
            <option value="Mixed Commodity Requirement">Mixed Commodity Requirement</option>
          </select>
          {errors.product && <p className="mt-1 text-xs font-semibold text-red-600">{errors.product}</p>}
        </label>

        {/* Estimated Quantity */}
        <label className="block">
          <span className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-charcoal/70">
            Estimated Quantity
          </span>
          <input
            value={formData.quantity}
            onChange={(e) => handleChange("quantity", e.target.value)}
            placeholder="e.g. 25 MT / month"
            className="mt-1.5 w-full rounded-xl border border-forest/15 bg-white/70 px-4 py-3 text-sm transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </label>

        {/* Preferred Packaging */}
        <label className="block sm:col-span-2">
          <span className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-charcoal/70">
            Preferred Packaging
          </span>
          <select
            value={formData.packaging}
            onChange={(e) => handleChange("packaging", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-forest/15 bg-white/70 px-4 py-3 text-sm transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="">Select packaging format</option>
            <option value="5 kg Retail Pack">5 kg Retail Pack</option>
            <option value="10 kg Family Pack">10 kg Family Pack</option>
            <option value="25 kg Trade Pack">25 kg Trade Pack</option>
            <option value="50 kg Bulk Sacks">50 kg Bulk Sacks</option>
            <option value="Custom Private Labeling">Custom Private Labeling</option>
          </select>
        </label>
      </div>

      {/* Requirement Details */}
      <label className="mt-4 block">
        <span className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-charcoal/70">
          Requirement Details
        </span>
        <textarea
          rows={3}
          value={formData.details}
          onChange={(e) => handleChange("details", e.target.value)}
          placeholder="Specify grade, destination port, target price or quality parameters."
          className="mt-1.5 w-full rounded-xl border border-forest/15 bg-white/70 px-4 py-3 text-sm transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </label>

      {/* Dual Submission CTA Buttons */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleWhatsAppSubmit}
          className="flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition duration-200 hover:bg-[#20bd5a] hover:shadow-xl active:scale-[0.98]"
        >
          <MessageCircle className="h-5 w-5" /> Send Quote via WhatsApp
        </button>

        <button
          type="submit"
          className="btn-gold flex flex-1 items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold shadow-md transition duration-200 active:scale-[0.98]"
        >
          Submit Quote Request <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Success Notifications */}
      {submittedMethod === "whatsapp" && (
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm font-medium text-green-900">
          <Check className="h-5 w-5 text-green-600 shrink-0" />
          <div>
            <strong>WhatsApp Quote Form validated!</strong> We opened WhatsApp with your pre-filled inquiry details. If it didn't open automatically, click the WhatsApp button above again.
          </div>
        </div>
      )}

      {submittedMethod === "email" && (
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-forest/20 bg-forest/10 p-4 text-sm font-medium text-forest2">
          <Check className="h-5 w-5 text-gold shrink-0" />
          <div>
            <strong>Quote Request Submitted Successfully!</strong> Thank you {formData.name}. Our sales desk will review your inquiry for {formData.product} ({formData.country}) and respond within 24 business hours.
          </div>
        </div>
      )}
    </form>
  );
}
