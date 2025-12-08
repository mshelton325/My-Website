# Resource Delivery System - Admin Guide

## 📦 Overview

This system allows you to deliver digital products (manuals, courses, templates, etc.) to clients through unique, secure URLs.

**How it works:**
1. Client purchases a product from you
2. You create a unique access token for them
3. You send them a unique URL: `yourdomain.com/resources/TOKEN`
4. They access their content - no password needed!

---

## 🚀 Quick Start: Delivering Your First Resource

### Example: You sold the "Review Leverage Manual" to a client named John Smith

**Step 1:** Choose a unique token (make it random/unpredictable)
```
Good examples:
- RL2024-JS-8K3F9
- ReviewSystem-ABC123
- JohnS-RL-Dec2024

Bad examples:
- john-smith (too easy to guess)
- review-manual (too generic)
```

**Step 2:** Add the token to the resource map

Open: `src/pages/resources/index.jsx`

Find this section:
```javascript
const RESOURCE_MAP = {
  'demo-review-leverage': ReviewLeverageDemo,
  'RL2024-ABC123': ReviewLeverageDemo,
```

Add your new token:
```javascript
const RESOURCE_MAP = {
  'demo-review-leverage': ReviewLeverageDemo,
  'RL2024-ABC123': ReviewLeverageDemo,
  'RL2024-JS-8K3F9': ReviewLeverageDemo,  // ← Add this line
```

**Step 3:** Commit and push to GitHub
```bash
cd /home/user/webapp
git add .
git commit -m "Add resource access for client John Smith"
git push origin main
```

**Step 4:** Send the client their unique URL
```
Email to John:

Subject: Your Review Leverage Manual - Access Link

Hi John,

Thanks for your purchase! Your Review Leverage Manual is ready.

Access your manual here:
https://yourdomain.com/resources/RL2024-JS-8K3F9

You can:
✓ View it online anytime
✓ Download a copy for offline use
✓ Access bonus materials included

Bookmark this link for easy future access.

Questions? Just reply to this email.

Best,
Matt
```

---

## 📝 Creating New Product Resources

### When you have a NEW digital product to sell

Let's say you create a new "Sales Training System" product.

**Step 1:** Add your content file to `public/resources/`

If it's HTML:
```bash
cp /path/to/sales-training.html public/resources/sales-training-manual.html
```

If it's a PDF:
```bash
cp /path/to/sales-training.pdf public/resources/sales-training-manual.pdf
```

**Step 2:** Create a new resource page

Create: `src/pages/resources/SalesTrainingResource.jsx`

```javascript
import ResourceAccess from '../../components/ResourceAccess';

export default function SalesTrainingResource() {
  return (
    <ResourceAccess
      title="Sales Training System"
      description="Complete training framework for turning new hires into reliable producers—no flooring background required."
      resourceType="manual"
      embedUrl="/resources/sales-training-manual.html"
      downloadUrl="/resources/sales-training-manual.pdf"
      additionalResources={[
        {
          name: "Sales Scripts Library",
          description: "Pre-written scripts for every sales situation",
          url: null
        },
        {
          name: "Objection Handling Guide",
          description: "Responses to 20+ common customer objections",
          url: null
        }
      ]}
    />
  );
}
```

**Step 3:** Register it in the resource map

Open: `src/pages/resources/index.jsx`

Add the import at the top:
```javascript
import ReviewLeverageDemo from './ReviewLeverageDemo';
import SalesTrainingResource from './SalesTrainingResource'; // ← Add this
```

Add to the RESOURCE_MAP:
```javascript
const RESOURCE_MAP = {
  'demo-review-leverage': ReviewLeverageDemo,
  'demo-sales-training': SalesTrainingResource, // ← Add this
  'ST2024-ABC123': SalesTrainingResource, // ← Example client token
```

**Step 4:** Commit and deploy
```bash
cd /home/user/webapp
git add .
git commit -m "Add Sales Training System resource"
git push origin main
```

---

## 🔐 Security Best Practices

### Token Generation Tips

**Good Tokens:**
- Use random characters: `RL-8K3F9-2024`
- Include product code + unique ID: `ReviewSys-Client47-Dec2024`
- Make them unpredictable: `RL-XK93-JSmith-2024`

**Avoid:**
- Sequential numbers: `client1`, `client2`
- Obvious names: `john-smith`, `review-manual`
- Short tokens: `123`, `abc`

### Revoking Access

If you need to remove a client's access:

1. Open `src/pages/resources/index.jsx`
2. Remove their token from the RESOURCE_MAP
3. Commit and push

```javascript
// Before (client has access):
const RESOURCE_MAP = {
  'RL2024-ABC123': ReviewLeverageDemo,
};

// After (access revoked):
const RESOURCE_MAP = {
  // 'RL2024-ABC123': ReviewLeverageDemo, ← Commented out or deleted
};
```

---

## 📊 Tracking Client Access

### Simple Manual Tracking

Keep a spreadsheet:

| Client Name | Product | Token | Date Sent | Email |
|-------------|---------|-------|-----------|-------|
| John Smith | Review Leverage | RL-8K3F9-2024 | Dec 8, 2024 | john@example.com |
| Sarah Jones | Sales Training | ST-4M2N7-2024 | Dec 10, 2024 | sarah@example.com |

### Finding All Active Tokens

Open `src/pages/resources/index.jsx` and look at the RESOURCE_MAP.

All tokens listed there are active.

---

## 🎨 Customizing Resource Pages

### Changing the Description

Edit the resource file (e.g., `ReviewLeverageDemo.jsx`):

```javascript
return (
  <ResourceAccess
    title="Your Product Title"
    description="Change this text to describe your product" // ← Edit this
    ...
  />
);
```

### Adding Bonus Materials

```javascript
additionalResources={[
  {
    name: "Bonus Checklist",
    description: "Quick reference guide",
    url: "/resources/bonus-checklist.pdf"  // ← Add actual file first
  },
  {
    name: "Video Tutorial",
    description: "10-minute walkthrough",
    url: "https://youtube.com/your-video"  // ← Can link to external sites
  }
]}
```

### Removing the "View Online" Button

If you only want download, not viewing:

```javascript
return (
  <ResourceAccess
    title="Your Product Title"
    description="Your description"
    embedUrl={null}  // ← Set to null to hide View Online button
    downloadUrl="/resources/your-file.pdf"
    ...
  />
);
```

---

## 🧪 Testing

### Test the Demo Link

Visit: `http://localhost:5173/resources/demo-review-leverage`

You should see:
- ✓ Professional access page
- ✓ "View Online" button works
- ✓ "Download Copy" button works
- ✓ Manual displays correctly

### Test Invalid Token

Visit: `http://localhost:5173/resources/fake-token-12345`

You should see:
- ✓ "Access Not Found" message
- ✓ Professional 404 page
- ✓ Contact support button

---

## 📞 Common Client Questions

**Q: "Can I share this link with my team?"**
A: "The link is licensed for your business use. You can share it internally with your team, but please don't post it publicly or share it outside your organization."

**Q: "How long do I have access?"**
A: "Your access doesn't expire. You can bookmark the link and access it anytime."

**Q: "The link isn't working."**
A: "Make sure you're using the complete URL I sent you. If you're still having trouble, forward me the email with the link and I'll help you out."

**Q: "Can I get a PDF version?"**
A: "Yes! Click the 'Download Copy' button on the access page."

---

## 🚀 Future Enhancements (Optional)

When you're ready to automate more:

1. **Payment Integration**: Connect Stripe/PayPal to auto-generate tokens
2. **Client Dashboard**: Let clients view all their purchases in one place
3. **Email Automation**: Auto-send access links after payment
4. **Analytics**: Track views, downloads, time spent
5. **Expiration Dates**: Set access to expire after X days

For now, the manual system works great and gives you full control!

---

## 📧 Support

Questions about the system? Email yourself a note or ask in your next session!

**Quick Reference:**
- Resource map: `src/pages/resources/index.jsx`
- Resource templates: `src/pages/resources/`
- Upload files to: `public/resources/`
- Test URL: `http://localhost:5173/resources/TOKEN`
- Production URL: `https://yourdomain.com/resources/TOKEN`
