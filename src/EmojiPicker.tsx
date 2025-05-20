
interface EmojiPickerProps {
  onSelect: (label: string) => void;
}

export default function EmojiPicker({ onSelect }: EmojiPickerProps) {
  const moods = [
    { label: 'Senang', emoji: '😊', style: 'bg-green-100 border-green-300 text-green-700 hover:bg-green-200 focus:ring-green-400' },
    { label: 'Netral', emoji: '😐', style: 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 focus:ring-gray-400' },
    { label: 'Sedih', emoji: '😟', style: 'bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200 focus:ring-blue-400' },
    { label: 'Marah', emoji: '😡', style: 'bg-red-100 border-red-300 text-red-700 hover:bg-red-200 focus:ring-red-400' },
    { label: 'Bingung', emoji: '😕', style: 'bg-yellow-100 border-yellow-300 text-yellow-700 hover:bg-yellow-200 focus:ring-yellow-400' },
  ];

  return (
    <div className="max-w-md bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Bagaimana perasaanmu?</h2>

      <div className="grid grid-cols-3 gap-4">
        {moods.map(({ label, emoji, style }) => (
          <button
            key={label}
            onClick={() => onSelect(label)}
            className={`flex flex-col items-center p-4 rounded-lg border font-semibold focus:outline-none focus:ring-2 transition duration-200 ${style}`}
          >
            <span className="text-4xl mb-2">{emoji}</span>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
