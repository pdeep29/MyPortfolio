import React, { useState, createContext, useContext } from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const TabsContext = createContext({});

const Tabs = ({ defaultValue, value: controlledValue, onValueChange, className, children, ...props }) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;

    const setValue = (val) => {
        if (!isControlled) setInternalValue(val);
        onValueChange?.(val);
    };

    return (
        <TabsContext.Provider value={{ value, setValue }}>
            <div className={cn('w-full', className)} {...props}>
                {children}
            </div>
        </TabsContext.Provider>
    );
};

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        role="tablist"
        className={cn(
            'inline-flex h-9 items-center justify-center rounded-lg',
            'bg-gray-100 dark:bg-gray-800 p-1 text-gray-500 dark:text-gray-400',
            className
        )}
        {...props}
    />
));
TabsList.displayName = 'TabsList';

const TabsTrigger = React.forwardRef(({ className, value, children, ...props }, ref) => {
    const { value: selectedValue, setValue } = useContext(TabsContext);
    const isSelected = selectedValue === value;

    return (
        <button
            ref={ref}
            role="tab"
            aria-selected={isSelected}
            onClick={() => setValue(value)}
            className={cn(
                'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1',
                'text-sm font-medium ring-offset-white transition-all',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2',
                'disabled:pointer-events-none disabled:opacity-50',
                isSelected
                    ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow'
                    : 'hover:bg-white/50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
});
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = React.forwardRef(({ className, value, children, ...props }, ref) => {
    const { value: selectedValue } = useContext(TabsContext);
    if (selectedValue !== value) return null;

    return (
        <div
            ref={ref}
            role="tabpanel"
            className={cn(
                'mt-2 ring-offset-white',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
});
TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, TabsTrigger, TabsContent };
