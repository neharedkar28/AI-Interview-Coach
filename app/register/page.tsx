export default function RegisterPage() {
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="bg-slate-900 p-10 rounded-2xl w-[500px]">
  
          <h1 className="text-3xl text-white font-bold mb-6">
            Register
          </h1>
  
          <input placeholder="Name" className="w-full p-3 rounded mb-3" />
          <input placeholder="Phone" className="w-full p-3 rounded mb-3" />
          <input placeholder="DOB" className="w-full p-3 rounded mb-3" />
          <input placeholder="Email" className="w-full p-3 rounded mb-3" />
          <input placeholder="Password" type="password" className="w-full p-3 rounded mb-3" />
  
          <button className="bg-blue-600 w-full p-3 rounded text-white">
            Register
          </button>
  
        </div>
      </main>
    );
  }