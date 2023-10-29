export function formatDateTime(dt: string) {
  const dateTime = new Date(dt);

  // Format the date
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return dateTime.toLocaleDateString("en-US", options);
}
