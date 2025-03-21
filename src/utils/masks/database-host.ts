export function databaseHostMask(value: string): string {
  return value.replace(/^(\d{2,3})(\d{1,3})(\d{1,3})(\d{1,3})/, "$1.$2.$3.$4");
}