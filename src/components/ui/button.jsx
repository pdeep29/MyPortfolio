import React from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const variantClasses = {
    default:
        'bg-teal-600 text-white hover:bg-teal-700 shadow',
    destructive:
        'bg-red-500 text-white hover:bg-red-600 shadow-sm',
    outline:
        'border border-gray-300 dark:border-gray-700 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white',
    secondary:
        'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700',
    ghost:
        'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white',
    link:
        'text-teal-600 underline-offset-4 hover:underline',
};

const sizeClasses = {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 rounded-md px-3 text-xs',
    lg: 'h-10 rounded-md px-8',
    icon: 'h-9 w-9',
};

const Button = React.forwardRef(
    ({ className, variant = 'default', size = 'default', disabled, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                disabled={disabled}
                className={cn(
                    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2',
                    'disabled:pointer-events-none disabled:opacity-50',
                    variantClasses[variant] || variantClasses.default,
                    sizeClasses[size] || sizeClasses.default,
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';

export { Button };
