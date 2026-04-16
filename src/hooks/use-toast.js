import { useState, useEffect, useCallback } from 'react';
import { toastStore, toast as _toast } from '../lib/toast-store';

export const useToast = () => {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        const unsub = toastStore.subscribe(setToasts);
        return unsub;
    }, []);

    const dismiss = useCallback((id) => toastStore.remove(id), []);

    return { toasts, toast: _toast, dismiss };
};

export { _toast as toast };
