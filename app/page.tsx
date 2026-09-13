import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Grupo de Estudos de Teoria Crítica e Marxismo
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Somos um grupo de leitura e discussão que estuda a teoria crítica e o pensamento
          marxista — dos textos fundamentais à sua aplicação à história, à política e à cultura.
          Este site reúne as notas e os registros de cada encontro à medida que o grupo avança.
        </p>
        <p>
          Comece pelo{' '}
          <Link href="/blog/meeting-1-the-long-19th-century">nosso primeiro encontro</Link>, um
          resumo materialista-dialético do "longo século XIX".
        </p>
      </div>
    </section>
  );
}
