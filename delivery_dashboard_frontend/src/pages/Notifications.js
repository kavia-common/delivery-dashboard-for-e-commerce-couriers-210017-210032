import React, { useState, useEffect } from 'react';
import '../styles/pages.css';

// PUBLIC_INTERFACE
/**
 * Notifications page component
 * Displays delivery-related notifications, updates, and alerts
 * Shows new assignments, delivery updates, and system messages
 */
function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Simulate fetching notifications
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        // Mock notifications data
        const mockNotifications = [
          {
            id: 1,
            type: 'new_delivery',
            title: 'New Delivery Assigned',
            message: 'You have been assigned order ORD-2024-005',
            time: new Date(Date.now() - 5 * 60000),
            read: false,
            priority: 'high'
          },
          {
            id: 2,
            type: 'delivery_update',
            title: 'Customer Updated Address',
            message: 'Order ORD-2024-003: Address changed to 790 Elm Street',
            time: new Date(Date.now() - 30 * 60000),
            read: false,
            priority: 'high'
          },
          {
            id: 3,
            type: 'earnings',
            title: 'Payment Processed',
            message: 'Weekly earnings of $425.75 have been deposited',
            time: new Date(Date.now() - 2 * 60 * 60000),
            read: true,
            priority: 'normal'
          },
          {
            id: 4,
            type: 'system',
            title: 'App Update Available',
            message: 'Version 2.1 is now available with new features',
            time: new Date(Date.now() - 5 * 60 * 60000),
            read: true,
            priority: 'low'
          },
          {
            id: 5,
            type: 'delivery_complete',
            title: 'Delivery Confirmed',
            message: 'Order ORD-2024-001 marked as delivered successfully',
            time: new Date(Date.now() - 24 * 60 * 60000),
            read: true,
            priority: 'normal'
          }
        ];
        
        setTimeout(() => {
          setNotifications(mockNotifications);
          setLoading(false);
        }, 500);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  // PUBLIC_INTERFACE
  /**
   * Mark notification as read
   * @param {number} id - Notification ID
   */
  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  // PUBLIC_INTERFACE
  /**
   * Mark all notifications as read
   */
  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  // PUBLIC_INTERFACE
  /**
   * Get relative time string
   * @param {Date} date - Notification date
   * @returns {string} Relative time string
   */
  const getRelativeTime = (date) => {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  // PUBLIC_INTERFACE
  /**
   * Get icon for notification type
   * @param {string} type - Notification type
   * @returns {JSX.Element} SVG icon
   */
  const getNotificationIcon = (type) => {
    const icons = {
      new_delivery: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      delivery_update: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      earnings: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      delivery_complete: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      system: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    };
    return icons[type] || icons.system;
  };

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'unread' 
      ? notifications.filter(n => !n.read)
      : notifications.filter(n => n.read);

  const unreadCount = notifications.filter(n => !n.read).length;

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading-spinner">Loading notifications...</div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Notifications</h1>
        <p className="page-subtitle">
          {unreadCount > 0 ? `${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
        </p>
      </div>

      <div className="notifications-actions">
        <div className="filter-buttons">
          <button 
            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-button ${filter === 'unread' ? 'active' : ''}`}
            onClick={() => setFilter('unread')}
          >
            Unread ({unreadCount})
          </button>
          <button 
            className={`filter-button ${filter === 'read' ? 'active' : ''}`}
            onClick={() => setFilter('read')}
          >
            Read
          </button>
        </div>
        
        {unreadCount > 0 && (
          <button className="mark-all-read-button" onClick={markAllAsRead}>
            Mark all as read
          </button>
        )}
      </div>

      <div className="notifications-list">
        {filteredNotifications.length === 0 ? (
          <div className="empty-state">
            <p>No notifications</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`notification-card ${notification.read ? 'read' : 'unread'} priority-${notification.priority}`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="notification-icon">
                {getNotificationIcon(notification.type)}
              </div>
              
              <div className="notification-content">
                <div className="notification-header">
                  <h3 className="notification-title">{notification.title}</h3>
                  <span className="notification-time">{getRelativeTime(notification.time)}</span>
                </div>
                
                <p className="notification-message">{notification.message}</p>
                
                {!notification.read && (
                  <div className="notification-unread-indicator">
                    <span className="unread-dot"></span>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Notifications;
