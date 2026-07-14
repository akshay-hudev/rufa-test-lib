export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

export function slugify(text: string): string {
  return text
    .normalize("NFKD")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function parseDateRange(input: string): { start: Date; end: Date } {
  const [startText, endText] = input.split("..", 2);
  if (!startText || !endText) {
    throw new Error("Date range must use the format <start>..<end>");
  }

  const start = new Date(startText);
  const end = new Date(endText);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    throw new Error("Date range contains an invalid date");
  }
  if (start > end) {
    throw new Error("Date range start must not be after its end");
  }

  return { start, end };
}

export function debounce<T extends (...args: any[]) => void>(fn: T, ms: number): T {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  return function debounced(this: ThisParameterType<T>, ...args: Parameters<T>): void {
    if (timeout !== undefined) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => fn.apply(this, args), ms);
  } as T;
}
