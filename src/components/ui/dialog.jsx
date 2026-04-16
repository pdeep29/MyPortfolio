import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

// Context
const DialogContext = React.createContext({});

const Dialog = ({ children, open: controlledOpen, onOpenChange, defaultOpen = false }) => {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : internalOpen;

    const setOpen = (val) => {
        if (!isControlled) setInternalOpen(val);
        onOpenChange?.(val);
    };

    // Lock body scroll when open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <DialogContext.Provider value={{ open, setOpen }}>
            {children}
        </DialogContext.Provider>
    );
};

const DialogTrigger = ({ children, asChild }) => {
    const { setOpen } = React.useContext(DialogContext);
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            onClick: (e) => {
                children.props.onClick?.(e);
                setOpen(true);
            },
        });
    }
    return (
        <button onClick={() => setOpen(true)}>
            {children}
        </button>
    );
};

const DialogPortal = ({ children }) => {
    const { open } = React.useContext(DialogContext);
    if (!open) return null;
    return children;
};

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => {
    const { setOpen } = React.useContext(DialogContext);
    return (
        <div
            ref={ref}
            onClick={() => setOpen(false)}
            className={cn(
                'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm',
                'animate-in fade-in-0',
                className
            )}
            {...props}
        />
    );
});
DialogOverlay.displayName = 'DialogOverlay';

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => {
    const { open, setOpen } = React.useContext(DialogContext);
    const contentRef = useRef(null);

    // Close on Escape
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') setOpen(false); };
        if (open) document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [open, setOpen]);

    if (!open) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                onClick={() => setOpen(false)}
            />
            {/* Content */}
            <div
                ref={ref || contentRef}
                role="dialog"
                aria-modal="true"
                className={cn(
                    'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
                    'w-full max-w-lg max-h-[90vh] overflow-y-auto',
                    'rounded-xl border border-gray-200 dark:border-gray-800',
                    'bg-white dark:bg-gray-900 text-gray-900 dark:text-white',
                    'shadow-2xl p-6',
                    className
                )}
                onClick={(e) => e.stopPropagation()}
                {...props}
            >
                {children}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-teal-500"
                    aria-label="Close"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </>
    );
});
DialogContent.displayName = 'DialogContent';

const DialogHeader = ({ className, ...props }) => (
    <div
        className={cn('flex flex-col space-y-1.5 text-center sm:text-left mb-4', className)}
        {...props}
    />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }) => (
    <div
        className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4', className)}
        {...props}
    />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn('text-lg font-semibold leading-none tracking-tight', className)}
        {...props}
    />
));
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn('text-sm text-gray-500 dark:text-gray-400', className)}
        {...props}
    />
));
DialogDescription.displayName = 'DialogDescription';

export {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
};
