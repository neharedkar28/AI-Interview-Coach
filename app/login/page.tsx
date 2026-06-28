export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-10 rounded-2xl w-96">

        <h1 className="text-3xl font-bold text-white mb-6">
          Login
        </h1>

        <input
          placeholder="Email"
          className="w-full p-3 rounded mb-4 bg-slate-800 text-white"
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full p-3 rounded mb-4 bg-slate-800 text-white"
        />

        <button className="bg-blue-600 hover:bg-blue-700 w-full p-3 rounded text-white">
          Login
        </button>

      </div>

    </main>
  );
}