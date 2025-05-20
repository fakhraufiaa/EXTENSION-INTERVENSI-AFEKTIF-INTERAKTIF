import { useState, useEffect } from 'react';
import EmojiPicker from './EmojiPicker';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // Load status dari chrome.storage saat App pertama kali dibuka
  useEffect(() => {
    chrome.storage.local.get(['extensionStatus'], (result) => {
      const savedStatus = result.extensionStatus;
      if (typeof savedStatus === 'boolean') {
        setIsActive(savedStatus);
        setShowEmojiPicker(savedStatus);
      }
    });
  }, []);

  // Fungsi saat toggle diubah
  const toggleExtension = () => {
    const newStatus = !isActive;
    setIsActive(newStatus);
    setShowEmojiPicker(newStatus);
    chrome.storage.local.set({ extensionStatus: newStatus });
  };

  const handleSelectEmotion = (label: string) => {
    console.log('Emosi dipilih:', label);
    setShowEmojiPicker(false); // bisa disesuaikan
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 text-slate-700 font-sans">
      <div className="w-[360px] bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-all duration-300">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-900 tracking-tight">EMODU Extension</h1>
        </div>

        <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
          <span className="text-sm font-semibold text-slate-600">Status:</span>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-400">{isActive ? 'Aktif' : 'Nonaktif'}</span>
            <label className="relative inline-block w-12 h-7">
              <input
                type="checkbox"
                checked={isActive}
                onChange={toggleExtension}
                className="opacity-0 w-0 h-0 peer"
              />
              <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-slate-300 rounded-full peer-checked:bg-blue-500 transition duration-300"></span>
              <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow peer-checked:translate-x-5 transition duration-300"></span>
            </label>
            <span className="text-sm font-semibold text-blue-600">Aktif</span>
          </div>
        </div>

        <p className="text-sm text-slate-500 text-center leading-relaxed px-2">
          Klik tombol di atas untuk mengaktifkan atau menonaktifkan extension. Saat aktif, EMODU akan membantu mengidentifikasi emosi Anda.
        </p>

        {showEmojiPicker && (
          <div className="mt-6">
            <EmojiPicker onSelect={handleSelectEmotion} />
          </div>
        )}

        <div className="text-center text-xs text-slate-400 mt-6">
          © 2023 <span className="font-semibold">EMODU</span> - Versi 1.0.0
        </div>
      </div>
    </div>
  );
}

export default App;
