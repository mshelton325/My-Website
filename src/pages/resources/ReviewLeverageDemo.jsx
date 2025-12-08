import ResourceAccess from '../../components/ResourceAccess';

export default function ReviewLeverageDemo() {
  return (
    <ResourceAccess
      title="The Salesperson's Guide to Google Reviews"
      description="Complete system for turning every sale into warmer leads, easier closes, and higher commissions through strategic review capture and leverage."
      resourceType="manual"
      embedUrl="/resources/review-leverage-manual.html"
      downloadUrl="/resources/review-leverage-manual.html"
      additionalResources={[
        {
          name: "Review Request Scripts",
          description: "Copy-paste scripts for phone calls, texts, and follow-ups",
          url: null // You can add a URL when you create the actual file
        },
        {
          name: "Post-Installation Call Checklist",
          description: "Printable checklist for your desk",
          url: null
        },
        {
          name: "30-Day Challenge Tracker",
          description: "Track your progress and measure results",
          url: null
        }
      ]}
    />
  );
}
