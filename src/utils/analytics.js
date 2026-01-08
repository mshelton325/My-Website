/**
 * Google Analytics 4 Event Tracking Utilities
 * 
 * Usage:
 * import { trackPDFDownload, trackFormSubmission, trackPageView } from './utils/analytics';
 * 
 * trackPDFDownload('Owner One-Page Diagnostic');
 * trackFormSubmission('Private Note Form');
 */

// Check if gtag is available (GA4 loaded)
const isGtagAvailable = () => typeof window !== 'undefined' && typeof window.gtag === 'function';

/**
 * Track PDF download events
 * @param {string} fileName - Name of the PDF being downloaded
 * @param {string} fileUrl - URL of the PDF
 */
export const trackPDFDownload = (fileName, fileUrl = '') => {
  if (isGtagAvailable()) {
    window.gtag('event', 'file_download', {
      file_name: fileName,
      file_url: fileUrl,
      link_text: fileName,
    });
    console.log(`[Analytics] PDF Download tracked: ${fileName}`);
  }
};

/**
 * Track form submissions
 * @param {string} formName - Name of the form submitted
 * @param {object} additionalData - Any additional data to track
 */
export const trackFormSubmission = (formName, additionalData = {}) => {
  if (isGtagAvailable()) {
    window.gtag('event', 'form_submission', {
      form_name: formName,
      ...additionalData,
    });
    console.log(`[Analytics] Form submission tracked: ${formName}`);
  }
};

/**
 * Track custom page views (useful for single-page apps)
 * @param {string} pagePath - Path of the page
 * @param {string} pageTitle - Title of the page
 */
export const trackPageView = (pagePath, pageTitle = '') => {
  if (isGtagAvailable()) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
    console.log(`[Analytics] Page view tracked: ${pagePath}`);
  }
};

/**
 * Track custom events
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (isGtagAvailable()) {
    window.gtag('event', eventName, eventParams);
    console.log(`[Analytics] Event tracked: ${eventName}`, eventParams);
  }
};

/**
 * Track button/link clicks
 * @param {string} linkText - Text of the link/button
 * @param {string} linkUrl - URL of the link
 */
export const trackLinkClick = (linkText, linkUrl = '') => {
  if (isGtagAvailable()) {
    window.gtag('event', 'click', {
      link_text: linkText,
      link_url: linkUrl,
    });
    console.log(`[Analytics] Link click tracked: ${linkText}`);
  }
};
