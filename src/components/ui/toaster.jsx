import React, { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { toastStore } from '../../lib/toast-store';

const variantConfig = {
    default: { bg: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700', icon: <Info className="w-4 h-4 text-teal-500" /> },
    destructive: { bg: 'bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800', icon: <AlertCircle className="w-4 h-4 text-red-500" /> },
    success: { bg: 'bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800', icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
};

const ToastItem = ({ id, title, description, variant = 'default', onDismiss }) => {
    const [visible, setVisible] = useState(false);
    useEffect(() => { const t = setTimeout(() => setVisible(true), 10); return () => clearTimeout(t); }, []);
    const cfg = variantConfig[variant] || variantConfig.default;
    return (
        <div className={`flex items-start gap-3 rounded-xl p-4 shadow-xl w-full max-w-sm pointer-events-auto transition-all duration-300 ${cfg.bg} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} role="alert">
            <div className="mt-0.5 shrink-0">{cfg.icon}</div>
            <div className="flex-1 min-w-0">
                {title && <p className="text-sm font-semibold text-gray-900 dark:text-white">{title}</p>}
                {description && <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">{description}</p>}
            </div>
            <button onClick={() => onDismiss(id)} className="shrink-0 opacity-60 hover:opacity-100 transition-opacity touch-manipulation" aria-label="Dismiss">
                <X className="w-4 h-4 text-gray-400" />
            </button>
        </div>
    );
};

export const Toaster = () => {
    const [toasts, setToasts] = useState([]);
    useEffect(() => { const unsub = toastStore.subscribe(setToasts); return unsub; }, []);
    if (toasts.length === 0) return null;
    return (
        <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none w-[calc(100vw-2rem)] sm:w-auto max-w-sm" aria-live="polite">
            {toasts.map((t) => <ToastItem key={t.id} {...t} onDismiss={toastStore.remove} />)}
        </div>
    );
};

export default Toaster;
