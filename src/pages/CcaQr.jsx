import { useState } from 'react';

/**
 * CCA CONVENTION QR CODE TOGGLE PAGE
 * 
 * Purpose: Quick networking tool for casual convention conversations
 * Two views: 1) Google Form follow-up, 2) Contact card save
 * 
 * Context: This is SEPARATE from the formal Education Day presentation.
 * Use case: "Hey, scan this to follow up" or "Scan to save my contact"
 */

export default function CcaQr() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div style={{
      margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
      background: '#fff',
      color: '#111',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '18px',
        textAlign: 'center'
      }}>

        {/* VIEW 1: Follow-up Form QR */}
        {!showContact && (
          <div>
            <h1 style={{
              margin: '10px 0 6px',
              fontSize: '28px',
              letterSpacing: '-0.2px'
            }}>
              Member Resource Follow-Up
            </h1>
            <p style={{
              margin: '0 0 14px',
              fontSize: '16px',
              color: '#444',
              lineHeight: '1.35'
            }}>
              Scan to drop your info so I can follow up after convention.
            </p>

            <div style={{
              margin: '14px auto',
              padding: '14px',
              border: '1px solid #e6e6e6',
              borderRadius: '18px',
              background: '#fff'
            }}>
              <img 
                src="/form-qr.png" 
                alt="Google Form QR Code"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '560px',
                  borderRadius: '12px',
                  background: '#fff'
                }}
              />
              <div style={{
                marginTop: '10px',
                fontSize: '15px',
                color: '#444'
              }}>
                10 seconds — Name + best contact method
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '12px'
            }}>
              <button
                onClick={() => setShowContact(true)}
                style={{
                  border: '1px solid #111',
                  background: '#111',
                  color: '#fff',
                  padding: '12px 14px',
                  borderRadius: '14px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  minWidth: '190px'
                }}
              >
                Switch to Save Contact QR
              </button>
            </div>

            <div style={{
              marginTop: '14px',
              fontSize: '13px',
              color: '#666'
            }}>
              Matt Shelton • Carpet One Dealer
            </div>
          </div>
        )}

        {/* VIEW 2: Contact Card QR */}
        {showContact && (
          <div>
            <h1 style={{
              margin: '10px 0 6px',
              fontSize: '28px',
              letterSpacing: '-0.2px'
            }}>
              Save My Contact
            </h1>
            <p style={{
              margin: '0 0 14px',
              fontSize: '16px',
              color: '#444',
              lineHeight: '1.35'
            }}>
              Scan to save my contact card.
            </p>

            <div style={{
              margin: '14px auto',
              padding: '14px',
              border: '1px solid #e6e6e6',
              borderRadius: '18px',
              background: '#fff'
            }}>
              <img 
                src="/contact-qr.png" 
                alt="Contact Card QR Code"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '560px',
                  borderRadius: '12px',
                  background: '#fff'
                }}
              />
              <div style={{
                marginTop: '10px',
                fontSize: '15px',
                color: '#444'
              }}>
                Optional: text me your name so I can save you back
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '12px'
            }}>
              <button
                onClick={() => setShowContact(false)}
                style={{
                  border: '1px solid #111',
                  background: '#111',
                  color: '#fff',
                  padding: '12px 14px',
                  borderRadius: '14px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  minWidth: '190px'
                }}
              >
                Back to Follow-Up QR
              </button>
            </div>

            <div style={{
              marginTop: '14px',
              fontSize: '13px',
              color: '#666'
            }}>
              Matt Shelton • Carpet One Dealer
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
