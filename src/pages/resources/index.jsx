import { useParams, Navigate } from 'react-router-dom';
import ReviewLeverageDemo from './ReviewLeverageDemo';

// Resource token mapping
// Add new resources here as you create them
const RESOURCE_MAP = {
  'demo-review-leverage': ReviewLeverageDemo,
  'RL2024-ABC123': ReviewLeverageDemo, // Example: unique client token
  'RL2024-XYZ789': ReviewLeverageDemo, // Example: another client token
  
  // Add more resources like:
  // 'sales-training-ABC123': SalesTrainingResource,
  // 'operations-manual-XYZ456': OperationsManualResource,
};

export default function ResourceRouter() {
  const { token } = useParams();
  
  // Look up the resource component for this token
  const ResourceComponent = RESOURCE_MAP[token];
  
  // If token doesn't exist, show 404
  if (!ResourceComponent) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Access Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            This resource link is invalid or has expired. Please check your email for the correct link or contact support.
          </p>
          <a
            href="mailto:matt@mattshelton.co"
            className="inline-block bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    );
  }
  
  // Render the resource component
  return <ResourceComponent />;
}
