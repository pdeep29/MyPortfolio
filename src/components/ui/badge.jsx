import React from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const variantClasses = {
    default:
        'bg-teal-600 text-white hover:bg-teal-700 border-transparent',
    secondary:
        'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 border-transparent',
    destructive:
        'bg-red-500 text-white hover:bg-red-600 border-transparent',
    outline:
        'text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700',
};

const Badge = ({ className, variant = 'default', ...props }) => {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2',
                variantClasses[variant] || variantClasses.default,
                className
            )}
            {...props}
        />
    );
};

export { Badge };
