import React, { useState } from 'react';
import '../styles/pages.css';

// PUBLIC_INTERFACE
/**
 * Support page component
 * Provides contact options, help resources, and support ticket submission
 * Includes FAQ, contact methods, and emergency support
 */
function Support() {
  const [activeSection, setActiveSection] = useState('contact');
  const [formData, setFormData] = useState({
    subject: '',
    category: 'delivery_issue',
    message: '',
    urgent: false
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  // PUBLIC_INTERFACE
  /**
   * Handle form input changes
   * @param {Event} e - Input change event
   */
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // PUBLIC_INTERFACE
  /**
   * Submit support request
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        subject: '',
        category: 'delivery_issue',
        message: '',
        urgent: false
      });
      
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const contactMethods = [
    {
      id: 'phone',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone Support',
      value: '1-800-DELIVER',
      description: 'Available 24/7 for urgent issues',
      action: () => window.location.href = 'tel:1-800-335-4837'
    },
    {
      id: 'email',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Support',
      value: 'support@delivery.com',
      description: 'Response within 24 hours',
      action: () => window.location.href = 'mailto:support@delivery.com'
    },
    {
      id: 'chat',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Live Chat',
      value: 'Start chat',
      description: 'Instant messaging with support team',
      action: () => alert('Chat feature coming soon!')
    }
  ];

  const faqItems = [
    {
      question: 'How do I report a delivery issue?',
      answer: 'You can report issues through the support form below or call our 24/7 hotline at 1-800-DELIVER.'
    },
    {
      question: 'When will I receive my earnings?',
      answer: 'Earnings are processed weekly every Friday and deposited into your account within 2-3 business days.'
    },
    {
      question: 'What should I do if a customer is not available?',
      answer: 'Try contacting the customer via phone. If unavailable after 2 attempts, follow the company protocol for undelivered packages and contact support.'
    },
    {
      question: 'How do I update my account information?',
      answer: 'Go to Settings > Account Information to update your personal details, payment info, and preferences.'
    },
    {
      question: 'What if I encounter a safety concern?',
      answer: 'Your safety is our priority. Call emergency support immediately at 1-800-DELIVER and report the situation. Do not proceed with delivery if you feel unsafe.'
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Support & Help</h1>
        <p className="page-subtitle">We're here to assist you</p>
      </div>

      <div className="support-tabs">
        <button 
          className={`support-tab ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveSection('contact')}
        >
          Contact
        </button>
        <button 
          className={`support-tab ${activeSection === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveSection('faq')}
        >
          FAQ
        </button>
        <button 
          className={`support-tab ${activeSection === 'form' ? 'active' : ''}`}
          onClick={() => setActiveSection('form')}
        >
          Submit Request
        </button>
      </div>

      {activeSection === 'contact' && (
        <div className="support-section">
          <div className="emergency-banner">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <strong>Emergency?</strong>
              <p>For urgent safety or delivery issues, call 1-800-DELIVER immediately</p>
            </div>
          </div>

          <div className="contact-methods">
            {contactMethods.map((method) => (
              <div key={method.id} className="contact-card">
                <div className="contact-icon">{method.icon}</div>
                <div className="contact-info">
                  <h3 className="contact-title">{method.title}</h3>
                  <p className="contact-value">{method.value}</p>
                  <p className="contact-description">{method.description}</p>
                </div>
                <button className="contact-action-button" onClick={method.action}>
                  Contact
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'faq' && (
        <div className="support-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details key={index} className="faq-item">
                <summary className="faq-question">{item.question}</summary>
                <p className="faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'form' && (
        <div className="support-section">
          <h2 className="section-title">Submit Support Request</h2>
          
          {submitStatus === 'success' && (
            <div className="success-message">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Your request has been submitted successfully. We'll get back to you soon!
            </div>
          )}

          <form className="support-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select 
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="delivery_issue">Delivery Issue</option>
                <option value="payment">Payment/Earnings</option>
                <option value="app_problem">App Problem</option>
                <option value="account">Account</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Brief description of your issue"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Provide detailed information about your issue..."
                rows="6"
                required
              />
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input 
                  type="checkbox"
                  name="urgent"
                  checked={formData.urgent}
                  onChange={handleInputChange}
                />
                <span>This is urgent and requires immediate attention</span>
              </label>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={submitStatus === 'submitting'}
            >
              {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Support;
