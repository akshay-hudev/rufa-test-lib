export function slugify(input: string): string {
  return input.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function truncateText(input: string, max: number): string {
  return input.length <= max ? input : `${input.slice(0, Math.max(0, max - 1))}…`;
}

export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}

export function normalizeLegacyReference(value: string): string {
  return value.replace(/\s+/g, " ").trim().toUpperCase();
}

export function deprecatedChecksum(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) hash = (hash * 31 + input.charCodeAt(i)) | 0;
  return hash;
}