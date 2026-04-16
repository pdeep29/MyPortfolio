import React from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <textarea
            ref={ref}
            className={cn(
                'flex min-h-[60px] w-full rounded-md border border-gray-300 dark:border-gray-700',
                'bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-white shadow-sm',
                'placeholder:text-gray-400 dark:placeholder:text-gray-500',
                'transition-colors resize-none',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:border-teal-500',
                'disabled:cursor-not-allowed disabled:opacity-50',
                className
            )}
            {...props}
        />
    );
});
Textarea.displayName = 'Textarea';

export { Textarea };
