import { useFetch } from "../../../hooks/useFetch";

export default function UserData() {
  
  const URL_USERS = 'https://jsonplaceholder.typicode.com/users';

  const { data: users, isLoading, error } = useFetch(URL_USERS);

  // 1. Loading State
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-lg font-medium text-blue-600 animate-pulse">Loading user profiles...</p>
      </div>
    );
  }

  // 2. Error State
  if (error) {
    return (
      <div className="max-w-4xl mx-auto my-10 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
        <p className="font-bold">Failed to load users:</p>
        <p className="text-sm font-mono">{error}</p>
      </div>
    );
  }

  // 3. Defensive Empty Check
  if (!users || users.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 min-h-screen">
        <p className="text-gray-500 font-medium">No user profiles found.</p>
      </div>
    );
  }

  // 4. Main Success Render
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="mb-10 text-center md:text-left">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Team Directory</h1>
        <p className="text-gray-500 mt-2">Displaying corporate profiles, locations, and alignment details.</p>
      </header>

      {/* Grid Layout (1 column on mobile, 2 on tablet, 3 on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div 
            key={user.id} 
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between"
          >
            {/* Primary Details Block */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                {/* Visual Anchor / Placeholder Avatar */}
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-lg">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{user.name}</h2>
                  <p className="text-xs text-gray-400">@{user.username}</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-2 text-sm text-gray-600 mb-6 border-b border-gray-100 pb-4">
                <div className="flex items-center">
                  <span className="font-medium w-20 text-gray-400">Email:</span>
                  <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline truncate">{user.email}</a>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-20 text-gray-400">Phone:</span>
                  <span className="truncate">{user.phone}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-20 text-gray-400">Website:</span>
                  <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline truncate">
                    {user.website}
                  </a>
                </div>
              </div>

              {/* Secure Nested Property Handling: Address */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Location</h3>
                <p className="text-sm text-gray-700 font-medium">
                  {user.address.suite}, {user.address.street}
                </p>
                <p className="text-xs text-gray-500">
                  {user.address.city}, {user.address.zipcode}
                </p>
              </div>
            </div>

            {/* Secure Nested Property Handling: Company */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-auto">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Company</h3>
              <p className="text-sm font-bold text-gray-800">{user?.company.name}</p>
              <p className="text-xs text-gray-500 italic mt-0.5">"{user.company.catchPhrase}"</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
