export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-t-indigo-600 border-r-cyan-600 border-b-indigo-600 border-l-cyan-600 animate-spin"></div>
          <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-indigo-600 to-cyan-600"></div>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Authenticating</h3>
        <p className="text-gray-500">Please wait while we complete the authentication process...</p>
      </div>
    </div>
  )
}

