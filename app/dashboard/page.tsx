export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Dashboard
        </h1>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Welcome to Capital XYZ
          </h2>
          <p className="text-gray-600">
            You have successfully logged in. This is your dashboard where you can manage your investments.
          </p>
          
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-medium text-blue-900">Portfolio Value</h3>
              <p className="text-2xl font-bold text-blue-600">$125,000</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded">
              <h3 className="font-medium text-green-900">Total Gains</h3>
              <p className="text-2xl font-bold text-green-600">+12.5%</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded">
              <h3 className="font-medium text-purple-900">Active Investments</h3>
              <p className="text-2xl font-bold text-purple-600">7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}