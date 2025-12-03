import { useEffect } from 'react';

const EnterpriseKiHub = () => {
  useEffect(() => {
    document.title = 'Enterprise KI Hub | SONARIS';
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Enterprise <span className="text-cyan-400">KI Hub</span>
        </h1>
        <p className="text-slate-400 text-lg">
          Diese Seite ist in Entwicklung.
        </p>
      </div>
    </div>
  );
};

export default EnterpriseKiHub;
