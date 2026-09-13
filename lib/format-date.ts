export function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let relative = '';

  if (yearsAgo > 0) {
    relative = `há ${yearsAgo} ${yearsAgo > 1 ? 'anos' : 'ano'}`;
  } else if (monthsAgo > 0) {
    relative = `há ${monthsAgo} ${monthsAgo > 1 ? 'meses' : 'mês'}`;
  } else if (daysAgo > 0) {
    relative = `há ${daysAgo} ${daysAgo > 1 ? 'dias' : 'dia'}`;
  } else {
    relative = 'hoje';
  }

  const fullDate = targetDate.toLocaleString('pt-BR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${relative})`;
}
