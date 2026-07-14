export declare function formatCurrency(amount: number): string;
export declare function slugify(text: string): string;
export declare function parseDateRange(input: string): {
    start: Date;
    end: Date;
};
export declare function debounce<T extends (...args: any[]) => void>(fn: T, ms: number): T;
