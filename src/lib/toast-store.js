// Shared singleton store for toasts — used by both useToast hook and Toaster component

let _listeners = [];
let _toasts = [];

export const toastStore = {
    subscribe: (listener) => {
        _listeners.push(listener);
        listener([..._toasts]);
        return () => {
            _listeners = _listeners.filter((l) => l !== listener);
        };
    },
    add: ({ title, description, variant = 'default', duration = 4000 }) => {
        const id = Math.random().toString(36).slice(2);
        const newToast = { id, title, description, variant, duration };
        _toasts = [..._toasts, newToast];
        _listeners.forEach((l) => l([..._toasts]));

        if (duration > 0) {
            setTimeout(() => toastStore.remove(id), duration);
        }
        return { id };
    },
    remove: (id) => {
        _toasts = _toasts.filter((t) => t.id !== id);
        _listeners.forEach((l) => l([..._toasts]));
    },
};

export const toast = (options) => toastStore.add(options);
