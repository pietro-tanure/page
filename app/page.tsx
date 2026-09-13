import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Critical Theory & Marxism Study Group
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          We're a reading and discussion group working through critical
          theory and Marxist thought — from foundational texts to their
          application to history, politics, and culture. This site collects
          notes and write-ups from each meeting as the group goes.
        </p>
        <p>
          Start with{' '}
          <Link href="/blog/meeting-1-the-long-19th-century">
            our first meeting
          </Link>
          , a dialectical-materialist recap of the "long nineteenth century."
        </p>
      </div>
    </section>
  );
}
