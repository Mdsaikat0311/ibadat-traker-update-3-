import React from 'react';
import { BookOpen, Scroll, CheckCircle2, X, BookmarkCheck } from 'lucide-react';
import { EntryReminderItem } from '../../data/entryDailyReminderBank';

interface EntryReminderDialogProps {
  item: EntryReminderItem;
  onDismiss: () => void;
}

export const EntryReminderDialog: React.FC<EntryReminderDialogProps> = ({ item, onDismiss }) => {
  const isQuran = item.type === 'quran';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-teal-100 max-h-[85vh] animate-in zoom-in-95 duration-200">
        {/* Header with decorative Islamic aesthetic */}
        <div className={`px-4 sm:px-5 py-3.5 border-b flex items-center justify-between ${
          isQuran
            ? 'bg-gradient-to-r from-emerald-50 via-teal-50 to-white border-emerald-100'
            : 'bg-gradient-to-r from-teal-50 via-cyan-50 to-white border-teal-100'
        }`}>
          <div className="flex items-center gap-2.5 min-w-0">
            <div className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
              isQuran ? 'bg-emerald-600 text-white' : 'bg-teal-600 text-white'
            }`}>
              {isQuran ? <BookOpen className="w-5 h-5" /> : <Scroll className="w-5 h-5" />}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                  isQuran ? 'bg-emerald-100 text-emerald-800' : 'bg-teal-100 text-teal-800'
                }`}>
                  {item.badgeTitle}
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-600 truncate mt-0.5">
                {item.category}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onDismiss}
            aria-label="বন্ধ করুন"
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content body - scrollable with fixed max-height */}
        <div className="p-4 sm:p-5 overflow-y-auto max-h-[50vh] sm:max-h-[54vh] space-y-3.5 divide-y divide-slate-100">
          {/* Narrator if available */}
          {item.narrator && (
            <div className="pb-1 text-xs font-medium text-teal-800 bg-teal-50/70 px-3 py-1.5 rounded-xl border border-teal-100/80">
              📜 {item.narrator}
            </div>
          )}

          {/* Meaning / Translation text ONLY (clean Bengali without Arabic) */}
          <div className="pt-2 text-slate-800 text-sm sm:text-base leading-relaxed tracking-normal font-normal select-text whitespace-pre-wrap">
            {item.meaning}
          </div>

          {/* Exact Reference Box */}
          <div className="pt-3">
            <div className="bg-amber-50/90 border border-amber-200/90 rounded-2xl p-3 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5 shadow-2xs">
              <BookmarkCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="font-bold text-amber-900 block text-[11px] uppercase tracking-wider mb-0.5">
                  রেফারেন্স ও সনদ:
                </span>
                <span className="font-medium text-slate-800 leading-snug">
                  {item.reference}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with user-requested single confirmation button "পড়েছি" */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-100">
          <button
            type="button"
            onClick={onDismiss}
            className="w-full py-3 px-4 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-sm sm:text-base rounded-2xl shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.99]"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>পড়েছি</span>
          </button>
        </div>
      </div>
    </div>
  );
};
