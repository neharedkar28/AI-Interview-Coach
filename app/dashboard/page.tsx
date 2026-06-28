export default function DashboardPage() {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-10">
  
        <h1 className="text-5xl font-bold">
          Dashboard
        </h1>
  
        <div className="grid md:grid-cols-3 gap-6 mt-10">
  
          <div className="bg-slate-900 p-6 rounded-xl">
            <h2>Total Interviews</h2>
            <p className="text-4xl font-bold mt-4">12</p>
          </div>
  
          <div className="bg-slate-900 p-6 rounded-xl">
            <h2>Average Score</h2>
            <p className="text-4xl font-bold mt-4">8.4</p>
          </div>
  
          <div className="bg-slate-900 p-6 rounded-xl">
            <h2>Strongest Skill</h2>
            <p className="text-4xl font-bold mt-4">React</p>
          </div>
  
        </div>
  
      </main>
    );
  }