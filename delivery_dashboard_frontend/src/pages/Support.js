import React, { useState } from 'react';
import '../styles/pages.css';

// PUBLIC_INTERFACE
/**
 * Support page component
 * Provides contact options, help resources, and support ticket submission
 * Includes FAQ, contact methods, and emergency support with enhanced mobile-first UI
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
  const [expandedFaq, setExpandedFaq] = useState(null);

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

  // PUBLIC_INTERFACE
  /**
   * Toggle FAQ item
   * @param {number} index - FAQ item index
   */
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
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
      description: 'Available 24/7',
      badge: 'Urgent',
      color: 'accent',
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
      description: '24h response',
      badge: 'Standard',
      color: 'primary',
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
      value: 'Coming Soon',
      description: 'Instant help',
      badge: 'Soon',
      color: 'success',
      action: () => alert('Chat feature launching soon!')
    }
  ];

  const quickActions = [
    {
      id: 'track',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
      ),
      title: 'Track Issue',
      description: 'Check status'
    },
    {
      id: 'faq',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'View FAQ',
      description: 'Quick answers',
      action: () => setActiveSection('faq')
    },
    {
      id: 'report',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: 'Report Issue',
      description: 'Get help now',
      action: () => setActiveSection('form')
    },
    {
      id: 'guide',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Guidelines',
      description: 'Best practices'
    }
  ];

  const faqItems = [
    {
      question: 'How do I report a delivery issue?',
      answer: 'You can report issues through the support form below, call our 24/7 hotline at 1-800-DELIVER, or email us at support@delivery.com. For urgent issues, we recommend calling directly.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      question: 'When will I receive my earnings?',
      answer: 'Earnings are processed weekly every Friday and deposited into your account within 2-3 business days. You can track your pending and completed payments in the Earnings tab.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      question: 'What if a customer is not available?',
      answer: 'Try contacting the customer via phone first. If unavailable after 2 attempts within 10 minutes, follow the company protocol for undelivered packages and contact support for further instructions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      question: 'How do I update my information?',
      answer: 'Go to Settings > Account Information to update your personal details, payment info, vehicle information, and notification preferences. Changes are saved automatically.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      question: 'What if I have a safety concern?',
      answer: 'Your safety is our top priority. Call emergency support immediately at 1-800-DELIVER if you feel unsafe. Do not proceed with delivery. Report the situation and we will handle it promptly.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const categoryIcons = {
    delivery_issue: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    payment: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    app_problem: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    account: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    other: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  return (
    <div className="page-container support-page">
      <div className="page-header">
        <h1 className="page-title">Support & Help</h1>
        <p className="page-subtitle">We're here to help you succeed</p>
      </div>

      <div className="support-tabs">
        <button 
          className={`support-tab ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveSection('contact')}
        >
          <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Contact</span>
        </button>
        <button 
          className={`support-tab ${activeSection === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveSection('faq')}
        >
          <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>FAQ</span>
        </button>
        <button 
          className={`support-tab ${activeSection === 'form' ? 'active' : ''}`}
          onClick={() => setActiveSection('form')}
        >
          <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Submit</span>
        </button>
      </div>

      {activeSection === 'contact' && (
        <div className="support-section animate-fadeIn">
          <div className="emergency-banner-enhanced">
            <div className="emergency-icon-wrapper">
              <svg className="emergency-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="emergency-content">
              <strong>Emergency Support</strong>
              <p>For urgent safety or delivery issues, call us immediately</p>
              <a href="tel:1-800-335-4837" className="emergency-call-button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 1-800-DELIVER
              </a>
            </div>
          </div>

          <h2 className="section-title-enhanced">Contact Methods</h2>
          <div className="contact-methods-enhanced">
            {contactMethods.map((method) => (
              <div key={method.id} className={`contact-card-enhanced contact-card-${method.color}`} onClick={method.action}>
                <div className="contact-card-header">
                  <div className={`contact-icon-enhanced contact-icon-${method.color}`}>
                    {method.icon}
                  </div>
                  <span className={`contact-badge badge-${method.color}`}>{method.badge}</span>
                </div>
                <div className="contact-card-body">
                  <h3 className="contact-title-enhanced">{method.title}</h3>
                  <p className="contact-value-enhanced">{method.value}</p>
                  <p className="contact-description-enhanced">{method.description}</p>
                </div>
                <div className="contact-card-footer">
                  <span className="contact-action-text">Tap to {method.id === 'phone' ? 'call' : method.id === 'email' ? 'email' : 'chat'}</span>
                  <svg className="contact-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title-enhanced">Quick Actions</h2>
          <div className="quick-actions-grid">
            {quickActions.map((action) => (
              <button 
                key={action.id} 
                className="quick-action-card"
                onClick={action.action}
              >
                <div className="quick-action-icon">
                  {action.icon}
                </div>
                <span className="quick-action-title">{action.title}</span>
                <span className="quick-action-description">{action.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'faq' && (
        <div className="support-section animate-fadeIn">
          <h2 className="section-title-enhanced">Frequently Asked Questions</h2>
          <div className="faq-list-enhanced">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item-enhanced ${expandedFaq === index ? 'expanded' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-item-header">
                  <div className="faq-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="faq-question-wrapper">
                    <h3 className="faq-question-enhanced">{item.question}</h3>
                    <svg 
                      className="faq-chevron" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {expandedFaq === index && (
                  <div className="faq-answer-enhanced">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'form' && (
        <div className="support-section animate-fadeIn">
          <h2 className="section-title-enhanced">Submit Support Request</h2>
          
          {submitStatus === 'success' && (
            <div className="success-message-enhanced">
              <div className="success-icon-wrapper">
                <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="success-content">
                <strong>Request Submitted!</strong>
                <p>We'll get back to you within 24 hours</p>
              </div>
            </div>
          )}

          <form className="support-form-enhanced" onSubmit={handleSubmit}>
            <div className="form-group-enhanced">
              <label htmlFor="category" className="form-label-enhanced">
                <span className="label-icon">{categoryIcons[formData.category]}</span>
                <span>Category</span>
              </label>
              <select 
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="form-select-enhanced"
                required
              >
                <option value="delivery_issue">Delivery Issue</option>
                <option value="payment">Payment/Earnings</option>
                <option value="app_problem">App Problem</option>
                <option value="account">Account</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group-enhanced">
              <label htmlFor="subject" className="form-label-enhanced">
                <span className="label-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </span>
                <span>Subject</span>
              </label>
              <input 
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Brief description of your issue"
                className="form-input-enhanced"
                required
              />
            </div>

            <div className="form-group-enhanced">
              <label htmlFor="message" className="form-label-enhanced">
                <span className="label-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <span>Message</span>
              </label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Provide detailed information about your issue..."
                rows="6"
                className="form-textarea-enhanced"
                required
              />
            </div>

            <div className="form-group-enhanced checkbox-group-enhanced">
              <label className="checkbox-label-enhanced">
                <input 
                  type="checkbox"
                  name="urgent"
                  checked={formData.urgent}
                  onChange={handleInputChange}
                  className="checkbox-input-enhanced"
                />
                <span className="checkbox-custom"></span>
                <span className="checkbox-text">
                  <strong>Mark as urgent</strong>
                  <small>Requires immediate attention</small>
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              className="submit-button-enhanced"
              disabled={submitStatus === 'submitting'}
            >
              {submitStatus === 'submitting' ? (
                <>
                  <span className="button-spinner"></span>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Submit Request</span>
                </>
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Support;
